import {IRacingResultResultTypes} from "../../../type/apisTypes/racingResult/racingResultTypes";
import {dateMaker} from "../../../utils/dateMaker";
import SharedTxt from "../../shared/sharedTxt";

export default function RacingResultData({
  data,
}: {
  data: IRacingResultResultTypes[];
}) {
  return (
    <div className="flex gap-10 ">
      {!data ? (
        <p>no Data</p>
      ) : (
        data.map((item) => (
          <div key={item.hrNo} className="flex flex-col gap-10 *:text-nowrap">
            <div className="relative size-10 border-r-[150px] border-l-0 border-t-[70px] border-b-0 border-r-transparent  border-l-transparent border-t-blue-500 ">
              <SharedTxt
                txtType="h1"
                txt={`${item.ord}위`}
                className="absolute z-50 left-16 -top-16 "
              />
              <SharedTxt
                txtType="p"
                txt={item.ordBigo + ""}
                className="text-red-600 font-bold text-xl "
              />
            </div>
            <div>
              <SharedTxt
                txtType="p"
                txt={item.hrName}
                className="text-red-600 font-bold text-xl "
              />
              <SharedTxt txtType="p" txt={`No.${item.hrNo}`} />
            </div>
            <div>
              <SharedTxt txtType="p" txt="경주 정보" />
              <SharedTxt txtType="p" txt={`경주번호 ${item.rcNo}`} />
              <SharedTxt txtType="p" txt={`${item.meet} 경마장`} />
              <SharedTxt txtType="p" txt={`${item.ilsu}일 차`} />
              <SharedTxt txtType="p" txt={dateMaker(item.rcDate)} />
              <SharedTxt txtType="p" txt={item.rcDay} />
              <SharedTxt txtType="p" txt={item.track} />
              <SharedTxt txtType="p" txt={item.weather} />
              <SharedTxt txtType="p" txt={item.budam} />
              <SharedTxt txtType="p" txt={item.ageCond} />
              <SharedTxt txtType="p" txt={item.prizeCond} />
              <SharedTxt txtType="p" txt={item.rank} />
              <SharedTxt txtType="p" txt={item.rankRise + ""} />
              <SharedTxt txtType="p" txt={item.rating + ""} />
              <SharedTxt txtType="p" txt={`출전번호 ${item.chulNo}`} />
              <SharedTxt txtType="p" txt={`${item.rcDist} M`} />
              <SharedTxt txtType="p" txt={item.rcName} />
              <SharedTxt txtType="p" txt={item.rcTime + ""} />
              <SharedTxt txtType="p" txt={item.hrTool} />
              <SharedTxt txtType="p" txt={item.wgBudam + ""} />
              <SharedTxt txtType="p" txt={item.wgBudamBigo + ""} />
              <SharedTxt txtType="p" txt={item.wgHr} />
              <SharedTxt txtType="p" txt={item.wgJk + ""} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
