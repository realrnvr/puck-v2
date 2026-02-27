import "./manga-details-page.css";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

function MangaDetailsPage() {
  const { data, isPending, error } = useQuery({
    queryKey: ["chapter"],
    queryFn: async () =>
      await axios.get("http://localhost:3000/api/v1/manga/chapters"),
  });

  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>MangaDetails</div>;
}

export default MangaDetailsPage;
