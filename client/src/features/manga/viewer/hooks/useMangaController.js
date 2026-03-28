// @ts-check

import React from "react";
import { MangaControllerContext } from "../context/MangaControllerContext";

export function useMangaController() {
  return React.useContext(MangaControllerContext);
}
