import { ScopedStyle } from "./utils";
import { token } from "./theme";

type Props = {
  children?: React.ReactNode;
};

export function Section(props: Props) {
  return (
    <section>
      <h1 style={{ color: token("colorPrimary") }}>Section</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 3rem)",
          gridAutoRows: "3rem",
          width: "fit-content",
        }}
      >
        <ScopedStyle>
          {{
            "&": {
              border: `4px solid ${token("colorSecondary")}`,
            },
            "& .cell": {
              color: token("colorAccent"),
              textDecoration: "line-through",
            },
          }}
        </ScopedStyle>
        {props.children}
      </div>
    </section>
  );
}
