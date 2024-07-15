import {ReactNode} from "react";

export default function InnerLayout({children}: {children: ReactNode}) {
  return <div className="flex flex-col">{children}</div>;
}
