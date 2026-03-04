import { useParams } from "react-router";
import "./manga-viewer.css";

export default function MangaViwer() {
  const { chapterId } = useParams();

  return <div>{chapterId}</div>;
}
