import { Router } from "express";
import {
  getChapterVariants,
  getMangaAggregate,
  getMangaChapters,
} from "../controller/manga.controller.js";

export const router = Router();

router.route("/:mangaId/chapters").get(getMangaChapters);
router.route("/:mangaId/aggregate").get(getMangaAggregate);
router.route("/:mangaId/chapter").get(getChapterVariants);
