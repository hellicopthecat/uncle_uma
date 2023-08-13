import {Outlet, useLocation} from "react-router-dom";
import HeaderComp from "../components/main/HeaderComp";
import FooterComp from "../components/main/FooterComp";
import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import ContenstsNav from "../components/main/ContentsNav";
import MainPage from "./MainPage";
export default function Home() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        return null;
      }
    });
  }, [user]);
  return (
    <div className="relative bg-sky-800 h-[100vh]">
      <header className="relative z-10">
        <HeaderComp props={user} />
        <ContenstsNav />
      </header>
      <main className="relative bg-sky-800 ">
        {location.pathname === "/" ? <MainPage /> : <Outlet />}
      </main>
      <footer className="relative w-full text-white ">
        <FooterComp />
      </footer>
    </div>
  );
}
