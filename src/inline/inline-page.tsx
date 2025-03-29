import { Head } from "../common/head";
import { Cell } from "./cell";
import { Nav } from "./nav";
import { Section } from "./section";
import { styleToString } from "./stylesheet";
import { Theme, token } from "./theme";
import { ThemeSwitchButton } from "./theme-switch-button";

export function InlinePage() {
  return (
    <Theme>
      <Head>
        <style>
          {styleToString({
            body: {
              background: token("colorBackground"),
              color: token("colorText"),
              padding: "0",
              margin: "0",
            },
          })}
        </style>
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
