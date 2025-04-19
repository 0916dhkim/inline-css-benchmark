import { useId } from "react";

const SUPPORTS_SCOPE = typeof CSSScopeRule != "undefined";

/**
 * Extending React's stylesheet type to allow nested selectors.
 */
export type StyleSheet =
  | React.CSSProperties
  | {
      [selector: string]: StyleSheet;
    };

/**
 * Transforms a camel case string to kebab case.
 */
export const camelToKebab = (camelCaseString: string) =>
  camelCaseString
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();

/**
 * Transforms a stylesheet object into CSS string
 * so that it can be rendered in React.
 */
const styleToString = (style: StyleSheet) => {
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

type Props = {
  children: StyleSheet;
};

/**
 * It's like `<style>` but takes stylesheet object as a child.
 *
 * It is much easier to write `<Style>{{background: "red"}}</Style>`
 * than `<style>{"background: red;"}</style>`
 * especially when it is multi-line.
 */
export function Style(props: Props) {
  return <style>{styleToString(props.children)}</style>;
}

/**
 * Helper component to render scoped `<style>` in body.
 *
 * If the browser supports the `@scope` rule, render the stylesheet inside a `@scope` block.
 * Otherwise, render the stylesheet using the (potentially slow) parent selector.
 */
export function ScopedStyle(props: Props) {
  const id = useId();
  const stylesheet = styleToString(props.children);

  return (
    <style id={id}>
      {
        SUPPORTS_SCOPE
          ? `@scope {${stylesheet}}` // Use @scope if supported.
          : `:has(> #${CSS.escape(id)}) {${stylesheet}}` // Fallback to more expensive parent selector.
      }
    </style>
  );
}
