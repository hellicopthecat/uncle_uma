import {ReactNode} from "react";
import ScreenBlock from "../../screens/ScreenBlock";
import HeaderComp from "../header/HeaderComp";
import GlobalNavigation from "../header/GlobalNavigation";

export default function SharedLayout({children}: {children: ReactNode}) {
  return (
    <div className="relative bg-sky-800 h-dvh">
      <HeaderComp />
      <GlobalNavigation />
      <main className="relative bg-sky-800 ">{children}</main>
      {/* <ScreenBlock /> */}
    </div>
  );
}
