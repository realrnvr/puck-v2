import axios from "axios";
import { StatusCodes } from "http-status-codes";

export async function getMangaChapters(req, res) {
  try {
    const { mangaId } = req.params;
    const {
      cursor = 0,
      limit = 50,
      order = "desc",
      translatedLanguage,
    } = req.query;

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
            "translatedLanguage[]": translatedLanguage,
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
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch chapters",
      error: error.message,
    });
  }
}

export async function getMangaAggregate(req, res) {
  try {
    const { mangaId } = req.params;
    const { translatedLanguage } = req.query;

    const response = await axios.get(
      `https://api.mangadex.org/manga/${mangaId}/aggregate`,
      {
        params: {
          ...(translatedLanguage && {
            "translatedLanguage[]": translatedLanguage,
          }),
        },
      },
    );

    return res.status(StatusCodes.OK).json({
      result: response.data.result,
      volumes: response.data.volumes,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch aggregate",
      error: error.message,
    });
  }
}

export async function getChapterVariants(req, res) {
  try {
    const { mangaId } = req.params;

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
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch chapter variants",
      error: error.message,
    });
  }
}
