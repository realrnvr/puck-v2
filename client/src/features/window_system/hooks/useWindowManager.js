import { useContext } from "react";
import { WindowContext } from "../core/windowContext";

export function useWindowManager() {
  const context = useContext(WindowContext);

  if (!context) {
    throw new Error(
      "useWindowManager must be use within an WindowManager Prodvider",
    );
  }

  return context;
}
