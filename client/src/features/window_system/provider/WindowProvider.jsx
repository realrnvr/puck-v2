import { WindowContext } from "../core/windowContext";
import { windowManager } from "../core/windowManager";

export function WindowProvider({ children }) {
  return (
    <WindowContext.Provider value={windowManager}>
      {children}
    </WindowContext.Provider>
  );
}
