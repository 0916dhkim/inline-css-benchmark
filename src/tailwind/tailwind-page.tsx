import { Head } from "../common/head";
import { Cell } from "./cell";
import { Nav } from "./nav";
import { Section } from "./section";
import styles from "./tailwind.css?url";
import { ThemeSwitchButton } from "./theme-switch-button";

export function TailwindPage() {
  return (
    <>
      <Head>
        <link href={styles} rel="stylesheet" />
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
    </>
  );
}
