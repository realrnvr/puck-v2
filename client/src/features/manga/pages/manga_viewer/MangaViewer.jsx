import "./manga-viewer.css";

import { useParams } from "react-router";
import { Suspense } from "react";

import Skeleton from "../../skeletons/Skeleton";
import LightBoxBase from "../../viewer/core/lightbox/LightBoxBase";

export default function MangaViewer() {
  const { chapterId } = useParams();
  return (
    <Suspense fallback={<Skeleton />}>
      <LightBoxBase key={chapterId} />
    </Suspense>
  );
}
