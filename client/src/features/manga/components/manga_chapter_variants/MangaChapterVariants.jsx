import "./manga-chapter-variants.css";

import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { axiosMangaInstance } from "../../api/axios.manga";

function MangaChapterVariants({ mangaId, row }) {
  const [expandedChapters, setExpandedChapters] = useState(new Set());
  const isExpanded = expandedChapters.has(`${row.volume}-${row.chapter}`);

  const toggleChapter = (volume, chapter) => {
    const key = `${volume}-${chapter}`;
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isPending,
  } = useInfiniteQuery({
    queryKey: ["chapterVariants", mangaId, row.volume, row.chapter],
    queryFn: async ({ pageParam }) => {
      const res = await axiosMangaInstance.get(`/${mangaId}/chapter`, {
        params: {
          volume: row.volume,
          chapter: row.chapter,
          offset: pageParam,
          limit: 100,
        },
      });
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset ?? undefined,
    enabled: isExpanded,
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <div
        className="manga-chapter-variants__chapter-header"
        onClick={() => toggleChapter(row.volume, row.chapter)}
      >
        <span>
          Chapter {row.chapter} ({row.count})
        </span>
        <span>{isExpanded ? "▾" : "▸"}</span>
      </div>

      {isExpanded && (
        <div className="manga-chapter-variants__chapter-variants">
          {isPending && <div>Loading variants...</div>}

          {error && <div>Error: {error.message}</div>}

          {data?.pages.map((page, pageIndex) => (
            <div key={pageIndex}>
              {page.data.map((item) => {
                const attr = item.attributes;

                const group = item.relationships?.find(
                  (r) => r.type === "scanlation_group",
                );

                const user = item.relationships?.find((r) => r.type === "user");

                return (
                  <div
                    key={item.id}
                    className="manga-chapter-variants__chapter-card"
                  >
                    <div className="manga-chapter-variants__chapter-title">
                      {attr.title ?? `Ch. ${attr.chapter}`}
                    </div>

                    <div className="manga-chapter-variants__chapter-meta">
                      <span>{attr.translatedLanguage?.toUpperCase()}</span>
                      <span>{group?.attributes?.name ?? "No Group"}</span>
                      <span>{user?.attributes?.username ?? ""}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <div className="manga-chapter-varaints__load-more">
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetching}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                  ? "Load More"
                  : "..."}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MangaChapterVariants;
