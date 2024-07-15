import {ReactNode} from "react";

export default function SharedSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`${className}`}>{children}</section>;
}
