// @ts-check

import React from "react";
import { axiosMangaInstance } from "../../api/axios.manga";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useLocation, useParams, useSearchParams } from "react-router";
import { ChapterImagesContext } from "../context/ChapterImagesContext";

// @ts-ignore
export default function ChapterImagesProvider({ children }) {
  const { chapterId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const { data, isError, isPending, error } = useSuspenseQuery({
    queryKey: ["chapter_image", chapterId],
    queryFn: async () => {
      const response = await axiosMangaInstance.get(
        `/chapter-image/${chapterId}`,
      );
      return response.data;
    },
  });

  const images = data.data;
  const size = images.length;

  function initialIndexState() {
    const pageFromUrl = searchParams.get("page");
    if (pageFromUrl) {
      const pageIndex = parseInt(pageFromUrl) - 1;
      if (pageIndex < 0) return 0;
      return Math.min(pageIndex, size - 1);
    }

    if (location.state?.action === "prev") return size - 1;
    return 0;
  }

  const [currentChapterId, setCurrentChapterId] = React.useState(chapterId);
  const [index, setIndex] = React.useState(() => initialIndexState());

  // reset page index when chapter changes — during render, no effect needed
  if (currentChapterId !== chapterId) {
    setCurrentChapterId(chapterId);
    setIndex(() => initialIndexState());
  }

  const deferredIndex = React.useDeferredValue(index);

  const handleIndexChange = React.useCallback(
    // @ts-ignore
    (index) => {
      setIndex(index);
      setSearchParams({ page: index + 1 }, { replace: true });
    },
    [setSearchParams],
  );

  const isIndexAtStart = index === 0;
  const isIndexAtEnd = index === size - 1;

  const ctx = React.useMemo(() => {
    return {
      data: images,
      isError,
      isPending,
      error,
      index,
      deferredIndex,
      setIndex,
      handleIndexChange,
      isIndexAtStart,
      isIndexAtEnd,
    };
  }, [
    images,
    isError,
    isPending,
    error,
    index,
    deferredIndex,
    setIndex,
    handleIndexChange,
    isIndexAtStart,
    isIndexAtEnd,
  ]);

  // @ts-ignore
  return <ChapterImagesContext value={ctx}>{children}</ChapterImagesContext>;
}
