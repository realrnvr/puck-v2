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

import { useDeferredValue, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { animationOptions, imageFitOptions } from "../../assets/data";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { axiosMangaInstance } from "../../../api/axios.manga";
import ReaderPlugin from "../../plugin/ReaderPlugin";
import RoomPlugin from "../../../pages/test/Test";
import { useRef } from "react";
import { useSocket } from "../../../../../core/socket/hooks/useSocket";
import { useEffect } from "react";
import { CustomCounterPlugin } from "../../plugin/CustomCounterPlugin";

export default function LightBoxBase() {
  const { mangaId, chapterId, language } = useParams();
  const navigate = useNavigate();
  const isRemoteUpdate = useRef(false);
  const socket = useSocket();

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

  // slideshow
  const [slideshow, setSlideshow] = useState({
    autoplay: false,
    delay: [3000],
  });

  // page index
  const [pageIndex, setPageIndex] = useState(0);
  const deferredPageIndex = useDeferredValue(pageIndex);

  // room state
  const [roomInput, setRoomInput] = useState("");
  const [joinedRoom, setJoinedRoom] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

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

  const chapterIndex = useMemo(
    () =>
      rows?.findIndex(
        (item) => item.type === "chapter" && item?.chapterId?.has(chapterId),
      ),
    [rows, chapterId],
  );

  function getNextChapter(index) {
    if (index === -1) return null;

    for (let i = index + 1; i < rows.length; ++i) {
      if (rows[i].type === "chapter")
        return rows[i].chapterId.values().next().value;
    }

    return null;
  }

  function getPrevChapter(index) {
    if (index === -1) return null;

    for (let i = index - 1; i >= 0; --i) {
      if (rows[i].type === "chapter")
        return rows[i].chapterId.values().next().value;
    }

    return null;
  }

  function handleNextChapter() {
    const next = getNextChapter(chapterIndex);
    if (!next) return;

    // setPageIndex(0);
    navigate(`/test/${mangaId}/${next}/${language}`);
  }

  function handlePrevChapter() {
    const prev = getPrevChapter(chapterIndex);
    if (!prev) return;

    // setPageIndex(0);
    navigate(`/test/${mangaId}/${prev}/${language}`);
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

  const activeChapter = rows?.[chapterIndex];
  const activeVolume = rows?.[chapterIndex]?.volume;

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

  // const {
  //   data: imageData,
  //   // isError: isImageError,
  //   // isPending: isImagePending,
  //   // error: imageError,
  // } = useQuery({
  //   queryKey: ["chapterImage", chapterId],
  //   queryFn: async () => {
  //     const res = await axiosMangaInstance.get(`/chapter-image/${chapterId}`);
  //     return res.data;
  //   },
  // });

  const anchorRef = useRef(null);

  const {
    data: chapterPages,
    fetchNextPage: chapterFetchNextPage,
    fetchPreviousPage: chapterFetchPreviousPage,
    hasNextPage: chapterHasNextPage,
    hasPreviousPage: chapterHasPreviousPage,
    isFetching: chapterIsFetching,
  } = useInfiniteQuery({
    queryKey: ["chapterImage"],

    queryFn: async ({ pageParam }) => {
      const res = await axiosMangaInstance.get(
        `/chapter-image/${pageParam.chapterId}`,
      );

      return {
        images: res.data.data,
        chapterId: pageParam.chapterId,
        chapterIndex: pageParam.chapterIndex,
        nextChapterId: getNextChapter(pageParam.chapterIndex),
        prevChapterId: getPrevChapter(pageParam.chapterIndex),
      };
    },

    initialPageParam: {
      chapterId,
      chapterIndex,
    },

    getNextPageParam: (lastPage) => {
      return lastPage.nextChapterId
        ? {
            chapterId: lastPage.nextChapterId,
            chapterIndex: lastPage.chapterIndex + 1,
          }
        : undefined;
    },
    getPreviousPageParam: (firstPage) => {
      if (!firstPage.prevChapterId) return undefined;

      return {
        chapterId: firstPage.prevChapterId,
        chapterIndex: firstPage.chapterIndex - 1,
      };
    },
    maxPages: 3,
    placeholderData: keepPreviousData,
    enabled: rows.length !== 0 && chapterIndex !== -1,
  });

  const slides = useMemo(() => {
    return (
      chapterPages?.pages.flatMap((chapter) =>
        chapter.images.map((img) => ({
          ...img,
          chapterId: chapter.chapterId,
        })),
      ) ?? []
    );
  }, [chapterPages]);

  const PREFETCH_THRESHOLD = 5;

  useEffect(() => {
    if (!slides.length) return;

    const needsNext = pageIndex >= slides.length - PREFETCH_THRESHOLD;
    const needsPrev = pageIndex < PREFETCH_THRESHOLD;

    if (needsNext && chapterHasNextPage && !chapterIsFetching) {
      chapterFetchNextPage();
    }

    if (needsPrev && chapterHasPreviousPage && !chapterIsFetching) {
      chapterFetchPreviousPage();
    }
  }, [
    pageIndex,
    slides.length,
    chapterFetchNextPage,
    chapterFetchPreviousPage,
    chapterHasNextPage,
    chapterHasPreviousPage,
    chapterIsFetching,
  ]);

  useEffect(() => {
    if (!anchorRef.current || !slides.length) return;

    const newIndex = slides.findIndex(
      (slide) => slide.src === anchorRef.current,
    );

    if (newIndex !== -1 && newIndex !== pageIndex) {
      setPageIndex(newIndex);
    }
  }, [pageIndex, slides]);

  // a
  const a = slides.findIndex((slide) => slide.chapterId === chapterId);
  // b
  const b = slides?.filter((slide) => slide.chapterId === chapterId)?.length;

  console.log(b);
  // room events
  useEffect(() => {
    function handleRoomCreated({ roomId }) {
      setJoinedRoom(roomId);
      setIsHost(true);
    }

    function handleJoinedRoom({ roomId, isHost, state }) {
      setJoinedRoom(roomId);
      setIsHost(isHost);

      if (state) {
        setPageIndex(state.page);
      }
    }

    function handleError(msg) {
      console.log("error:", msg);
    }

    function handleRoomClosed() {
      console.log("room closed");
      setJoinedRoom(null);
      setIsHost(false);
    }

    function handleReceiveMessage(data) {
      console.log("received:", data);

      setMessages((prev) => [...prev, data]);
    }

    function handleStateUpdate(state) {
      console.log("State update received:", state);

      isRemoteUpdate.current = true;

      if (setPageIndex) {
        setPageIndex(state.page);
      }
    }

    socket.on("room_created", handleRoomCreated);
    socket.on("joined_room", handleJoinedRoom);
    socket.on("error_msg", handleError);
    socket.on("room_closed", handleRoomClosed);
    socket.on("receive_message", handleReceiveMessage);
    socket.on("state_update", handleStateUpdate);

    return () => {
      socket.off("room_created", handleRoomCreated);
      socket.off("joined_room", handleJoinedRoom);
      socket.off("error_msg", handleError);
      socket.off("room_closed", handleRoomClosed);
      socket.off("receive_message", handleReceiveMessage);
      socket.off("state_update", handleStateUpdate);
    };
  }, [socket]);

  function createRoom() {
    if (!socket) return;

    console.log("creating room...");
    socket.emit("create_room");
  }

  function joinRoom() {
    if (!socket || !roomInput) return;

    console.log("joining room:", roomInput);
    socket.emit("join_room", { roomId: roomInput });
  }

  function sendMessage() {
    if (!joinedRoom || !message) return;

    socket.emit("send_message", {
      roomId: joinedRoom,
      message,
    });

    setMessage("");
  }

  function sendStateUpdate(state) {
    if (!joinedRoom || !isHost) return;

    socket.emit("sync_state", {
      roomId: joinedRoom,
      state,
    });
  }

  return (
    <div className="light-box-base">
      <Lightbox
        index={deferredPageIndex}
        slides={slides || []}
        plugins={[
          Inline,
          // Counter,
          CustomCounterPlugin,
          Fullscreen,
          Download,
          Share,
          Slideshow,
          Zoom,
          // ReaderPlugin,
          // RoomPlugin,
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
          slideshow,
          setSlideshow,
          pageIndex,
          setPageIndex,
          slidesLength: Math.max(1, slides?.length - 1),
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
          index: chapterIndex,
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
        room={{
          isRemoteUpdate,
          socket,
          createRoom,
          roomInput,
          setRoomInput,
          joinRoom,
          joinedRoom,
          isHost,
          message,
          setMessage,
          sendMessage,
          messages,
          sendStateUpdate,
        }}
        counter={{
          activeChapterCurrentIndex: pageIndex - a + 1,
          activeChapterSlideLength: b - a,
        }}
        on={{
          view: ({ index: currentIndex }) => {
            setPageIndex(currentIndex);

            const currentSlide = slides[currentIndex];
            if (currentSlide) {
              anchorRef.current = currentSlide.src; // 🔥 anchor

              if (currentSlide.chapterId !== chapterId) {
                navigate(
                  `/test/${mangaId}/${currentSlide.chapterId}/${language}`,
                  { replace: true }, // IMPORTANT
                );
              }
            }

            if (isRemoteUpdate.current) {
              isRemoteUpdate.current = false;
              return;
            }

            if (!isHost || !joinedRoom) return;

            socket.emit("sync_state", {
              roomId: joinedRoom,
              state: {
                chapter: chapterId,
                page: currentIndex,
              },
            });
          },
        }}
      />
      ;
    </div>
  );
}
