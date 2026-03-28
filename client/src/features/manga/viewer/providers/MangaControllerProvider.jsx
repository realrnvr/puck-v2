// @ts-check

import { useNavigate, useParams } from "react-router";
import { MangaControllerContext } from "../context/MangaControllerContext";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { axiosMangaInstance } from "../../api/axios.manga";
import { useCallback, useMemo } from "react";
import { useLightBoxProps } from "../hooks/useLightBoxProps";

// @ts-ignore
export default function MangaControllerProvider({ children }) {
  const { mangaId, chapterId, language } = useParams();
  const navigate = useNavigate();
  // @ts-ignore
  const { isRTL } = useLightBoxProps();

  // Fetch chapter aggragte for rendering chapter List
  const {
    data: chapterAggregateData,
    isPending: chapterAggregateIsPending,
    isError: chapterAggregateIsError,
    error: chapterAggregateError,
  } = useQuery({
    queryKey: ["viewer_aggregate", mangaId, chapterId, language],
    queryFn: async () => {
      const response = await axiosMangaInstance.get(`/${mangaId}/aggregate`, {
        params: {
          translatedLanguage: [language],
        },
      });

      return response.data;
    },
    placeholderData: keepPreviousData,
  });

  const chapterListRows = useMemo(() => {
    if (!chapterAggregateData?.volumes) return [];
    const labledChapterListRows = [];

    for (const volumeObj of Object.values(chapterAggregateData.volumes)) {
      const volume = volumeObj.volume ?? "none";

      // Start with volume -> mark volume [x] as the header
      labledChapterListRows.push({
        type: "volume",
        id: `volume-${volume}`,
        volume,
      });

      const chapters = Object.values(volumeObj.chapters);
      // parseFloat because chapter can be 0.1 ... 0.9 ...
      chapters.sort((a, b) => parseFloat(a.chapter) - parseFloat(b.chapter));

      for (const chapterObj of chapters) {
        const chapter = chapterObj.chapter ?? "0";

        // Put all chapters which are under same volume [x]
        labledChapterListRows.push({
          type: "chapter",
          id: `chapter-${volume}-${chapter}`,
          volume,
          chapter,
          count: chapterObj.count,
          // Same language chapter can have multiple translations
          chapterId: new Set([chapterObj.id, ...chapterObj.others]),
        });
      }
    }

    return labledChapterListRows;
  }, [chapterAggregateData]);

  // Derive active chapter index using [chapterId]
  const activeChapterIndex = useMemo(
    () =>
      chapterListRows?.findIndex(
        (row) => row.type === "chapter" && row?.chapterId?.has(chapterId),
      ),
    [chapterListRows, chapterId],
  );

  // Derive active chapter and volume
  const activeChapterRow = useMemo(
    () => chapterListRows?.[activeChapterIndex],
    [chapterListRows, activeChapterIndex],
  );
  const activeVolumeRow = useMemo(
    () => chapterListRows?.[activeChapterIndex]?.volume,
    [chapterListRows, activeChapterIndex],
  );

  const getNextChapterIdByIndex = useCallback(
    // @ts-ignore
    (index) => {
      if (index === -1) return null;

      for (let i = index + 1; i < chapterListRows.length; ++i) {
        if (chapterListRows[i].type === "chapter") {
          return chapterListRows[i]?.chapterId?.values().next().value;
        }
      }

      return null;
    },
    [chapterListRows],
  );

  const getPrevChapterIdByIndex = useCallback(
    // @ts-ignore
    (index) => {
      if (index === -1) return null;

      for (let i = index - 1; i >= 0; --i) {
        if (chapterListRows[i].type === "chapter")
          return chapterListRows[i]?.chapterId?.values().next().value;
      }

      return null;
    },
    [chapterListRows],
  );

  const handleNextChapter = useCallback(() => {
    const next = getNextChapterIdByIndex(activeChapterIndex);
    if (!next) return;

    navigate(`/viewer/${mangaId}/${next}/${language}`, {
      state: {
        action: "next",
      },
    });
  }, [
    getNextChapterIdByIndex,
    activeChapterIndex,
    navigate,
    mangaId,
    language,
  ]);

  const handlePrevChapter = useCallback(() => {
    const prev = getPrevChapterIdByIndex(activeChapterIndex);
    if (!prev) return;

    navigate(`/viewer/${mangaId}/${prev}/${language}`, {
      state: {
        action: "prev",
      },
    });
  }, [
    getPrevChapterIdByIndex,
    activeChapterIndex,
    navigate,
    mangaId,
    language,
  ]);

  const handleOnClickChapterNavigation = useCallback(
    // @ts-ignore
    ({ newChapterId, newLanguage }) => {
      navigate(`/viewer/${mangaId}/${newChapterId}/${newLanguage}`, {
        state: {
          action: "jump",
        },
      });
    },
    [navigate, mangaId],
  );

  // Fetch chapter meta-data
  const {
    data: chapterStaticsData,
    error: chapterStaticsError,
    isPending: chapterStaticsIsPending,
    isError: chapterStaticsIsError,
  } = useQuery({
    queryKey: ["chapter_statics", chapterId],
    queryFn: async () => {
      const response = await axiosMangaInstance.get(`/chapter/${chapterId}`);
      return response.data;
    },
  });

  const mangaStatics = useMemo(() => {
    return chapterStaticsData?.data?.relationships?.find(
      // @ts-ignore
      (item) => item.type === "manga",
    );
  }, [chapterStaticsData]);

  const {
    data: chapterVariantsData,
    error: chapterVariantsError,
    fetchNextPage: chapterVariantsFetchNextPage,
    hasNextPage: chapterVariantsHasNextPage,
    isFetching: chapterVariantsIsFetching,
    isFetchingNextPage: chapterVariantsIsFetchingNextPage,
    isPending: chapterVariantsIsPending,
  } = useInfiniteQuery({
    queryKey: [
      "chapter_variants",
      mangaId,
      activeChapterRow?.volume,
      activeChapterRow?.chapter,
      language,
    ],
    queryFn: async ({ pageParam }) => {
      const response = await axiosMangaInstance.get(`/${mangaId}/chapter`, {
        params: {
          volume: activeChapterRow?.volume,
          chapter: activeChapterRow?.chapter,
          offset: pageParam,
          limit: 100,
          // translatedLanguage: [language],
        },
      });
      return response.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset ?? undefined,
    enabled: !!activeChapterRow,
    placeholderData: keepPreviousData,
    select: (data) => {
      return data?.pages?.flatMap((p) => p.data);
    },
  });

  const ctx = useMemo(
    () => ({
      chapter: {
        activeRow: activeChapterRow,
        activeVolume: activeVolumeRow,
        index: activeChapterIndex,
        id: chapterId,
        language,
        list: chapterListRows,
      },

      navigation: {
        next: isRTL ? handlePrevChapter : handleNextChapter,
        prev: isRTL ? handleNextChapter : handlePrevChapter,
        goTo: handleOnClickChapterNavigation,
        getNextId: isRTL ? getPrevChapterIdByIndex : getNextChapterIdByIndex,
        getPrevId: isRTL ? getNextChapterIdByIndex : getPrevChapterIdByIndex,
      },

      aggregate: {
        isPending: chapterAggregateIsPending,
        isError: chapterAggregateIsError,
        error: chapterAggregateError,
      },

      statics: {
        manga: mangaStatics,
        data: chapterStaticsData,
        isPending: chapterStaticsIsPending,
        isError: chapterStaticsIsError,
        error: chapterStaticsError,
      },

      variants: {
        data: chapterVariantsData,
        error: chapterVariantsError,
        fetchNext: chapterVariantsFetchNextPage,
        hasNext: chapterVariantsHasNextPage,
        isFetching: chapterVariantsIsFetching,
        isFetchingNext: chapterVariantsIsFetchingNextPage,
        isPending: chapterVariantsIsPending,
      },
    }),
    [
      activeChapterRow,
      activeVolumeRow,
      activeChapterIndex,
      chapterId,
      language,
      chapterListRows,
      handleNextChapter,
      handlePrevChapter,
      handleOnClickChapterNavigation,
      getNextChapterIdByIndex,
      getPrevChapterIdByIndex,
      chapterAggregateIsPending,
      chapterAggregateIsError,
      chapterAggregateError,
      mangaStatics,
      chapterStaticsData,
      chapterStaticsIsPending,
      chapterStaticsIsError,
      chapterStaticsError,
      chapterVariantsData,
      chapterVariantsError,
      chapterVariantsFetchNextPage,
      chapterVariantsHasNextPage,
      chapterVariantsIsFetching,
      chapterVariantsIsFetchingNextPage,
      chapterVariantsIsPending,
      isRTL,
    ],
  );
  return (
    // @ts-ignore
    <MangaControllerContext value={ctx}>{children}</MangaControllerContext>
  );
}
