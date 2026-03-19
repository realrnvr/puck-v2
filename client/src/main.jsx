import "./resets.css";
import "./utils.css";
import "./index.css";

import RouterProviderBase from "./providers/RouterProviderBase";
import QueryClientProviderBase from "./providers/QueryClientProviderBase";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WindowProvider } from "./features/window_system/provider/WindowProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProviderBase>
      <WindowProvider>
        <RouterProviderBase />
        <ReactQueryDevtools initialIsOpen={false} />
      </WindowProvider>
    </QueryClientProviderBase>
  </StrictMode>,
);
