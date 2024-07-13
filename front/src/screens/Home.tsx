import MainPage from "./MainPage";
import SharedLayout from "../components/shared/sharedLayout";
import {Outlet, useLocation} from "react-router-dom";

export default function Home() {
  const HOME = "/";
  const location = useLocation().pathname === HOME;
  return <SharedLayout>{location ? <MainPage /> : <Outlet />}</SharedLayout>;
}
