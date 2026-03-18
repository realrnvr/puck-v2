import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { normalizeArray } from "../helper/helper.controller.js";

export async function getMangaChapters(req, res) {
  const { mangaId } = req.params;
  const { cursor = 0, limit = 50, order = "desc" } = req.query;

  const translatedLanguage = req.query["translatedLanguage[]"];

  const safeLimit = Math.min(Number(limit), 100);
  const offset = Number(cursor);

  const response = await axios.get(
    `https://api.mangadex.org/manga/${mangaId}/feed`,
    {
      params: {
        limit: safeLimit,
        offset,
        "order[volume]": order,
        "order[chapter]": order,
        "includes[]": ["scanlation_group", "user"],
        "contentRating[]": ["safe", "suggestive", "erotica", "pornographic"],
        includeUnavailable: 0,
        ...(translatedLanguage && {
          "translatedLanguage[]": normalizeArray(translatedLanguage),
        }),
      },
    },
  );

  const { data, total } = response.data;

  const nextCursor = offset + safeLimit < total ? offset + safeLimit : null;

  return res.status(StatusCodes.OK).json({
    data,
    nextCursor,
    hasMore: nextCursor !== null,
  });
}

export async function getMangaAggregate(req, res) {
  const { mangaId } = req.params;
  const translatedLanguage = req.query["translatedLanguage[]"];
  const groups = req.query["groups[]"];

  const response = await axios.get(
    `https://api.mangadex.org/manga/${mangaId}/aggregate`,
    {
      params: {
        ...(translatedLanguage && {
          "translatedLanguage[]": normalizeArray(translatedLanguage),
        }),
        ...(groups && { "groups[]": normalizeArray(groups) }),
      },
      headers: {
        "User-Agent": "PuckRuntime",
      },
    },
  );

  return res.status(StatusCodes.OK).json({
    result: response.data.result,
    volumes: response.data.volumes,
  });
}

export async function getChapterVariants(req, res) {
  const { mangaId } = req.params;
  const translatedLanguage = req.query["translatedLanguage[]"];

  const { volume, chapter, offset = 0, limit = 100 } = req.query;

  if (!volume || !chapter) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "volume and chapter are required",
    });
  }

  const safeLimit = Math.min(Number(limit), 100); // MangaDex max is 100
  const safeOffset = Number(offset);

  const response = await axios.get(`https://api.mangadex.org/chapter`, {
    params: {
      manga: mangaId,
      volume,
      chapter,
      limit: safeLimit,
      offset: safeOffset,
      "includes[]": ["scanlation_group", "user"],
      "contentRating[]": ["safe", "suggestive", "erotica", "pornographic"],
      ...(translatedLanguage && {
        "translatedLanguage[]": normalizeArray(translatedLanguage),
      }),
    },
  });

  const { data, total } = response.data;

  const nextOffset =
    safeOffset + safeLimit < total ? safeOffset + safeLimit : null;

  return res.status(StatusCodes.OK).json({
    data,
    total,
    nextOffset,
    hasMore: nextOffset !== null,
  });
}
// https://api.mangadex.org/chapter/c22821a7-5903-41da-84b7-86a67dadc6d3?includes[]=scanlation_group&includes[]=manga&includes[]=user

export async function getChapterStatics(req, res) {
  const { chapterId } = req.params;

  const response = await axios.get(
    `https://api.mangadex.org/chapter/${chapterId}`,
    {
      params: {
        "includes[]": ["scanlation_group", "manga", "user"],
      },
    },
  );

  const { data } = response.data;
  return res.status(StatusCodes.OK).json({ data });
}

export async function getChapterImages(req, res) {
  const {
    params: { chapterId },
    query: { quality = "data" },
  } = req;

  const response = await axios.get(
    `https://api.mangadex.org/at-home/server/${chapterId}?forcePort443=false`,
  );

  const {
    baseUrl,
    chapter: { hash, data: original },
  } = response.data;

  const mangaImgs = original.map((val) => {
    return {
      src: `${
        process.env.SERVER_BASE_URL
      }/api/v1/manga/proxy/chapter-image/${encodeURIComponent(
        baseUrl,
      )}/${quality}/${hash}/${val}`,
    };
  });

  const responseObj = { data: mangaImgs, length: mangaImgs.length };
  res.status(StatusCodes.OK).json(responseObj);
}

export async function proxyChapterImage(req, res) {
  const { baseUrl, quality, hash, val } = req.params;

  const decodedBaseUrl = decodeURIComponent(baseUrl);

  const response = await axios.get(
    `${decodedBaseUrl}/${quality}/${hash}/${val}`,
    {
      responseType: "stream",
    },
  );
  res.setHeader("Content-Type", "image/jpeg");
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_APP_URL);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, User-Agent",
  );

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  response.data.pipe(res);

  response.data.on("end", () => {
    res.end();
  });
}
