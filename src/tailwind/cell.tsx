import { cn } from "./utils";

type Props = {
  children?: React.ReactNode;
};

export function Cell(props: Props) {
  return (
    <div
      className={cn(
        "cell",
        "border-1",
        "border-dashed",
        "border-secondary",
        "flex",
        "justify-center",
        "items-center"
      )}
    >
      {props.children}
    </div>
  );
}
