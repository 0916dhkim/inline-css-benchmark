import { token } from "./theme";

type Props = {
  children?: React.ReactNode;
};

export function Cell(props: Props) {
  return (
    <div
      className="cell"
      style={{
        border: `1px dashed ${token("colorSecondary")}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  );
}
