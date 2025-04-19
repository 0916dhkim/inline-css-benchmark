import { createPortal } from "react-dom";

type Props = {
  children?: React.ReactNode;
};

/**
 * Render the children inside <head>
 */
export function Head(props: Props) {
  return createPortal(props.children, document.head);
}
