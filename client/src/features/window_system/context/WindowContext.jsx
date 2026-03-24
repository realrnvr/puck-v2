import { createContext } from "react";
import { windowClient } from "../window_client/windowClient";

export const WindowContext = createContext(windowClient);
