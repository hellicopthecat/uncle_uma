import {useRecoilValue} from "recoil";
import {LegacyRef} from "react";
import RaceOutlineLeft from "./RaceOutlineLeft";
import RaceOutlineRight from "./RaceOutlineRight";
import {IOutlineRace} from "../../../../../type/apiTypes";
import {homeSlideState} from "../../../../../atoms/slideAtoms";

export default function RaceOutlineCont({
  refName,
  item,
}: {
  refName: LegacyRef<HTMLDivElement> | null;
  item: IOutlineRace;
}) {
  const slide = useRecoilValue(homeSlideState);
  return (
    <div
      ref={refName}
      style={{
        transform: `translateX(${slide}px)`,
        transition: "transform 1s ease-in-out",
      }}
      className="flex w-[980px] gap-10 px-5"
    >
      <RaceOutlineLeft item={item} />
      <RaceOutlineRight item={item} />
    </div>
  );
}
