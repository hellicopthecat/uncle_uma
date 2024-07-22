import {useRecoilValue} from "recoil";
import {IOutlineRace} from "../../../../../type/apiTypes";
import SharedTxt from "../../../../shared/sharedTxt";
import InnerLayout from "../OutlineLayout/innerLayout";
import OuterLayout from "../OutlineLayout/outerLayout";
import {localNumAtom} from "../../../../../atoms/localNumAtom";
import {busan, jeju, seoul} from "../../../../../constants/colors";
import WaterRate from "./RaceOutlineLeft/WaterRate";
import Track from "./RaceOutlineLeft/Track";
import Weather from "./RaceOutlineLeft/Weather";
import Reword from "./RaceOutlineLeft/Reword";

export default function RaceOutlineLeft({item}: {item: IOutlineRace}) {
  const localnum = useRecoilValue(localNumAtom);
  const dateMaker = (date: number) => {
    const yearSting = date.toString().substring(0, 4);
    const monthSting = date.toString().substring(4, 6);
    const dateSting = date.toString().substring(6, 8);
    return `${yearSting}년 ${monthSting}월 ${dateSting}일`;
  };
  return (
    <div className="flex text-nowrap gap-5 -skew-x-6 ">
      <div
        className="flex flex-col justify-between items-end p-5"
        style={{
          backgroundColor:
            localnum === 1 ? seoul : localnum === 2 ? jeju : busan,
        }}
      >
        <div className="flex flex-col items-end">
          <SharedTxt
            txtType="p"
            txt={`${item.meet}`}
            className="text-3xl font-extrabold italic text-white text-center"
          />
          <SharedTxt
            txtType="h4"
            txt={`${item.rcDist} M`}
            className="text-3xl font-extrabold italic text-white text-center"
          />
        </div>
        <div className="flex items-end">
          <SharedTxt
            txtType="p"
            txt="RACE"
            className="text-3xl font-extrabold italic text-white text-center"
          />
          <SharedTxt
            txtType="p"
            txt={item.rcNo + ""}
            className="text-7xl font-extrabold italic text-white text-center"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <SharedTxt
            txtType="p"
            txt={dateMaker(item.rcDate)}
            className="font-bold text-2xl"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <SharedTxt txtType="h5" txt="경주차수" />
              <SharedTxt txtType="h5" txt={item.ilsu + ""} />
            </div>
            <div className="flex flex-col gap-3">
              <SharedTxt txtType="h5" txt={item.rcName} />
              <SharedTxt txtType="h5" txt={item.ageCond} />
            </div>
            <div className="flex flex-col gap-3">
              <SharedTxt txtType="h5" txt={item.rank} />
              <SharedTxt txtType="h5" txt={item.budam} />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-10">
          <Track track={item.track} />
          <WaterRate waterRate={item.waterRate} />
          <Weather weather={item.weather} />
        </div>

        <div className="flex flex-col justify-between gap-3">
          <Reword
            chaksun1={item.chaksun1}
            chaksun2={item.chaksun2}
            chaksun3={item.chaksun3}
            chaksun4={item.chaksun4}
            chaksun5={item.chaksun5}
            buga1={item.buga1}
            buga2={item.buga2}
            buga3={item.buga3}
          />
        </div>
      </div>
    </div>
  );
}
