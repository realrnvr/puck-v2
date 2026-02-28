import "./manga-details-page.css";

import axios from "axios";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useRef, useEffect, useCallback, useState } from "react";
import { useParams } from "react-router";
import { useVirtualizer } from "@tanstack/react-virtual";

function MangaDetailsPage() {
  const { mangaId } = useParams();
  const parentRef = useRef(null);

  const [collapsedVolumes, setCollapsedVolumes] = useState(new Set());
  const [collapsedChapters, setCollapsedChapters] = useState(new Set());

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["chapters", mangaId],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/manga/${mangaId}/chapters?cursor=${pageParam}&limit=50`,
      );
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  // Flatten + Group + Dedupe
  const flatList = useMemo(() => {
    if (!data?.pages) return [];

    const seen = new Set();
    const rows = [];
    const allItems = data.pages.flatMap((p) => p.data);

    const sorted = [...allItems].sort((a, b) => {
      const av = a.attributes.volume ?? "NO_VOLUME";
      const bv = b.attributes.volume ?? "NO_VOLUME";

      if (av === "NO_VOLUME" && bv !== "NO_VOLUME") return -1;
      if (bv === "NO_VOLUME" && av !== "NO_VOLUME") return 1;

      if (parseFloat(av) !== parseFloat(bv)) {
        return parseFloat(bv) - parseFloat(av);
      }

      return (
        parseFloat(b.attributes.chapter ?? "0") -
        parseFloat(a.attributes.chapter ?? "0")
      );
    });

    let currentVolume = null;
    let currentChapter = null;

    for (const item of sorted) {
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

      if (collapsedVolumes.has(volume)) continue;

      if (chapter !== currentChapter) {
        rows.push({
          type: "chapterHeader",
          id: `chapter-${volume}-${chapter}`,
          volume,
          chapter,
        });
        currentChapter = chapter;
      }

      if (!collapsedChapters.has(`${volume}-${chapter}`)) {
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
    }

    return rows;
  }, [data, collapsedVolumes, collapsedChapters]);

  const latestVolume = useMemo(() => {
    const firstVolume = flatList.find((r) => r.type === "volume");
    return firstVolume?.volume ?? null;
  }, [flatList]);

  const latestChapter = useMemo(() => {
    const firstChapter = flatList.find((r) => r.type === "chapterHeader");
    return firstChapter?.chapter ?? null;
  }, [flatList]);

  const [activeVolume, setActiveVolume] = useState(latestVolume);
  const [activeChapter, setActiveChapter] = useState(latestChapter);

  useEffect(() => {
    if (latestVolume) setActiveVolume(latestVolume);
    if (latestChapter) setActiveChapter(latestChapter);
  }, [latestVolume, latestChapter]);

  const getScrollElement = useCallback(() => parentRef.current, []);

  // Virtualizer
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? flatList.length + 1 : flatList.length,
    getScrollElement,
    estimateSize: (index) => {
      const type = flatList[index]?.type;
      if (type === "volume") return 55;
      if (type === "chapterHeader") return 48;
      return 85;
    },
    overscan: 12,
    getItemKey: (index) => flatList[index]?.id ?? `loader-${index}`,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  // FIX: Re-measure when structure changes
  useEffect(() => {
    rowVirtualizer.measure();
  }, [flatList, rowVirtualizer]);

  // Infinite Fetch
  useEffect(() => {
    const lastItem = virtualItems[virtualItems.length - 1];
    if (!lastItem) return;

    if (
      lastItem.index >= flatList.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    virtualItems,
    flatList.length,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ]);

  // Sticky Header
  useEffect(() => {
    const scrollEl = parentRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      const scrollTop = scrollEl.scrollTop;
      const items = rowVirtualizer.getVirtualItems();
      if (!items.length) return;

      let currentIndex = items[0].index;

      for (let i = 0; i < items.length; i++) {
        if (items[i].start <= scrollTop + 5) {
          currentIndex = items[i].index;
        } else {
          break;
        }
      }

      let foundVolume = null;
      let foundChapter = null;

      // Scan backwards
      for (let i = currentIndex; i >= 0; i--) {
        const row = flatList[i];

        if (!foundChapter && row?.type === "chapterHeader") {
          foundChapter = row.chapter;
        }

        if (row?.type === "volume") {
          foundVolume = row.volume;
          break;
        }
      }

      // If no chapter found (we are on volume header)
      if (!foundChapter && foundVolume) {
        for (let i = currentIndex; i < flatList.length; i++) {
          const row = flatList[i];
          if (row?.type === "chapterHeader" && row.volume === foundVolume) {
            foundChapter = row.chapter;
            break;
          }
        }
      }

      if (foundVolume !== activeVolume) {
        setActiveVolume(foundVolume);
      }

      if (foundChapter !== activeChapter) {
        setActiveChapter(foundChapter);
      }
    };

    scrollEl.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, [flatList, rowVirtualizer, activeVolume, activeChapter]);

  // Toggles
  const toggleVolume = (volume) => {
    setCollapsedVolumes((prev) => {
      const newSet = new Set(prev);
      newSet.has(volume) ? newSet.delete(volume) : newSet.add(volume);
      return newSet;
    });
  };

  const toggleChapter = (volume, chapter) => {
    const key = `${volume}-${chapter}`;
    setCollapsedChapters((prev) => {
      const newSet = new Set(prev);
      newSet.has(key) ? newSet.delete(key) : newSet.add(key);
      return newSet;
    });
  };

  const jumpToVolume = (volume) => {
    const index = flatList.findIndex(
      (r) => r.type === "volume" && r.volume === volume,
    );
    if (index !== -1) {
      rowVirtualizer.scrollToIndex(index, { align: "start" });
    }
  };

  const scrollToTop = () => {
    parentRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (status === "pending") return <div className="loading">Loading...</div>;
  if (status === "error") return <div className="error">{error.message}</div>;

  const volumeOptions = [
    ...new Set(
      flatList.filter((r) => r.type === "volume").map((r) => r.volume),
    ),
  ];

  return (
    <div className="page-wrapper">
      <div className="top-controls">
        <select onChange={(e) => jumpToVolume(e.target.value)}>
          <option value="">Jump to Volume</option>
          {volumeOptions.map((v) => (
            <option key={v} value={v}>
              {v === "NO_VOLUME" ? "Volume —" : `Volume ${v}`}
            </option>
          ))}
        </select>

        <button onClick={scrollToTop}>⬆ Top</button>
      </div>

      {
        <div className="sticky-global-header">
          {activeVolume === "NO_VOLUME" ? "Volume —" : `Volume ${activeVolume}`}
          {<span className="sticky-chapter"> • Chapter {activeChapter}</span>}
        </div>
      }

      <div
        ref={parentRef}
        className="parent-container"
        style={{ height: "80vh", overflowY: "auto" }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: "relative",
          }}
        >
          {virtualItems.map((virtualRow) => {
            const row = flatList[virtualRow.index];
            const isLoader = virtualRow.index > flatList.length - 1;

            return (
              <div
                key={virtualRow.index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              >
                {isLoader ? (
                  <div className="loader">
                    {hasNextPage ? "Loading more..." : "No more chapters"}
                  </div>
                ) : row.type === "volume" ? (
                  <div
                    className="volume-header"
                    onClick={() => toggleVolume(row.volume)}
                  >
                    {row.volume === "NO_VOLUME"
                      ? "Volume —"
                      : `Volume ${row.volume}`}
                  </div>
                ) : row.type === "chapterHeader" ? (
                  <div
                    className="chapter-header"
                    onClick={() => toggleChapter(row.volume, row.chapter)}
                  >
                    Chapter {row.chapter}
                  </div>
                ) : (
                  <div className="chapter-card animated">
                    <div className="chapter-meta">
                      <span className="language-badge">
                        {row.lang?.toUpperCase()}
                      </span>
                      <span>{row.title} </span>
                      <span>{row.pages} pages</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MangaDetailsPage;
