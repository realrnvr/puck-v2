import "./manga-chapters-index.css";

import MangaChapterVariants from "../manga_chapter_variants/MangaChapterVariants";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Virtuoso } from "react-virtuoso";
import { axiosMangaInstance } from "../../api/axios.manga";

function MangaChaptersIndex({ mangaId }) {
  const [expandedVolumes, setExpandedVolumes] = useState(new Set());

  const { data, isPending, error } = useQuery({
    queryKey: ["aggregate", mangaId],
    queryFn: async () => {
      const res = await axiosMangaInstance.get(`/${mangaId}/aggregate`);
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
    setExpandedVolumes((prevExpandedVolumes) => {
      const nextExpandedVolumes = new Set(prevExpandedVolumes);
      nextExpandedVolumes.has(volume)
        ? nextExpandedVolumes.delete(volume)
        : nextExpandedVolumes.add(volume);
      return nextExpandedVolumes;
    });
  };

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="manga-chapter-index">
      <Virtuoso
        useWindowScroll={true}
        className="manga-chapter-index__list"
        data={rows}
        itemContent={(_, row) => {
          if (row.type === "volume") {
            const isOpen = expandedVolumes.has(row.volume);

            return (
              <div
                className="manga-chapter-index__volume-header"
                onClick={() => toggleVolume(row.volume)}
              >
                <span>Volume {row.volume === "none" ? "—" : row.volume}</span>
                <span>{isOpen ? "▾" : "▸"}</span>
              </div>
            );
          }

          if (row.type === "chapter") {
            return <MangaChapterVariants mangaId={mangaId} row={row} />;
          }
        }}
      />
    </div>
  );
}
export default MangaChaptersIndex;
