import {NavLink} from "react-router-dom";
import RacingPlan from "./RacingPlan";

export default function Home() {
  return (
    <div>
      <h1>우마오지상에 오신걸 환영합니다.</h1>
      <nav>
        <NavLink to="/horseDetail">경주마 정보</NavLink>
      </nav>
      <RacingPlan />
    </div>
  );
}
