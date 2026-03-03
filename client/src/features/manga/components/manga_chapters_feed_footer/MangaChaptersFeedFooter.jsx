import "./manga-chapters-feed-footer.css";

export default function MangaChaptersFeedFooter({ context: { hasNextPage } }) {
  return hasNextPage ? (
    <div className="manga-chapters-feed__loader">Loading more...</div>
  ) : (
    <div className="manga-chapters-feed__loader">No more chapters</div>
  );
}
