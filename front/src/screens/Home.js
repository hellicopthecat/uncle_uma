import {NavLink} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>우마오지상에 오신걸 환영합니다.</h1>
      <nav>
        <NavLink to="/horseDetail">경주마 정보</NavLink>
        <NavLink to="/racingPlan">전국 경마공원 경주계획표</NavLink>
      </nav>
    </div>
  );
}
