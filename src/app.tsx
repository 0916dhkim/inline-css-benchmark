import { Route, Routes } from "react-router";
import { InlinePage } from "./inline/inline-page";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={"WOW"} />
        <Route path="/inline-css" element={<InlinePage />} />
      </Routes>
    </div>
  );
}
