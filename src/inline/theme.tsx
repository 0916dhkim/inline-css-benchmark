import { camelToKebab, type StyleSheet, Style } from "./utils";
import { Head } from "../common/head";

type Props = {
  children: React.ReactNode;
};

const TOKENS = {
  colorBackground: "light-dark(#ffffff, #121212)",
  colorText: "light-dark(#333333, #e0e0e0)",
  colorPrimary: "light-dark(#007bff, #bb86fc)",
  colorSecondary: "light-dark(#6c757d, #03dac6)",
  colorAccent: "#ff5722",
} as const;

type Tokens = typeof TOKENS;

function tokensToStyleSheet(tokens: Tokens): StyleSheet {
  return {
    ":root": Object.fromEntries(
      Object.entries(tokens).map(([key, value]) => [
        `--${camelToKebab(key)}`,
        value,
      ])
    ),
  };
}

export function token(key: keyof Tokens) {
  return `var(--${camelToKebab(key)})`;
}

export function Theme(props: Props) {
  return (
    <>
      <Head>
        <Style>{tokensToStyleSheet(TOKENS)}</Style>
      </Head>
      {props.children}
    </>
  );
}
