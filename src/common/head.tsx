import { createPortal } from "react-dom";

type Props = {
  children?: React.ReactNode;
};

export function Head(props: Props) {
  return createPortal(props.children, document.head);
}
