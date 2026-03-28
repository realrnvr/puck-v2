// @ts-check

import React from "react";
import { LightBoxPropsContext } from "../context/LightBoxPropsContext";

export function useLightBoxProps() {
  return React.useContext(LightBoxPropsContext);
}
