import { useQueryState } from "../common/use-query-state";
import { cn } from "./utils";

export function ThemeSwitchButton() {
  const [themeName, setThemeName] = useQueryState("theme");

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
