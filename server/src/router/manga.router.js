import { Router } from "express";
import {
  getChapterImages,
  getChapterStatics,
  getChapterVariants,
  getMangaAggregate,
  getMangaChapters,
  proxyChapterImage,
} from "../controller/manga.controller.js";

export const router = Router();

router.route("/:mangaId/chapters").get(getMangaChapters);
router.route("/:mangaId/aggregate").get(getMangaAggregate);
router.route("/:mangaId/chapter").get(getChapterVariants);
router.route("/chapter/:chapterId").get(getChapterStatics);
router.route("/chapter-image/:chapterId").get(getChapterImages);
// ${process.env.SERVER_BASE_URL}/api/v1/manga/proxy/chapter-image/${encodeURIComponent(baseUrl)}/${quality}/${hash}/${val}
router
  .route("/proxy/chapter-image/:baseUrl/:quality/:hash/:val")
  .get(proxyChapterImage);
