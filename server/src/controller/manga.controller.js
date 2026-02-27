import axios from "axios";
import { StatusCodes } from "http-status-codes";

export async function fetch(req, res) {
  try {
    const response = await axios.get(
      "https://api.mangadex.org/manga/801513ba-a712-498c-8f57-cae55b38cc92/feed?limit=96&includes[]=scanlation_group&includes[]=user&order[volume]=desc&order[chapter]=desc&offset=0&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic&includeUnavailable=0&excludeExternalUrl=blinktoon.com",
    );
    return res.status(StatusCodes.OK).json({ data: response.data });
  } catch (error) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: "chapters not found" });
  }
}
