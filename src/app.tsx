import { Route, Routes } from "react-router";
import { InlinePage } from "./inline/inline-page";
import { TailwindPage } from "./tailwind/tailwind-page";
import { Home } from "./home";
import { StyledComponentsPage } from "./styled-components/styled-components-page";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inline-css" element={<InlinePage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/styled-components" element={<StyledComponentsPage />} />
      </Routes>
    </div>
  );
}
