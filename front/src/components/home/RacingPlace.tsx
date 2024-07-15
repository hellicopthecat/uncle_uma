import {Link} from "react-router-dom";
import SharedTxt from "../shared/sharedTxt";
import {ReactNode} from "react";

function LinkStyle({children, href}: {children: ReactNode; href: string}) {
  return (
    <li className="bg-white p-8 rounded-md">
      <Link to={href} className="flex flex-col items-center gap-5">
        {children}
      </Link>
    </li>
  );
}
export default function RacingPlace() {
  return (
    <ul className="flex justify-around">
      <LinkStyle href={"/"}>
        <div className="hover:park-card  rounded-full overflow-hidden w-60">
          <img src="/img/main/horse_1.png" alt="서울경마 아이콘" />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SharedTxt txtType="h3" txt="서울경마" />
          <SharedTxt txtType="h3" txt="바로가기" />
        </div>
      </LinkStyle>
      <LinkStyle href={"/"}>
        <div className="hover:park-card  rounded-full overflow-hidden w-60">
          <img src="/img/main/horse_2.png" alt="제주경마 아이콘" />
        </div>

        <div className="flex flex-col gap-1 items-center">
          <SharedTxt txtType="h3" txt="제주경마" />
          <SharedTxt txtType="h3" txt="바로가기" />
        </div>
      </LinkStyle>
      <LinkStyle href={"/"}>
        <div className="hover:park-card  rounded-full overflow-hidden w-60">
          <img src="/img/main/horse_3.png" alt="부산경남경마 아이콘" />
        </div>

        <div className="flex flex-col gap-1 items-center">
          <SharedTxt txtType="h3" txt="부산경남경마" />
          <SharedTxt txtType="h3" txt="바로가기" />
        </div>
      </LinkStyle>
    </ul>
  );
}
