import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

var loadTime =
  window.performance.timing.domContentLoadedEventEnd -
  window.performance.timing.navigationStart;

console.log(loadTime);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
