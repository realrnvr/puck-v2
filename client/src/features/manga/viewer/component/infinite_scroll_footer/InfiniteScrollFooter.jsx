export function InfiniteScrollFooter({
  context: { hasNextPage, fetchNextPage, isFetching, isFetchingNextPage },
}) {
  return (
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
  );
}
