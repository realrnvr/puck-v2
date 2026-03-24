import "./resets.css";
import "./utils.css";
import "./index.css";

import RouterProviderBase from "./providers/react_router/RouterProviderBase";
import QueryClientProviderBase from "./providers/tanstack_query/QueryClientProviderBase";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WindowProvider } from "./features/window_system/provider/WindowProvider";
import { SocketProvider } from "./core/socket/provider/SocketProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SocketProvider>
      <QueryClientProviderBase>
        <WindowProvider>
          <RouterProviderBase />
          <ReactQueryDevtools initialIsOpen={false} />
        </WindowProvider>
      </QueryClientProviderBase>
    </SocketProvider>
  </StrictMode>,
);
