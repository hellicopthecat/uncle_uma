import {Link} from "react-router-dom";

import {ReactNode} from "react";
import {useRecoilValue} from "recoil";
import {localNumAtom} from "../../../atoms/localNumAtom";
import SharedTxt from "../../shared/sharedTxt";

function LinkStyle({
  children,
  href,
  className,
  local,
}: {
  children: ReactNode;
  href: string;
  local: "서울" | "부산" | "제주";
  className?: string;
}) {
  const localNum = useRecoilValue(localNumAtom);
  return (
    <li
      className={`flex flex-col items-center border-t-2 p-2 hover:rounded-md transition-all ease-in-out duration-500 group  ${className}`}
    >
      <SharedTxt
        txtType="p"
        txt={`${local} 경마장`}
        className="text-white text-lg group-hover:scale-y-0"
      />
      <Link
        to={href}
        className="group-hover:flex flex-col items-center gap-5 h-0 group-hover:h-full scale-y-0 group-hover:scale-y-100 origin-bottom transition-all ease-in-out duration-300"
      >
        {children}
      </Link>
    </li>
  );
}
export default function RacingPlace() {
  return (
    <ul className="flex gap-10 justify-center items-end h-80">
      <LinkStyle href={"/"} local="서울" className="hover:bg-seoul">
        <div className="group-hover:park-card rounded-full overflow-hidden size-36">
          <img src="/img/main/horse_1.png" alt="서울경마 아이콘" />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SharedTxt txtType="h4" txt="서울" className="text-white " />
          <SharedTxt txtType="h4" txt="바로가기" className="text-white " />
        </div>
      </LinkStyle>

      <LinkStyle href={"/"} local="제주" className="hover:bg-jeju">
        <div className="group-hover:park-card  rounded-full overflow-hidden size-36">
          <img src="/img/main/horse_2.png" alt="제주경마 아이콘" />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SharedTxt txtType="h4" txt="제주" className="text-white" />
          <SharedTxt txtType="h4" txt="바로가기" className="text-white" />
        </div>
      </LinkStyle>

      <LinkStyle href={"/"} local="부산" className="hover:bg-busan">
        <div className="group-hover:park-card  rounded-full overflow-hidden size-36">
          <img src="/img/main/horse_3.png" alt="부산경남경마 아이콘" />
        </div>

        <div className="flex flex-col gap-1 items-center">
          <SharedTxt txtType="h4" txt="부산경남" className="text-white" />
          <SharedTxt txtType="h4" txt="바로가기" className="text-white" />
        </div>
      </LinkStyle>
    </ul>
  );
}
