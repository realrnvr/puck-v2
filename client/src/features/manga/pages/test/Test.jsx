import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "./test.css";

import LightBox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";

import { createModule } from "yet-another-react-lightbox";
import { useNavigate, useParams } from "react-router";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { axiosMangaInstance } from "../../api/axios.manga";
import { useMemo, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { Range } from "react-range";
import Select from "react-select";

// const slides = [
//   { src: "/mock-1.jpg" },
//   { src: "/mock-2.jpg" },
//   { src: "/mock-3.jpg" },
//   { src: "/mock-4.jpg" },
//   { src: "/mock-5.jpg" },
//   { src: "/mock-6.jpg" },
// ];

function MyComponent({ children }) {
  const navigate = useNavigate();
  const { mangaId, chapterId, language } = useParams();

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

  return (
    <>
      {children}
      <div className="reader">
        <div className="reader__left">
          <div className="reader__count">
            <div>
              <p>volume: {activeChapter?.volume}</p>
              <p>chapter: {activeChapter?.chapter}</p>
            </div>
            <div>
              <div>
                <button
                  onClick={handlePrevChapter}
                  disabled={!getPrevChapter(rows, index)}
                >
                  prev chapter
                </button>
                <button
                  onClick={handleNextChapter}
                  disabled={!getNextChapter(rows, index)}
                >
                  next chapter
                </button>
              </div>
            </div>
          </div>
          <div>
            {isPending && <div>Loading...</div>}
            {isError && <div>{error.message}</div>}
            {!isPending && !isError && (
              <Virtuoso
                className="reader__list"
                data={rows}
                itemContent={(_, row) => {
                  if (row.type === "volume") {
                    return (
                      <div
                        className="reader__list-volume-header"
                        style={{
                          backgroundColor:
                            row.volume === activeVolume ? "pink" : null,
                        }}
                      >
                        <span>
                          Volume {row.volume === "none" ? "—" : row.volume}
                        </span>
                      </div>
                    );
                  }

                  if (row.type === "chapter") {
                    return (
                      <div
                        className="reader__list-chapter"
                        style={{
                          backgroundColor: row.chapterId.has(chapterId)
                            ? "pink"
                            : null,
                        }}
                        onClick={() =>
                          handleOnClickNavigation({
                            newChapterId: row.chapterId.values().next().value,
                            newLanguage: language,
                          })
                        }
                      >
                        chapter: {row.chapter}
                      </div>
                    );
                  }
                }}
              />
            )}
          </div>
        </div>
        <div className="chapter-meta">
          <div className="meta-info">
            {staticsIsPending && <div>Loading...</div>}
            {staticsIsError && <div>{staticsError.message}</div>}
            {!staticsIsPending && !staticsError && (
              <>
                <div>Manga: {Object.values(mangaData.attributes.title)[0]}</div>
                <div>Chapter: {staticsData.data.attributes.title}</div>
              </>
            )}
          </div>
          <div className="chapter-list">
            {isInifintePending && <div>Loading...</div>}
            {infiniteError && <div>Error: {infiniteError.message}</div>}
            {!isInifintePending && !infiniteError && (
              <Virtuoso
                data={infiniteData}
                context={{
                  hasNextPage,
                  fetchNextPage,
                  isFetching,
                  isFetchingNextPage,
                }}
                itemContent={(_, row) => {
                  const attr = row.attributes;

                  const group = row.relationships?.find(
                    (r) => r.type === "scanlation_group",
                  );

                  const user = row.relationships?.find(
                    (r) => r.type === "user",
                  );

                  return (
                    <div
                      key={row.id}
                      className="manga-chapter-variants__chapter-card"
                      style={{
                        backgroundColor: row.id === chapterId ? "pink" : null,
                      }}
                      onClick={() =>
                        handleOnClickNavigation({
                          newChapterId: row.id,
                          newLanguage: attr.translatedLanguage,
                        })
                      }
                    >
                      <div className="manga-chapter-variants__chapter-title">
                        {attr.title ?? `Ch. ${attr.chapter}`}
                      </div>

                      <div className="manga-chapter-variants__chapter-meta">
                        <span>{attr.translatedLanguage?.toUpperCase()}</span>
                        <span>{group?.attributes?.name ?? "No Group"}</span>
                        <span>{user?.attributes?.username ?? ""}</span>
                      </div>
                    </div>
                  );
                }}
                components={{
                  Footer: Footer,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Footer({
  context: { hasNextPage, fetchNextPage, isFetching, isFetchingNextPage },
}) {
  return (
    <div className="manga-chapter-varaints__load-more">
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetching}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
            ? "Load More"
            : "..."}
      </button>
    </div>
  );
}

const MyModule = createModule("MyModule", MyComponent);

function MyPlugin({ addSibling, contains }) {
  addSibling("controller", MyModule);
  console.log("contains MyModule:", contains("MyModule"));
}

const imageFitOptions = [
  { value: "contain", label: "Contain" },
  { value: "cover", label: "Cover" },
];

const animationOptions = [
  { value: "ease", label: "Ease" },
  { value: "ease-in", label: "Ease In" },
  { value: "ease-out", label: "Ease Out" },
  { value: "ease-in-out", label: "Ease In Out" },
  { value: "linear", label: "Linear" },
];

// second comp
function MySecondComponent({
  children,
  control: { carousel, setCarousel, animation, setAnimation, zoom, setZoom },
}) {
  console.log(carousel);
  return (
    <>
      {children}
      <div className="control" style={{ backgroundColor: "#2e2d2d" }}>
        <div>
          <Range
            label="Select your value"
            step={1}
            min={0}
            max={100}
            values={carousel.padding}
            onChange={(e) =>
              setCarousel((prevCarousel) => {
                return {
                  ...prevCarousel,
                  padding: e,
                };
              })
            }
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                key={props.key}
                style={{
                  ...props.style,
                  height: "15px",
                  width: "15px",
                  backgroundColor: "pink",
                  borderRadius: "20px",
                }}
              />
            )}
          />
          <p style={{ color: "#fff" }}>values: {carousel.padding}</p>
          <Range
            label="Select your value"
            step={1}
            min={0}
            max={100}
            values={carousel.spacing}
            onChange={(e) =>
              setCarousel((prevCarousel) => {
                return {
                  ...prevCarousel,
                  spacing: e,
                };
              })
            }
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                key={props.key}
                style={{
                  ...props.style,
                  height: "15px",
                  width: "15px",
                  backgroundColor: "pink",
                  borderRadius: "20px",
                }}
              />
            )}
          />
          <p style={{ color: "#fff" }}>values: {carousel.spacing}</p>
          <div style={{ marginTop: "5rem" }}>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={5}
              values={carousel.preload}
              onChange={(e) =>
                setCarousel((prevCarousel) => {
                  return {
                    ...prevCarousel,
                    preload: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
              renderMark={({ props }) => {
                return (
                  <div
                    {...props}
                    key={props.key}
                    style={{
                      ...props.style,
                      height: "35px",
                      width: "10px",
                      backgroundColor: "red",
                    }}
                  ></div>
                );
              }}
            />
            <p style={{ color: "#fff", marginTop: "1rem" }}>
              values: {carousel.preload}
            </p>
          </div>
          <div>
            <Select
              isSearchable={false}
              value={carousel.imageFit}
              name="imageFit"
              options={imageFitOptions}
              onChange={(e) =>
                setCarousel((prevCarousel) => {
                  return {
                    ...prevCarousel,
                    imageFit: e,
                  };
                })
              }
            />
          </div>
          <div>
            <Range
              label="Select your value"
              step={10}
              min={0}
              max={1000}
              values={animation.swipe}
              onChange={(e) =>
                setAnimation((prevAnimation) => {
                  return {
                    ...prevAnimation,
                    swipe: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>values: {animation.swipe}</p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={10}
              min={0}
              max={1000}
              values={animation.zoom}
              onChange={(e) =>
                setAnimation((prevAnimation) => {
                  return {
                    ...prevAnimation,
                    zoom: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff", marginTop: "1rem" }}>
              values: {animation.zoom}
            </p>
          </div>
          <div>
            <Select
              isSearchable={false}
              value={animation.easingSwipe}
              name="swipe"
              options={animationOptions}
              onChange={(e) =>
                setAnimation((prevAnimation) => {
                  return {
                    ...prevAnimation,
                    easingSwipe: e,
                  };
                })
              }
            />
          </div>
          <div>
            <Select
              isSearchable={false}
              value={animation.easingNavigation}
              name="navigation"
              options={animationOptions}
              onChange={(e) =>
                setAnimation((prevAnimation) => {
                  return {
                    ...prevAnimation,
                    easingNavigation: e,
                  };
                })
              }
            />
          </div>
        </div>
        <div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.minZoom}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    minZoom: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>values: {zoom.minZoom}</p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.maxZoomPixelRatio}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    maxZoomPixelRatio: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>values: {zoom.maxZoomPixelRatio}</p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.zoomInMultiplier}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    zoomInMultiplier: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>values: {zoom.zoomInMultiplier}</p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.doubleTapDelay}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    doubleTapDelay: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>values: {zoom.doubleTapDelay}</p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.doubleClickDelay}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    doubleClickDelay: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>values: {zoom.doubleClickDelay}</p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.doubleClickMaxStops}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    doubleClickMaxStops: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>values: {zoom.doubleClickMaxStops}</p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.keyboardMoveDistance}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    keyboardMoveDistance: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>values: {zoom.keyboardMoveDistance}</p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.wheelZoomDistanceFactor}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    wheelZoomDistanceFactor: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>
              values: {zoom.wheelZoomDistanceFactor}
            </p>
          </div>
          <div>
            <Range
              label="Select your value"
              step={1}
              min={0}
              max={1000}
              values={zoom.pinchZoomDistanceFactor}
              onChange={(e) =>
                setZoom((prevZoom) => {
                  return {
                    ...prevZoom,
                    pinchZoomDistanceFactor: e,
                  };
                })
              }
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    backgroundColor: "#fff",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: "15px",
                    width: "15px",
                    backgroundColor: "pink",
                    borderRadius: "20px",
                  }}
                />
              )}
            />
            <p style={{ color: "#fff" }}>
              values: {zoom.pinchZoomDistanceFactor}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const MySecondModule = createModule("MySecondModule", MySecondComponent);

function MySecondPlugin({ addSibling, contains }) {
  addSibling("controller", MySecondModule);
  console.log("contains MySecondModule:", contains("MySecondModule"));
}

export default function Test() {
  const { chapterId } = useParams();
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
    <div className="viewer">
      <LightBox
        on={{
          download: () => {
            console.log("loading...");
          },
        }}
        slides={slides}
        plugins={[
          Inline,
          Counter,
          Fullscreen,
          Download,
          Share,
          Slideshow,
          Zoom,
          MyPlugin,
          // MySecondPlugin,
        ]}
        carousel={{
          finite: carousel.finite,
          preload: carousel.preload,
          padding: `${carousel.padding}px`,
          spacing: `${carousel.spacing}%`,
          imageFit: carousel.imageFit,
        }}
        animation={{
          fade: 250,
          swipe: animation.swipe,
          easing: {
            fade: "ease",
            swipe: animation.easingSwipe.value,
            navigation: animation.easingNavigation.value,
          },
          zoom: animation.zoom[0],
        }}
        zoom={zoom}
        control={{
          carousel,
          setCarousel,
          animation,
          setAnimation,
          zoom,
          setZoom,
        }}
      />
    </div>
  );
}
