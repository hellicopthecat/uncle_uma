import {Link} from "react-router-dom";
import SharedTxt from "../../shared/sharedTxt";
import useUser from "../../../hooks/useUser";
import {useEffect, useRef, useState} from "react";

export default function Homeheader() {
  const {user} = useUser();
  const [goRight, setGoright] = useState(0);
  const [goLeft, setGoleft] = useState(0);

  useEffect(() => {
    const handleMove = () => {
      if (window.scrollY > 0) {
        setGoright(window.scrollY < 40 ? 0 : -window.scrollY - 40);
        setGoleft(window.scrollY < 40 ? 0 : window.scrollY - 40);
      }
    };
    window.addEventListener("scroll", handleMove);
    return () => window.removeEventListener("scroll", handleMove);
  }, []);
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center overflow-x-hidden">
      <div
        className=" animate-showRight"
        style={{transform: `translateX(${goLeft}%)`}}
      >
        <SharedTxt
          txtType="h5"
          txt="코 한 끗 승부를 겨루는"
          className="text-white italic"
        />
      </div>
      <div
        className="animate-showLeft"
        style={{transform: `translateX(${goRight}%)`}}
      >
        <SharedTxt
          txtType="h2"
          txt="KOCHAI에 오신것을 환영합니다."
          className="text-white italic "
        />
      </div>
      <div
        className=" animate-showRight"
        style={{transform: `translateX(${goLeft}%)`}}
      >
        <Link
          to={user ? "" : "/join"}
          className=" flex justify-center items-center border-4 rounded-full py-3 px-4 group hover:border-orange-500 hover:scale-105 transition-all ease-in-out duration-300"
        >
          <SharedTxt
            txtType="p"
            txt="실시간 경주결과 보러가기"
            className="text-white text-lg font-bold group-hover:text-orange-500 group-hover:scale-105 transition-all ease-in-out duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
