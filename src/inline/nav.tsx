import { Link } from "react-router";
import { ScopedStyle } from "./scoped-style";
import { token } from "./theme";

export function Nav() {
  return (
    <nav
      style={{
        width: "100dvw",
        background: token("colorBackground"),
        position: "sticky",
        top: 0,
      }}
    >
      <ScopedStyle>
        {{
          "& a": {
            color: token("colorText"),
            "&:hover": {
              color: token("colorPrimary"),
            },
          },
        }}
      </ScopedStyle>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inline-css">Inline CSS</Link>
        </li>
      </ul>
    </nav>
  );
}
