import { useEffect } from "react";
import { Head } from "../common/head";
import { Cell } from "./cell";
import { Nav } from "./nav";
import { Section } from "./section";
import { Theme, token } from "./theme";
import { ThemeSwitchButton } from "./theme-switch-button";
import { useQueryState } from "../common/use-query-state";
import { Style } from "./utils";

const GlobalStyle = () => (
  <Style>
    {{
      html: {
        colorScheme: "light dark",
        lineHeight: "1.5",
        "&.light": {
          colorScheme: "light",
        },
        "&.dark": {
          colorScheme: "dark",
        },
      },
      body: {
        background: token("colorBackground"),
        color: token("colorText"),
      },
      "*": {
        boxSizing: "border-box",
        padding: "0",
        margin: "0",
        border: "0 solid",
      },
      "h1, h2, h3, h4, h5, h6": {
        fontSize: "inherit",
        fontWeight: "inherit",
      },
      a: {
        textDecoration: "inherit",
      },
      button: {
        font: "inherit",
        borderRadius: "0",
        color: "inherit",
        backgroundColor: "transparent",
      },
    }}
  </Style>
);

export function InlinePage() {
  const [themeName] = useQueryState("theme");

  useEffect(() => {
    document.documentElement.classList.toggle("light", themeName === "light");
    document.documentElement.classList.toggle("dark", themeName === "dark");
  }, [themeName]);

  return (
    <Theme>
      <Head>
        <GlobalStyle />
      </Head>
      <Nav />
      <ThemeSwitchButton />
      {Array(100)
        .fill(true)
        .map((_, i) => (
          <Section key={i}>
            {Array(64)
              .fill(true)
              .map((_, j) => (
                <Cell key={j}>{j}</Cell>
              ))}
          </Section>
        ))}
    </Theme>
  );
}
