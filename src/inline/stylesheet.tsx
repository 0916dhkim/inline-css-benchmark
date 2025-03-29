import { camelToKebab } from "../camel-to-kebab";

export interface StyleSheet {
  [key: string]: string | StyleSheet;
}

export const styleToString = (style: StyleSheet) => {
  return Object.keys(style)
    .reduce((acc: string[], key) => {
      const value = style[key];
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
