import { Link, useLocation } from "react-router";
import { ScopedStyle } from "./utils";
import { token } from "./theme";

export function Nav() {
  const { search } = useLocation();
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
          <Link to={{ pathname: "/inline-css", search }}>Inline CSS</Link>
        </li>
        <li>
          <Link to={{ pathname: "/tailwind", search }}>Tailwind CSS</Link>
        </li>
        <li>
          <Link to={{ pathname: "/styled-components", search }}>
            Styled Components
          </Link>
        </li>
      </ul>
    </nav>
  );
}
