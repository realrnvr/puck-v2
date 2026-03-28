// @ts-check
import React from "react";

import { ChapterImagesContext } from "../context/ChapterImagesContext";

export function useChapterImages() {
  return React.useContext(ChapterImagesContext);
}
