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
