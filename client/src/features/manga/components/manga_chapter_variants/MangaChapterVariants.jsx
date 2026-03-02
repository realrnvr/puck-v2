import "./manga-chapter-variants.css";

import axios from "axios";

import { useInfiniteQuery } from "@tanstack/react-query";

function MangaChapterVariants({ mangaId, row, isExpanded, toggleChapter }) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["chapterVariants", mangaId, row.volume, row.chapter],
    queryFn: async ({ pageParam }) => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/manga/${mangaId}/chapter`,
        {
          params: {
            volume: row.volume,
            chapter: row.chapter,
            offset: pageParam,
            limit: 100,
          },
        },
      );
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset ?? undefined,
    enabled: isExpanded,
  });

  return (
    <div>
      <div
        className="chapter-header clickable"
        onClick={() => toggleChapter(row.volume, row.chapter)}
      >
        <span>
          Chapter {row.chapter} ({row.count})
        </span>
        <span>{isExpanded ? "▾" : "▸"}</span>
      </div>

      {isExpanded && (
        <div className="chapter-variants">
          {status === "pending" && (
            <div className="loader">Loading variants...</div>
          )}

          {status === "error" && (
            <div className="loader">Error: {error.message}</div>
          )}

          {data?.pages.map((page, pageIndex) => (
            <div key={pageIndex}>
              {page.data.map((item) => {
                const attr = item.attributes;

                const group = item.relationships?.find(
                  (r) => r.type === "scanlation_group",
                );

                const user = item.relationships?.find((r) => r.type === "user");

                return (
                  <div key={item.id} className="chapter-card">
                    <div className="chapter-title">
                      {attr.title ?? `Ch. ${attr.chapter}`}
                    </div>

                    <div className="chapter-meta">
                      <span>{attr.translatedLanguage?.toUpperCase()}</span>
                      <span>{group?.attributes?.name ?? "No Group"}</span>
                      <span>{user?.attributes?.username ?? ""}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetching}
              className="load-more"
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                  ? "Load More"
                  : "Nothing more to load"}
            </button>
          </div>

          <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
        </div>
      )}
    </div>
  );
}

export default MangaChapterVariants;
