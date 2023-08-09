import {NavLink} from "react-router-dom";
export default function ContenstsNav() {
  return (
    <nav className="flex justify-around items-center h-20">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/horseDetail">경주마 정보</NavLink>
      <NavLink to="/racingPlan">전국 경마경주 계획표</NavLink>
      <NavLink to="/dividendRate">배당률 검색</NavLink>
      <NavLink to="/board">게시판</NavLink>
    </nav>
  );
}
