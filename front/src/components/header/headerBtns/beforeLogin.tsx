import {Link, useLocation} from "react-router-dom";

export default function BeforeLogin() {
  const loginPage = useLocation().pathname === "/login";
  return loginPage ? null : (
    <ul className="flex justify-end items-center text-white">
      <li className="mx-10">
        <Link to="/login">로그인</Link>
      </li>

      <li className="mx-10">
        <Link to="/join">회원가입</Link>
      </li>
    </ul>
  );
}
