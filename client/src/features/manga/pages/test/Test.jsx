import { useState } from "react";
import axios from "axios";

import "./test.css";

export default function Test() {
  const [offset, setOffset] = useState(0);
  const [allIds, setAllIds] = useState(new Set());
  const [duplicates, setDuplicates] = useState([]);

  const limit = 50;
  const mangaId = "db692d58-4b13-4174-ae8c-30c515c0689c"; // use ONE fixed manga

  const fetchPage = async () => {
    const res = await axios.get(
      `https://api.mangadex.org/manga/${mangaId}/feed`,
      {
        params: {
          limit,
          offset,
          "order[volume]": "asc",
          "order[chapter]": "asc",
          "order[createdAt]": "asc",
          "order[updatedAt]": "asc",
          "order[publishAt]": "asc",
          "order[readableAt]": "asc",
          "includes[]": ["scanlation_group", "user"],
          "contentRating[]": ["safe", "suggestive", "erotica", "pornographic"],
          includeUnavailable: 0,
        },
      },
    );

    const newDuplicates = [];
    const updatedIds = new Set(allIds);

    for (const item of res.data.data) {
      if (updatedIds.has(item.id)) {
        console.log("DUPLICATE FOUND:", item.id);
        newDuplicates.push(item.id);
      } else {
        updatedIds.add(item.id);
      }
    }

    setAllIds(updatedIds);
    setDuplicates((prev) => [...prev, ...newDuplicates]);
    setOffset((prev) => prev + limit);

    console.log("Fetched offset:", offset);
    console.log("Total unique IDs so far:", updatedIds.size);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={fetchPage}>Fetch Next Page (offset {offset})</button>

      <p>Total Unique IDs: {allIds.size}</p>
      <p>Duplicates Found: {duplicates.length}</p>

      {duplicates.length > 0 && (
        <div>
          <h3>Duplicate IDs:</h3>
          {duplicates.map((id) => (
            <p key={id}>{id}</p>
          ))}
        </div>
      )}
    </div>
  );
}
