import "./manga-chapters-feed-footer.css";

export default function MangaChaptersFeedFooter({
  context: { isFetchingNextPage, hasNextPage },
}) {
  return isFetchingNextPage ? (
    <div className="manga-chapters-feed__loader">Loading more...</div>
  ) : hasNextPage ? (
    <div className="manga-chapters-feed__loader">Load more</div>
  ) : (
    <div className="manga-chapters-feed__loader">No more chapters</div>
  );
}
