import {Link, useLocation} from "react-router-dom";

export default function BeforeLogin() {
  const onAuthPage =
    useLocation().pathname === "/login" || useLocation().pathname === "/join";
  return onAuthPage ? null : (
    <ul className="flex justify-end items-center text-white font-semibold text-xl gap-10">
      <li>
        <Link to="/login">로그인</Link>
      </li>
      <li>
        <Link to="/join">회원가입</Link>
      </li>
    </ul>
  );
}
