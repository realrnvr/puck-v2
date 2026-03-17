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
import { useMemo } from "react";
import { Virtuoso } from "react-virtuoso";

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

  const index = rows?.findIndex(
    (item) => item.type === "chapter" && item?.chapterId?.has(chapterId),
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
        <div className="chapter-meta">
          <div className="meta-info">
            {staticsIsPending && <div>Loading...</div>}
            {staticsIsError && <div>{staticsError.message}</div>}
            {!staticsIsPending && !staticsError && (
              <>
                <div>
                  <div>
                    Manga: {Object.values(mangaData.attributes.title)[0]}
                  </div>
                  <div>Chapter: {staticsData.data.attributes.title}</div>
                </div>
                <div>
                  <button
                    onClick={handlePrevChapter}
                    disabled={!getPrevChapter(rows, index)}
                  >
                    prev
                  </button>
                  <button
                    onClick={handleNextChapter}
                    disabled={!getNextChapter(rows, index)}
                  >
                    next
                  </button>
                </div>
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

export default function Test() {
  const { chapterId } = useParams();

  const {
    data: imageData,
    isError: isImageError,
    isPending: isImagePending,
    error: imageError,
  } = useQuery({
    queryKey: ["chapterImage", chapterId],
    queryFn: async () => {
      const res = await axiosMangaInstance.get(`/chapter-image/${chapterId}`);
      return res.data;
    },
    enabled: !!chapterId,
  });

  return (
    <div className="viewer">
      <LightBox
        carousel={{ finite: true }}
        plugins={[
          Inline,
          Counter,
          Fullscreen,
          Download,
          Share,
          Slideshow,
          Zoom,
          MyPlugin,
        ]}
        slides={imageData?.data}
      />
    </div>
  );
}
