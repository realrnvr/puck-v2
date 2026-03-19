import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "./light-box-base.css";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { animationOptions, imageFitOptions } from "../../assets/data";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { axiosMangaInstance } from "../../../api/axios.manga";
import ReaderPlugin from "../../plugin/ReaderPlugin";

export default function LightBoxBase() {
  const { mangaId, chapterId, language } = useParams();
  const navigate = useNavigate();
  // carousel
  const [carousel, setCarousel] = useState({
    finite: true,
    preload: [2],
    padding: [16],
    spacing: [30],
    imageFit: imageFitOptions[0],
  });

  // animation
  const [animation, setAnimation] = useState({
    swipe: [500],
    easingSwipe: animationOptions[2],
    easingNavigation: animationOptions[3],
    zoom: [500],
  });

  // zoom
  const [zoom, setZoom] = useState({
    minZoom: [1],
    maxZoomPixelRatio: [1],
    zoomInMultiplier: [2],
    doubleTapDelay: [300],
    doubleClickDelay: [500],
    doubleClickMaxStops: [2],
    keyboardMoveDistance: [50],
    wheelZoomDistanceFactor: [100],
    pinchZoomDistanceFactor: [100],
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["viewerAggregate", mangaId, language],
    queryFn: async () => {
      const res = await axiosMangaInstance.get(`/${mangaId}/aggregate`, {
        params: {
          translatedLanguage: [language],
        },
      });

      return res.data;
    },
  });

  const rows = useMemo(() => {
    if (!data?.volumes) return [];

    const result = [];

    for (const volumeObj of Object.values(data.volumes)) {
      const volume = volumeObj.volume ?? "none";

      result.push({
        type: "volume",
        id: `volume-${volume}`,
        volume,
      });

      const chapters = Object.values(volumeObj.chapters);
      chapters.sort((a, b) => {
        return parseFloat(a.chapter) - parseFloat(b.chapter);
      });

      for (const chapterObj of chapters) {
        const chapter = chapterObj.chapter ?? "0";

        result.push({
          type: "chapter",
          id: `chapter-${volume}-${chapter}`,
          volume,
          chapter,
          count: chapterObj.count,
          chapterId: new Set([chapterObj.id, ...chapterObj.others]),
        });
      }
    }

    return result;
  }, [data]);

  const index = useMemo(
    () =>
      rows?.findIndex(
        (item) => item.type === "chapter" && item?.chapterId?.has(chapterId),
      ),
    [rows, chapterId],
  );

  function getNextChapter(rows, index) {
    if (index === -1) return null;

    for (let i = index + 1; i < rows.length; ++i) {
      if (rows[i].type === "chapter") return rows[i];
    }

    return null;
  }

  function getPrevChapter(rows, index) {
    if (index === -1) return null;

    for (let i = index - 1; i >= 0; --i) {
      if (rows[i].type === "chapter") return rows[i];
    }

    return null;
  }

  function handleNextChapter() {
    const next = getNextChapter(rows, index);
    if (!next) return;

    navigate(
      `/test/${mangaId}/${next.chapterId.values().next().value}/${language}`,
    );
  }

  function handlePrevChapter() {
    const prev = getPrevChapter(rows, index);
    if (!prev) return;

    navigate(
      `/test/${mangaId}/${prev.chapterId.values().next().value}/${language}`,
    );
  }

  function handleOnClickNavigation({ newChapterId, newLanguage }) {
    navigate(`/test/${mangaId}/${newChapterId}/${newLanguage}`);
  }

  const {
    data: staticsData,
    erorr: staticsError,
    isPending: staticsIsPending,
    isError: staticsIsError,
  } = useQuery({
    queryKey: ["chapterStatics", chapterId],
    queryFn: async () => {
      const res = await axiosMangaInstance.get(`/chapter/${chapterId}`);
      return res.data;
    },
  });

  const mangaData = staticsData?.data?.relationships?.find(
    (item) => item.type === "manga",
  );

  const activeChapter = rows?.[index];
  const activeVolume = rows?.[index]?.volume;

  const {
    data: infiniteData,
    error: infiniteError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isPending: isInifintePending,
  } = useInfiniteQuery({
    queryKey: [
      "chapterViewerVariants",
      mangaId,
      activeChapter?.volume,
      activeChapter?.chapter,
      language,
    ],
    queryFn: async ({ pageParam }) => {
      const res = await axiosMangaInstance.get(`/${mangaId}/chapter`, {
        params: {
          volume: activeChapter?.volume,
          chapter: activeChapter?.chapter,
          offset: pageParam,
          limit: 100,
          // translatedLanguage: [language],
        },
      });
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset ?? undefined,
    enabled: !!activeChapter,
    placeholderData: keepPreviousData,
    select: (data) => {
      return data?.pages?.flatMap((p) => p.data);
    },
  });

  const {
    data: imageData,
    // isError: isImageError,
    // isPending: isImagePending,
    // error: imageError,
  } = useQuery({
    queryKey: ["chapterImage", chapterId],
    queryFn: async () => {
      const res = await axiosMangaInstance.get(`/chapter-image/${chapterId}`);
      return res.data;
    },
    enabled: !!chapterId,
  });

  const slides = imageData?.data;

  return (
    <div className="light-box-base">
      <Lightbox
        slides={slides}
        plugins={[
          Inline,
          Counter,
          Fullscreen,
          Download,
          Share,
          Slideshow,
          Zoom,
          ReaderPlugin,
        ]}
        carousel={{
          finite: carousel.finite,
          preload: carousel.preload[0],
          padding: `${carousel.padding[0]}px`,
          spacing: `${carousel.spacing[0]}%`,
          imageFit: carousel.imageFit.value,
        }}
        animation={{
          fade: 250,
          swipe: animation.swipe[0],
          easing: {
            fade: "ease",
            swipe: animation.easingSwipe.value,
            navigation: animation.easingNavigation.value,
          },
          zoom: animation.zoom[0],
        }}
        zoom={{
          minZoom: zoom.minZoom[0],
          maxZoomPixelRatio: zoom.maxZoomPixelRatio[0],
          zoomInMultiplier: zoom.zoomInMultiplier[0],
          doubleTapDelay: zoom.doubleTapDelay[0],
          doubleClickDelay: zoom.doubleClickDelay[0],
          doubleClickMaxStops: zoom.doubleClickMaxStops[0],
          keyboardMoveDistance: zoom.keyboardMoveDistance[0],
          wheelZoomDistanceFactor: zoom.wheelZoomDistanceFactor[0],
          pinchZoomDistanceFactor: zoom.pinchZoomDistanceFactor[0],
        }}
        control={{
          carousel,
          setCarousel,
          animation,
          setAnimation,
          zoom,
          setZoom,
        }}
        reader={{
          activeChapter,
          activeVolume,
          handleNextChapter,
          handlePrevChapter,
          getPrevChapter,
          getNextChapter,
          isPending,
          isError,
          error,
          rows,
          index,
          chapterId,
          handleOnClickNavigation,
          language,
          staticsIsPending,
          staticsIsError,
          staticsError,
          mangaData,
          staticsData,
          isInifintePending,
          infiniteError,
          infiniteData,
          hasNextPage,
          fetchNextPage,
          isFetching,
          isFetchingNextPage,
        }}
      />
      ;
    </div>
  );
}
