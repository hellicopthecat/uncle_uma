import {ReactNode} from "react";

export default function OuterLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex justify-around items-center gap-5 ${className}`}>
      {children}
    </div>
  );
}
