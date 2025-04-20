import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
