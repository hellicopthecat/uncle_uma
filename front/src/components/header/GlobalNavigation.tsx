import {NavLink} from "react-router-dom";
import useUser from "../../hooks/useUser";
import {useState} from "react";

interface INavLinkListArgs {
  href: string;
  linkText: string;
}

function NavLinkList({href, linkText}: INavLinkListArgs) {
  return (
    <NavLink
      className={({isActive, isPending}) =>
        isPending
          ? `lg:text-xl md:text-sm sm:text-xs text-white`
          : isActive
          ? `lg:text-xl md:text-sm sm:text-xs text-red-400`
          : "lg:text-xl md:text-sm sm:text-xs text-white"
      }
      to={href}
    >
      {linkText}
    </NavLink>
  );
}
export default function GlobalNavigation() {
  const {user} = useUser();
  const [show, setShow] = useState(false);
  return (
    <nav className="absolute z-50 bottom-40 right-0 flex flex-col justify-around text-white">
      <ul className="flex flex-col gap-5">
        <li>
          <NavLinkList href="/" linkText="HOME" />
        </li>
        <li>
          <NavLinkList href="/horseInfo" linkText="경주마 정보" />
        </li>
        <li>
          <NavLinkList href="/racingPlan" linkText="전국 경주 계획표" />
        </li>
        <li>
          <NavLinkList href="/divideRate" linkText="배당률검색" />
        </li>
        <li>
          <NavLinkList href="/board" linkText="게시판" />
        </li>
        {user && (
          <li>
            <NavLinkList href="/chat" linkText="채팅" />
          </li>
        )}
      </ul>
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}
