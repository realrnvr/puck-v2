import "./manga-details.css";

import MangaChaptersIndex from "../../components/manga_chapters_index/MangaChaptersIndex";

import { useParams } from "react-router";

function MangaDetails() {
  const { mangaId } = useParams();

  return (
    <div>
      <MangaChaptersIndex mangaId={mangaId} />
    </div>
  );
}

export default MangaDetails;
