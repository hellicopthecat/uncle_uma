import {Link} from "react-router-dom";
import SharedTxt from "../shared/sharedTxt";
import {ReactNode} from "react";
import {useRecoilValue} from "recoil";
import {localNumAtom} from "../../atoms/localNumAtom";

function LinkStyle({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  const localNum = useRecoilValue(localNumAtom);
  return (
    <li
      className={`bg-white p-8 rounded-md transition-all ease-in-out duration-500 ${className}`}
    >
      <Link to={href} className="flex flex-col items-center gap-5">
        {children}
      </Link>
    </li>
  );
}
export default function RacingPlace() {
  return (
    <ul className="flex justify-around">
      <LinkStyle href={"/"} className="hover:bg-seoul group ">
        <div className="group-hover:park-card rounded-full overflow-hidden w-60">
          <img src="/img/main/horse_1.png" alt="서울경마 아이콘" />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SharedTxt
            txtType="h4"
            txt="서울"
            className="group-hover:text-white transition-colors duration-300 ease-in-out"
          />
          <SharedTxt
            txtType="h4"
            txt="바로가기"
            className="group-hover:text-white transition-colors duration-300 ease-in-out"
          />
        </div>
      </LinkStyle>
      <LinkStyle href={"/"} className="hover:bg-jeju group">
        <div className="group-hover:park-card  rounded-full overflow-hidden w-60">
          <img src="/img/main/horse_2.png" alt="제주경마 아이콘" />
        </div>

        <div className="flex flex-col gap-1 items-center">
          <SharedTxt
            txtType="h4"
            txt="제주"
            className="group-hover:text-white transition-colors duration-300 ease-in-out"
          />
          <SharedTxt
            txtType="h4"
            txt="바로가기"
            className="group-hover:text-white transition-colors duration-300 ease-in-out"
          />
        </div>
      </LinkStyle>
      <LinkStyle href={"/"} className="hover:bg-busan group">
        <div className="group-hover:park-card  rounded-full overflow-hidden w-60">
          <img src="/img/main/horse_3.png" alt="부산경남경마 아이콘" />
        </div>

        <div className="flex flex-col gap-1 items-center">
          <SharedTxt
            txtType="h4"
            txt="부산경남"
            className="group-hover:text-white transition-colors duration-300 ease-in-out"
          />
          <SharedTxt
            txtType="h4"
            txt="바로가기"
            className="group-hover:text-white transition-colors duration-300 ease-in-out"
          />
        </div>
      </LinkStyle>
    </ul>
  );
}
