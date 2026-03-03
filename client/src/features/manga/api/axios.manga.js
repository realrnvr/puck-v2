import axios from "axios";

export const axiosMangaInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_MANGA_ENDPOINTS_BASE_URL,
});
