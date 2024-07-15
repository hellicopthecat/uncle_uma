import {Outlet, useLocation} from "react-router-dom";
import HeaderComp from "./components/header/HeaderComp";
import GlobalNavigation from "./components/header/GlobalNavigation";
import MainPage from "./screens/home/MainPage";
import FooterComp from "./components/main/FooterComp";

export default function App() {
  const HOME = "/";
  const JOIN = "/join";
  const LOGIN = "/login";
  const location = useLocation();
  const homePage = location.pathname === HOME;
  const authPage = location.pathname === (JOIN || LOGIN);
  return (
    <div className="flex flex-col bg-sky-800 overflow-x-hidden h-full">
      <HeaderComp />
      {!authPage && <GlobalNavigation />}
      <main className=" bg-sky-800  h-full">
        {homePage ? <MainPage /> : <Outlet />}
      </main>
      <FooterComp />
      {/* <ScreenBlock /> */}
    </div>
  );
}
