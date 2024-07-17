import {NavLink} from "react-router-dom";
import useUser from "../../hooks/useUser";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import Hamberger from "../svg/Hamberger";
import CloseMark from "../svg/CloseMark";

interface INavLinkListArgs {
  href: string;
  linkText: string;
  setShow: Dispatch<SetStateAction<boolean>>;
}
function NavLinkList({href, linkText, setShow}: INavLinkListArgs) {
  return (
    <li>
      <button onClick={() => setShow(false)}>
        <NavLink
          className={({isActive}) =>
            ` ${isActive && `text-red-400`} text-xl font-semibold`
          }
          to={href}
        >
          {linkText}
        </NavLink>
      </button>
    </li>
  );
}
export default function GlobalNavigation() {
  const {user} = useUser();
  const [show, setShow] = useState(false);
  const [navPosition, setNavPosition] = useState<HTMLUListElement | number>(0);
  const navDiv = useRef<HTMLUListElement>(null);
  useEffect(() => {
    setNavPosition(navDiv.current?.clientHeight! / 2);
  }, [navDiv]);
  return (
    <>
      <nav
        className="absolute z-50 top-0 left-0 bg-gray-800/75 w-full h-full flex justify-end items-center transition-all ease-in-out duration-300"
        style={{transform: show ? `translateX(0)` : `translateX(-100%)`}}
      >
        <ul
          ref={navDiv}
          className="absolute bg-white flex flex-col justify-center gap-5 text-nowrap w-80 p-10 h-full"
        >
          <button
            type="button"
            className=" absolute top-10 self-end"
            onClick={() => setShow(false)}
          >
            <CloseMark className="w-10 h-10" />
          </button>
          <NavLinkList href="/" linkText="HOME" setShow={setShow} />
          <NavLinkList
            href="/horseInfo"
            linkText="경주마 정보"
            setShow={setShow}
          />
          <NavLinkList
            href="/racingPlan"
            linkText="전국 경주 계획표"
            setShow={setShow}
          />
          <NavLinkList
            href="/divideRate"
            linkText="배당률검색"
            setShow={setShow}
          />
          <NavLinkList href="/board" linkText="게시판" setShow={setShow} />
          {user && (
            <NavLinkList href="/chat" linkText="채팅" setShow={setShow} />
          )}
        </ul>
      </nav>
      <button
        type="button"
        className="absolute top-[40%] z-40 right-20 bg-gray-500/20 hover:bg-gray-500/75 p-5 rounded-full transition-all ease-in-out duration-300"
        onClick={() => setShow(true)}
        style={{transform: show ? `translateX(200%)` : `translateX(0%)`}}
      >
        <Hamberger />
      </button>
    </>
  );
}
