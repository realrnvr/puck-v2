import "./resets.css";
import "./utils.css";
import "./index.css";

import RouterProviderBase from "./providers/RouterProviderBase";
import QueryClientProviderBase from "./providers/QueryClientProviderBase";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProviderBase>
      <RouterProviderBase />
    </QueryClientProviderBase>
  </StrictMode>,
);
