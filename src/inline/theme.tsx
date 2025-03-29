import { useMemo } from "react";
import { useQueryState } from "../use-query-state";
import { styleToString, type StyleSheet } from "./stylesheet";
import { camelToKebab } from "../camel-to-kebab";
import { Head } from "../common/head";

type Props = {
  children: React.ReactNode;
};

const LIGHT_THEME = {
  colorBackground: "#ffffff",
  colorText: "#333333",
  colorPrimary: "#007bff",
  colorSecondary: "#6c757d",
  colorAccent: "#ff5722",
} as const;

const DARK_THEME = {
  colorBackground: "#121212",
  colorText: "#e0e0e0",
  colorPrimary: "#bb86fc",
  colorSecondary: "#03dac6",
  colorAccent: "#ff5722",
} as const;

type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

function themeToStyleSheet(theme: Theme): StyleSheet {
  return {
    ":root": Object.fromEntries(
      Object.entries(theme).map(([key, value]) => [
        `--${camelToKebab(key)}`,
        value,
      ])
    ),
  };
}

export function token(key: keyof Theme) {
  return `var(--${camelToKebab(key)})`;
}

const lightStyleSheet = themeToStyleSheet(LIGHT_THEME);
const darkStyleSheet = themeToStyleSheet(DARK_THEME);
const systemStyleSheet = {
  ...lightStyleSheet,
  "@media(prefers-color-scheme: dark)": darkStyleSheet,
};

export function Theme(props: Props) {
  const [themeName] = useQueryState("theme");

  const stylesheet = useMemo(() => {
    switch (themeName) {
      case "light":
        return lightStyleSheet;
      case "dark":
        return darkStyleSheet;
      default:
        return systemStyleSheet;
    }
  }, [themeName]);

  return (
    <>
      <Head>
        <style>{styleToString(stylesheet)}</style>
      </Head>
      {props.children}
    </>
  );
}
