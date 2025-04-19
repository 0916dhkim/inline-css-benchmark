import { useEffect } from "react";
import { useQueryState } from "../use-query-state";
import { cn } from "./utils";

export function ThemeSwitchButton() {
  const [themeName, setThemeName] = useQueryState("theme");

  useEffect(() => {
    document.documentElement.classList.toggle("light", themeName === "light");
    document.documentElement.classList.toggle("dark", themeName === "dark");
  }, [themeName]);

  const switchTheme = () => {
    switch (themeName) {
      case "light":
        return setThemeName("dark");
      case "dark":
        return setThemeName("");
      default:
        return setThemeName("light");
    }
  };

  return (
    <button
      className={cn(
        "font-bold",
        "p-2",
        "w-48",
        "bg-primary",
        "hover:bg-secondary",
        "rounded-lg"
      )}
      onClick={switchTheme}
    >
      {themeName === "light" && "Light Theme"}
      {themeName === "dark" && "Dark Theme"}
      {!themeName && "System Theme"}
    </button>
  );
}
