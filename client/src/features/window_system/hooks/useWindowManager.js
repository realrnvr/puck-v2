import { useContext } from "react";
import { WindowContext } from "../core/windowContext";

export function useWindowManager() {
  return useContext(WindowContext);
}
