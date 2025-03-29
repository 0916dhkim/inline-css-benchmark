import { useId } from "react";
import { styleToString, type StyleSheet } from "./stylesheet";

type Props = {
  children: StyleSheet;
};

const supportsScope = typeof CSSScopeRule != "undefined";

export function ScopedStyle(props: Props) {
  const id = useId();
  const stylesheet = styleToString(props.children);

  return (
    <style id={id}>
      {
        supportsScope
          ? `@scope {${stylesheet}}` // Use @scope if supported.
          : `:has(> #${CSS.escape(id)}) {${stylesheet}}` // Fallback to more expensive parent selector.
      }
    </style>
  );
}
