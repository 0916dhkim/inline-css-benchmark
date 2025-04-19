import { Link, useLocation } from "react-router";
import { cn } from "./utils";

export function Nav() {
  const { search } = useLocation();
  return (
    <nav
      className={cn(
        "w-dvh",
        "bg-background",
        "sticky",
        "top-0",
        "[&_a]:text-text",
        "[&_a]:hover:text-primary"
      )}
    >
      <ul className={cn("list-none", "flex", "p-4", "gap-4")}>
        <li>
          <Link to={{ pathname: "/inline-css", search }}>Inline CSS</Link>
        </li>
        <li>
          <Link to={{ pathname: "/tailwind", search }}>Tailwind CSS</Link>
        </li>
      </ul>
    </nav>
  );
}
