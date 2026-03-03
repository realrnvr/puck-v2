import "./manga-chapters-feed.css";

import MangaChaptersFeedFooter from "../manga_chapters_feed_footer/MangaChaptersFeedFooter";

import { axiosMangaInstance } from "../../api/axios.manga";
import { useCallback, useMemo, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Virtuoso } from "react-virtuoso";

export default function MangaChaptersFeed({ mangaId }) {
  const [order, setOrder] = useState("desc");

  const [activeVolume, setActiveVolume] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);

  const parentRef = useRef(null);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
  } = useInfiniteQuery({
    queryKey: ["chapters", mangaId, order],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await axiosMangaInstance.get(`/${mangaId}/chapters`, {
        params: {
          cursor: pageParam,
          limit: 50,
          order,
        },
      });

      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const flatList = useMemo(() => {
    if (!data?.pages) return [];

    const seen = new Set();
    const rows = [];
    const allItems = data.pages.flatMap((p) => p.data);

    let currentVolume = null;
    let currentChapter = null;

    for (const item of allItems) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);

      const attr = item.attributes;
      const volume = attr.volume ?? "NO_VOLUME";
      const chapter = attr.chapter ?? "0";

      if (volume !== currentVolume) {
        rows.push({
          type: "volume",
          id: `volume-${volume}`,
          volume,
        });
        currentVolume = volume;
        currentChapter = null;
      }

      if (chapter !== currentChapter) {
        rows.push({
          type: "chapterHeader",
          id: `chapter-${volume}-${chapter}`,
          volume,
          chapter,
        });
        currentChapter = chapter;
      }

      rows.push({
        type: "chapterVariant",
        id: item.id,
        volume,
        chapter,
        lang: attr.translatedLanguage,
        title: attr.title ?? "No Title",
        pages: attr.pages ?? 0,
      });
    }

    return rows;
  }, [data]);

  const firstVolume = flatList.find((item) => item.type === "volume")?.volume;
  const firstChapter = flatList.find(
    (item) => item.type === "chapterHeader",
  )?.chapter;

  const displayVolume = activeVolume ?? firstVolume;
  const displayChapter = activeChapter ?? firstChapter;

  const handleRangeChange = useCallback(
    (range) => {
      const firstVisible = flatList[range.startIndex];
      if (!firstVisible) return;

      setActiveVolume(firstVisible.volume ?? null);

      if (
        firstVisible.type === "chapterHeader" ||
        firstVisible.type === "chapterVariant"
      ) {
        setActiveChapter(firstVisible.chapter);
      } else {
        setActiveChapter(null);
      }
    },
    [flatList],
  );

  function handleOrder() {
    setOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
  }

  function handleScrollTop() {
    if (!parentRef.current) return;

    parentRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (isPending)
    return <div className="manga-chapters-feed__loader">Loading...</div>;

  if (error)
    return <div className="manga-chapters-feed__loader">{error.message}</div>;

  return (
    <div className="manga-chapters-feed">
      <div className="manga-chapters-feed__header">
        <p>
          {displayVolume === "NO_VOLUME"
            ? "Volume —"
            : `Volume ${displayVolume ?? ""}`}
          {displayChapter && <span> • Chapter {displayChapter}</span>}
        </p>
        <div className="manga-chapters-feed__header-side-btn-conatiner">
          <button onClick={handleOrder}>
            {order === "desc" ? "Descending" : "Ascending"}
          </button>
          <button onClick={handleScrollTop}>Top</button>
        </div>
      </div>
      <Virtuoso
        ref={parentRef}
        style={{ height: "600px" }}
        data={flatList}
        rangeChanged={handleRangeChange}
        context={{ hasNextPage }}
        endReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        itemContent={(_, row) => {
          if (row.type === "volume") {
            return (
              <div className="manga-chapters-feed__volume">
                {row.volume === "NO_VOLUME"
                  ? "Volume —"
                  : `Volume ${row.volume}`}
              </div>
            );
          }

          if (row.type === "chapterHeader") {
            return (
              <div className="manga-chapters-feed__chapter-header">
                Chapter {row.chapter}
              </div>
            );
          }

          return (
            <div className="manga-chapters-feed__chapter-card">
              <div className="manga-chapters-feed__meta">
                <span className="manga-chapters-feed__badge">
                  {row.lang?.toUpperCase()}
                </span>
                <span>{row.title}</span>
                <span>{row.pages} pages</span>
              </div>
            </div>
          );
        }}
        components={{
          Footer: MangaChaptersFeedFooter,
        }}
      />
    </div>
  );
}
