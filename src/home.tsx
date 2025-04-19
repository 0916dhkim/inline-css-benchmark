import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export function Home() {
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate({
      pathname: "/inline-css",
      search,
    });
  });

  return null;
}
