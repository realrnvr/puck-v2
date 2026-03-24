import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";

export function useWindowManager() {
  const context = useContext(WindowContext);

  if (!context) {
    throw new Error(
      "useWindowManager hook must be use within an WindowManager Prodvider",
    );
  }

  return context;
}
