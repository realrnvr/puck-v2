import axios from "axios";

export const axiosMangadexInstance = axios.create({
  baseURL: "https://api.mangadex.org/",
});
