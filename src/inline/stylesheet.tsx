import { camelToKebab } from "../camel-to-kebab";

export type StyleSheet =
  | React.CSSProperties
  | {
      [selector: string]: StyleSheet;
    };

export const styleToString = (style: StyleSheet) => {
  return Object.entries(style)
    .reduce((acc: string[], [key, value]) => {
      const normalizedKey = camelToKebab(key);
      let rule: string;
      if (typeof value === "string") {
        rule = `${normalizedKey}:${value};`;
      } else {
        rule = `${normalizedKey}{${styleToString(value)}}`;
      }

      acc.push(rule);
      return acc;
    }, [])
    .join("\n");
};
