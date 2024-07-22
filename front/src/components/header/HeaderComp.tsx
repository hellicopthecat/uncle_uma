import {Link} from "react-router-dom";
import useUser from "../../hooks/useUser";
import BeforeLogin from "./headerBtns/beforeLogin";
import AfterLogin from "./headerBtns/afterLogin";
import {useEffect, useState} from "react";

export default function HeaderComp() {
  const [top, setTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => setTop(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //hooks
  const {user} = useUser();
  return (
    <header
      className="fixed top-0 z-50 w-full flex justify-between items-center transition ease-in-out duration-150 p-5"
      style={{
        backgroundColor: top >= 100 ? "rgba(0,0,0,0.5)" : "transparent",
      }}
    >
      <Link to="/">
        <img src="/img/kochai_logo.svg" className="w-36 h-15" />
      </Link>
      {!user ? <BeforeLogin /> : <AfterLogin />}
    </header>
  );
}
