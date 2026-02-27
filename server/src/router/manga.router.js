import { Router } from "express";
import { fetch } from "../controller/manga.controller.js";

export const router = Router();

router.route("/chapters").get(fetch);
