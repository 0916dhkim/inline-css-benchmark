import { useQueryState } from "../use-query-state";

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
    <button onClick={switchTheme}>
      {themeName === "light" && "Light Theme"}
      {themeName === "dark" && "Dark Theme"}
      {!themeName && "System Theme"}
    </button>
  );
}
