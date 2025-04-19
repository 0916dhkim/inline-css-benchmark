import { cn } from "./utils";

type Props = {
  children?: React.ReactNode;
};

export function Section(props: Props) {
  return (
    <section>
      <h1 className="text-primary">Section</h1>
      <div
        className={cn(
          "grid",
          "grid-cols-[repeat(8,_3rem)]",
          "auto-rows-[3rem]",
          "w-fit",
          "border-4",
          "border-solid",
          "border-secondary",
          "[&_.cell]:line-through",
          "[&_.cell]:text-accent"
        )}
      >
        {props.children}
      </div>
    </section>
  );
}
