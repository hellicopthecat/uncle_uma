import {useRecoilValue} from "recoil";
import {homeSlideState} from "../../../atoms/slideAtoms";
import {LegacyRef} from "react";
import {IOutlineRace} from "../../../type/apiTypes";
import RaceOutlineLeft from "./RaceOutlineLeft";
import RaceOutlineRight from "./RaceOutlineRight";

export default function RaceOutline({
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
      className="flex"
      style={{
        transform: `translateX(${slide}px)`,
        transition: "1s ease-in-out",
      }}
    >
      <div className="flex p-4 w-full gap-5">
        <RaceOutlineLeft item={item} />
        <RaceOutlineRight item={item} />
      </div>
    </div>
  );
}
