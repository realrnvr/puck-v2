import { WindowContext } from "../context/WindowContext";
import { windowClient } from "../window_client/windowClient";

export function WindowProvider({ children }) {
  return <WindowContext value={windowClient}>{children}</WindowContext>;
}
