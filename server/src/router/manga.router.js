import { Router } from "express";
import { getMangaChapters } from "../controller/manga.controller.js";

export const router = Router();

router.route("/:mangaId/chapters").get(getMangaChapters);
