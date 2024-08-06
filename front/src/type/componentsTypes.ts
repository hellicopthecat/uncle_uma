import {ReactNode} from "react";

export interface ISharedTxt {
  txtType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  txt: string | ReactNode;
  className?: string;
}
