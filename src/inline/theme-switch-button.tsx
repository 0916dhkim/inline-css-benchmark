import { useQueryState } from "../common/use-query-state";
import { ScopedStyle } from "./utils";
import { token } from "./theme";

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
      <ScopedStyle>
        {{
          "&": {
            fontWeight: "bold",
            padding: "0.5rem",
            width: "12rem",
            background: token("colorPrimary"),
            borderRadius: "0.5rem",
          },
          "&:hover": {
            background: token("colorSecondary"),
          },
        }}
      </ScopedStyle>
      {themeName === "light" && "Light Theme"}
      {themeName === "dark" && "Dark Theme"}
      {!themeName && "System Theme"}
    </button>
  );
}
