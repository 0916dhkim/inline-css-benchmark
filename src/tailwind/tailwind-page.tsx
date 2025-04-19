import { Head } from "../common/head";
import { useEffect } from "react";
import { useQueryState } from "../common/use-query-state";
import { Cell } from "./cell";
import { Nav } from "./nav";
import { Section } from "./section";
import styles from "./tailwind.css?url";
import { ThemeSwitchButton } from "./theme-switch-button";

export function TailwindPage() {
  const [themeName] = useQueryState("theme");

  useEffect(() => {
    document.documentElement.classList.toggle("light", themeName === "light");
    document.documentElement.classList.toggle("dark", themeName === "dark");
  }, [themeName]);

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
