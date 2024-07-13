import {Link} from "react-router-dom";

export default function BeforeLogin() {
  return (
    <ul className="flex justify-end items-center">
      <li className="ml-10">
        <Link to="/login">로그인</Link>
      </li>
      <li className="ml-10">
        <Link to="/join">회원가입</Link>
      </li>
    </ul>
  );
}
