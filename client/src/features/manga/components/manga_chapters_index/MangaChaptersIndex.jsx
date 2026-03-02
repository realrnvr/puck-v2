import "./manga-chapters-index.css";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Virtuoso } from "react-virtuoso";

import axios from "axios";
import MangaChapterVariants from "../manga_chapter_variants/MangaChapterVariants";

function MangaChaptersIndex({ mangaId }) {
  const [expandedVolumes, setExpandedVolumes] = useState(new Set());
  const [expandedChapters, setExpandedChapters] = useState(new Set());

  const { data, status, error } = useQuery({
    queryKey: ["aggregate", mangaId],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/manga/${mangaId}/aggregate`,
      );
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

      if (!expandedVolumes.has(volume)) continue;

      const chapters = Object.values(volumeObj.chapters);

      for (const chapterObj of chapters) {
        const chapter = chapterObj.chapter ?? "0";

        result.push({
          type: "chapter",
          id: `chapter-${volume}-${chapter}`,
          volume,
          chapter,
          count: chapterObj.count,
        });
      }
    }

    return result;
  }, [data, expandedVolumes]);

  const toggleVolume = (volume) => {
    setExpandedVolumes((prev) => {
      const next = new Set(prev);
      next.has(volume) ? next.delete(volume) : next.add(volume);
      return next;
    });
  };

  const toggleChapter = (volume, chapter) => {
    const key = `${volume}-${chapter}`;
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>{error.message}</p>;

  return (
    <div className="reader-container">
      <Virtuoso
        useWindowScroll={true}
        className="reader-list"
        data={rows}
        itemContent={(index, row) => {
          if (row.type === "volume") {
            const isOpen = expandedVolumes.has(row.volume);

            return (
              <div
                className="volume-header clickable"
                onClick={() => toggleVolume(row.volume)}
              >
                <span>Volume {row.volume === "none" ? "—" : row.volume}</span>
                <span>{isOpen ? "▾" : "▸"}</span>
              </div>
            );
          }

          if (row.type === "chapter") {
            return (
              <MangaChapterVariants
                mangaId={mangaId}
                row={row}
                isExpanded={expandedChapters.has(
                  `${row.volume}-${row.chapter}`,
                )}
                toggleChapter={toggleChapter}
              />
            );
          }
        }}
      />
    </div>
  );
}
export default MangaChaptersIndex;
