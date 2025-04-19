import { type DefaultTheme, ThemeProvider } from "styled-components";

const THEME: DefaultTheme = {
  colorBackground: "light-dark(#ffffff, #121212)",
  colorText: "light-dark(#333333, #e0e0e0)",
  colorPrimary: "light-dark(#007bff, #bb86fc)",
  colorSecondary: "light-dark(#6c757d, #03dac6)",
  colorAccent: "#ff5722",
};

type Props = {
  children: React.ReactNode;
};

export function StyledComponentsThemeProvider(props: Props) {
  return <ThemeProvider theme={THEME}>{props.children}</ThemeProvider>;
}
