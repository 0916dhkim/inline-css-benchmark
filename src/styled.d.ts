import "styled-components";
import type {} from "styled-components/cssprop";

declare module "styled-components" {
  export interface DefaultTheme {
    colorBackground: string;
    colorText: string;
    colorPrimary: string;
    colorSecondary: string;
    colorAccent: string;
  }
}
