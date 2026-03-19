import "./reader.css";

import { Virtuoso } from "react-virtuoso";
import { InfiniteScrollFooter } from "../../../component/infinite_scroll_footer/InfiniteScrollFooter";

export default function Reader({ children, reader }) {
  return (
    <>
      {children}
      <div className="reader">
        <div className="reader__left">
          <div className="reader__count">
            <div>
              <p>volume: {reader.activeChapter?.volume}</p>
              <p>chapter: {reader.activeChapter?.chapter}</p>
            </div>
            <div>
              <div>
                <button
                  onClick={reader.handlePrevChapter}
                  disabled={!reader.getPrevChapter(reader.rows, reader.index)}
                >
                  prev chapter
                </button>
                <button
                  onClick={reader.handleNextChapter}
                  disabled={!reader.getNextChapter(reader.rows, reader.index)}
                >
                  next chapter
                </button>
              </div>
            </div>
          </div>
          <div>
            {reader.isPending && <div>Loading...</div>}
            {reader.isError && <div>{reader.error.message}</div>}
            {!reader.isPending && !reader.isError && (
              <Virtuoso
                className="reader__list"
                data={reader.rows}
                itemContent={(_, row) => {
                  if (row.type === "volume") {
                    return (
                      <div
                        className="reader__list-volume-header"
                        style={{
                          backgroundColor:
                            row.volume === reader.activeVolume ? "pink" : null,
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
                          backgroundColor: row.chapterId.has(reader.chapterId)
                            ? "pink"
                            : null,
                        }}
                        onClick={() =>
                          reader.handleOnClickNavigation({
                            newChapterId: row.chapterId.values().next().value,
                            newLanguage: reader.language,
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
            {reader.staticsIsPending && <div>Loading...</div>}
            {reader.staticsIsError && <div>{reader.staticsError.message}</div>}
            {!reader.staticsIsPending && !reader.staticsError && (
              <>
                <div>
                  Manga: {Object.values(reader.mangaData.attributes.title)[0]}
                </div>
                <div>Chapter: {reader.staticsData.data.attributes.title}</div>
              </>
            )}
          </div>
          <div className="chapter-list">
            {reader.isInifintePending && <div>Loading...</div>}
            {reader.infiniteError && (
              <div>Error: {reader.infiniteError.message}</div>
            )}
            {!reader.isInifintePending && !reader.infiniteError && (
              <Virtuoso
                data={reader.infiniteData}
                context={{
                  hasNextPage: reader.hasNextPage,
                  fetchNextPage: reader.fetchNextPage,
                  isFetching: reader.isFetching,
                  isFetchingNextPage: reader.isFetchingNextPage,
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
                        backgroundColor:
                          row.id === reader.chapterId ? "pink" : null,
                      }}
                      onClick={() =>
                        reader.handleOnClickNavigation({
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
                  Footer: InfiniteScrollFooter,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
