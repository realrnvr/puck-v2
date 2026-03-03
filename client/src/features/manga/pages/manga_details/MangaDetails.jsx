import "./manga-details.css";

import MangaChaptersIndex from "../../components/manga_chapters_index/MangaChaptersIndex";
import MangaChaptersFeed from "../../components/manga_chapters_feed/MangaChaptersFeed";

import { useParams } from "react-router";

function MangaDetails() {
  const { mangaId } = useParams();

  return (
    <div>
      <MangaChaptersIndex mangaId={mangaId} />
      <MangaChaptersFeed mangaId={mangaId} />
    </div>
  );
}

export default MangaDetails;
