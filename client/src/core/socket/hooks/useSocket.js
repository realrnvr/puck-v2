import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export function useSocket() {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error(
      "useSocket hook must be use within an SocketContext Prodvider",
    );
  }

  return context;
}
