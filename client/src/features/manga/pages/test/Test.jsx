import axios from "axios";
import { Virtuoso } from "react-virtuoso";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { useInfiniteQuery } from "@tanstack/react-query";

import "./test.css";

export default function Test() {
  const { mangaId } = useParams();
  const [order] = useState("desc");

  const [activeVolume, setActiveVolume] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);

  const [collapsedVolumes, setCollapsedVolumes] = useState(new Set());
  const [collapsedChapters, setCollapsedChapters] = useState(new Set());

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    status,
  } = useInfiniteQuery({
    queryKey: ["chapters", mangaId, order],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/manga/${mangaId}/chapters`,
        { params: { cursor: pageParam, limit: 50, order } },
      );
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  /* -----------------------------
     Build rows (single pass)
  ----------------------------- */
  const rows = useMemo(() => {
    const allItems = data?.pages?.flatMap((p) => p.data) ?? [];
    const seen = new Set();
    const result = [];

    let currentVolume = null;
    let currentChapter = null;

    for (const item of allItems) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);

      const attr = item.attributes;
      const volume = attr.volume ?? "NO_VOLUME";
      const chapter = attr.chapter ?? "0";
      const chapterKey = `${volume}-${chapter}`;

      if (volume !== currentVolume) {
        result.push({ type: "volume", id: `volume-${volume}`, volume });
        currentVolume = volume;
        currentChapter = null;
      }

      if (collapsedVolumes.has(volume)) continue;

      if (chapter !== currentChapter) {
        result.push({
          type: "chapter",
          id: `chapter-${chapterKey}`,
          volume,
          chapter,
        });
        currentChapter = chapter;
      }

      if (collapsedChapters.has(chapterKey)) continue;

      result.push({
        type: "variant",
        id: item.id,
        volume,
        chapter,
        lang: attr.translatedLanguage,
        title: attr.title ?? "No Title",
        pages: attr.pages ?? 0,
      });
    }

    return result;
  }, [data?.pages, collapsedVolumes, collapsedChapters]);

  /* -----------------------------
     Initial fallback indicator
  ----------------------------- */
  const firstVolume = rows.find((r) => r.type === "volume")?.volume;
  const firstChapter = rows.find((r) => r.type === "chapter")?.chapter;

  const displayVolume = activeVolume ?? firstVolume;
  const displayChapter = activeChapter ?? firstChapter;

  /* -----------------------------
     Collapse toggles
  ----------------------------- */
  const toggleVolume = (volume) => {
    setCollapsedVolumes((prev) => {
      const next = new Set(prev);
      next.has(volume) ? next.delete(volume) : next.add(volume);
      return next;
    });
  };

  const toggleChapter = (volume, chapter) => {
    const key = `${volume}-${chapter}`;
    setCollapsedChapters((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  /* -----------------------------
     Collapse-triggered fetch fix
     (this is the key fix)
  ----------------------------- */

  if (status === "pending") return <p>Loading chapters...</p>;
  if (status === "error") return <p>{error?.message}</p>;

  return (
    <div className="reader-container">
      <div className="reader-indicator">
        {displayVolume && (
          <>
            Volume {displayVolume === "NO_VOLUME" ? "—" : displayVolume}
            {displayChapter && <> • Chapter {displayChapter}</>}
          </>
        )}
      </div>

      <Virtuoso
        className="reader-list"
        data={hasNextPage ? [...rows, { type: "loader", id: "loader" }] : rows}
        itemsRendered={(items) => {
          if (!items.length) return;

          const lastItem = items[items.length - 1];

          // Fetch when we reach the loader row
          if (
            hasNextPage &&
            !isFetchingNextPage &&
            lastItem.index >= rows.length - 1
          ) {
            fetchNextPage();
          }
        }}
        itemContent={(index, row) => {
          if (row.type === "loader") {
            return (
              <div className="loader">
                {isFetchingNextPage ? "Loading more..." : "Scroll to load more"}
              </div>
            );
          }
          if (row.type === "volume") {
            const isCollapsed = collapsedVolumes.has(row.volume);
            return (
              <div
                className="volume-header clickable"
                onClick={() => toggleVolume(row.volume)}
              >
                {row.volume === "NO_VOLUME"
                  ? "Volume —"
                  : `Volume ${row.volume}`}
                <span>{isCollapsed ? "▸" : "▾"}</span>
              </div>
            );
          }

          if (row.type === "chapter") {
            const key = `${row.volume}-${row.chapter}`;
            const isCollapsed = collapsedChapters.has(key);

            return (
              <div
                className="chapter-header clickable"
                onClick={() => toggleChapter(row.volume, row.chapter)}
              >
                Chapter {row.chapter}
                <span>{isCollapsed ? "▸" : "▾"}</span>
              </div>
            );
          }

          return (
            <div className="chapter-card">
              <div className="chapter-title">{row.title}</div>
              <div className="chapter-meta">
                <span>{row.lang?.toUpperCase()}</span>
                <span>{row.pages} pages</span>
              </div>
            </div>
          );
        }}
        rangeChanged={(range) => {
          const { startIndex, endIndex } = range;
          if (startIndex == null || endIndex == null) return;

          // 🔥 Infinite scroll (TanStack-style logic)
          if (
            hasNextPage &&
            !isFetchingNextPage &&
            !isFetching &&
            endIndex >= rows.length - 1
          ) {
            fetchNextPage();
          }

          // 🔥 Active tracking
          let volume = null;
          let chapter = null;

          for (let i = startIndex; i >= 0; i--) {
            const row = rows[i];
            if (!row) continue;

            if (!chapter && row.type === "chapter") {
              chapter = row.chapter;
            }

            if (!volume && row.type === "volume") {
              volume = row.volume;
            }

            if (volume && chapter) break;
          }

          setActiveVolume((prev) => (prev === volume ? prev : volume));
          setActiveChapter((prev) => (prev === chapter ? prev : chapter));
        }}
      />
    </div>
  );
}
