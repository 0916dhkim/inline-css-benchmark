import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
    <App />
  </BrowserRouter>
);
