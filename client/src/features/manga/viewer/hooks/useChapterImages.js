// @ts-check

import { useSuspenseQuery } from "@tanstack/react-query";
import { useLocation, useParams, useSearchParams } from "react-router";
import { axiosMangaInstance } from "../../api/axios.manga";
import { useCallback, useDeferredValue, useMemo, useState } from "react";

export function useChapterImages() {
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

  const [index, setIndex] = useState(() => {
    const pageFromUrl = searchParams.get("page");
    if (pageFromUrl) {
      const pageIndex = parseInt(pageFromUrl) - 1;
      if (pageIndex < 0) return 0;
      return Math.min(pageIndex, size - 1);
    }

    if (location.state?.action === "prev") return size - 1;
    return 0;
  });

  const deferredIndex = useDeferredValue(index);

  const handleIndexChange = useCallback(
    // @ts-ignore
    (index) => {
      setIndex(index);
      setSearchParams({ page: index + 1 }, { replace: true });
    },
    [setSearchParams],
  );

  const isIndexAtStart = index === 0;
  const isIndexAtEnd = index === size - 1;

  const ctx = useMemo(() => {
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

  return ctx;
}
