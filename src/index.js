import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DisplayName from "./DisplayName";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DisplayName />
  </StrictMode>
);