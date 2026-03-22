import { WindowContext } from "../core/windowContext";
import { windowClient } from "../window_client/windowClient";

export function WindowProvider({ children }) {
  return (
    <WindowContext.Provider value={windowClient}>
      {children}
    </WindowContext.Provider>
  );
}
