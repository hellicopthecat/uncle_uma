import {IRacingResultResultTypes} from "../../../../type/apisTypes/racingResult/racingResultTypes";
import {dateMaker} from "../../../../utils/dateMaker";
import SharedTxt from "../../../shared/sharedTxt";
interface IRacingInfoParams {
  rcDate: IRacingResultResultTypes["rcDate"];
  rcDay: IRacingResultResultTypes["rcDay"];
  weather: IRacingResultResultTypes["weather"];
  track: IRacingResultResultTypes["track"];
  rcNo: IRacingResultResultTypes["rcNo"];
  meet: IRacingResultResultTypes["meet"];
  ilsu: IRacingResultResultTypes["ilsu"];
  rcName: IRacingResultResultTypes["rcName"];
  rank: IRacingResultResultTypes["rank"];
  budam: IRacingResultResultTypes["budam"];
  ageCond: IRacingResultResultTypes["ageCond"];
  prizeCond: IRacingResultResultTypes["prizeCond"];
  rcDist: IRacingResultResultTypes["rcDist"];
}
export default function RacingInfo({
  rcDate,
  rcDay,
  weather,
  track,
  rcNo,
  meet,
  ilsu,
  rcName,
  rank,
  budam,
  ageCond,
  prizeCond,
  rcDist,
}: IRacingInfoParams) {
  return (
    <div className="flex justify-between items-baseline *:text-xl *:font-semibold">
      <div className="flex items-center gap-3">
        <SharedTxt txtType="span" txt="" className="w-2 h-6 bg-blue-400" />
        <SharedTxt txtType="h3" txt="경주 정보" />
      </div>
      <div className="flex flex-col items-end ">
        <div className="flex gap-3">
          <SharedTxt txtType="p" txt={dateMaker(rcDate)} />
          <SharedTxt txtType="p" txt={rcDay} />
        </div>
        <div className="flex gap-3">
          <SharedTxt txtType="p" txt={weather} />
          <SharedTxt txtType="p" txt={track} />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex gap-5">
          <SharedTxt txtType="p" txt={`경주번호 ${rcNo}`} />
          <SharedTxt txtType="p" txt={`${meet} 경마장`} />
          <SharedTxt txtType="p" txt={`${ilsu}일 차`} />
        </div>
        <div className="flex gap-5">
          <SharedTxt txtType="p" txt={rcName} />
          <SharedTxt txtType="p" txt={rank} />
          <SharedTxt txtType="p" txt={budam} />
          <SharedTxt txtType="p" txt={ageCond} />
          <SharedTxt txtType="p" txt={prizeCond} />
          <SharedTxt txtType="p" txt={`${rcDist} M`} />
        </div>
      </div>
    </div>
  );
}
