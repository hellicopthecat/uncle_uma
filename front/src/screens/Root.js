import {Outlet} from "react-router-dom";
import HeaderComp from "../components/main/HeaderComp";
import FooterComp from "../components/main/FooterComp";
import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import ContenstsNav from "../components/main/ContentsNav";
export default function Home() {
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
    <div className="">
      <header>
        <HeaderComp props={user} />
      </header>
      <ContenstsNav />
      <main>
        <Outlet />
      </main>
      <footer className="relative top-80">
        <FooterComp />
      </footer>
    </div>
  );
}
