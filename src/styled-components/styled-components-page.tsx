import { createGlobalStyle } from "styled-components";
import { StyledComponentsThemeProvider } from "./theme";
import { Nav } from "./nav";
import { ThemeSwitchButton } from "./theme-switch-button";
import { Section } from "./section";
import { Cell } from "./cell";

const GlobalStyle = createGlobalStyle`
  html {
    color-scheme: light dark;
    line-height: 1.5;

    &.light {
      color-scheme: light;
    }
    &.dark {
      color-scheme: dark;
    }
  }

  body {
    background: ${({ theme }) => theme.colorBackground};
    color: ${({ theme }) => theme.colorText};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0 solid;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    text-decoration: inherit;
  }

  button {
    font: inherit;
    border-radius: 0;
    color: inherit;
    background-color: transparent;
  }
`;

export function StyledComponentsPage() {
  return (
    <StyledComponentsThemeProvider>
      <GlobalStyle />
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
    </StyledComponentsThemeProvider>
  );
}
