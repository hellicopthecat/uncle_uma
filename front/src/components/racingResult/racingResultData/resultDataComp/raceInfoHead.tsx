import {IRacingResultResultTypes} from "../../../../type/apisTypes/racingResult/racingResultTypes";
import SharedTxt from "../../../shared/sharedTxt";
interface IRaceInfoHeadParams {
  ord: IRacingResultResultTypes["ord"];
  diffUnit: IRacingResultResultTypes["diffUnit"];
  rcTime: IRacingResultResultTypes["rcTime"];
  hrName: IRacingResultResultTypes["hrName"];
  hrNo: IRacingResultResultTypes["hrNo"];
  ordBigo: IRacingResultResultTypes["ordBigo"];
}
export default function RaceInfoHead({
  ord,
  diffUnit,
  rcTime,
  hrName,
  hrNo,
  ordBigo,
}: IRaceInfoHeadParams) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-10">
        <div className="relative size-10 border-r-[150px] border-l-0 border-t-[70px] border-b-0 border-r-transparent  border-l-transparent border-t-blue-500 ">
          <SharedTxt
            txtType="h1"
            txt={`${ord}위`}
            className="absolute z-50 left-16 -top-16 "
          />
        </div>
        <div className="flex gap-10 items-end">
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h4" txt="착차(코차이)" />
            <SharedTxt txtType="h5" txt={diffUnit + ""} />
          </div>
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h4" txt="기록" />
            <SharedTxt txtType="h5" txt={`${rcTime} 초`} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 w-full mr-5">
        <SharedTxt txtType="h1" txt={hrName} className="italic" />
        <SharedTxt txtType="h5" txt={`No.${hrNo}`} />
        {ordBigo !== "-" && (
          <SharedTxt
            txtType="p"
            txt={ordBigo + ""}
            className="text-red-600 font-bold text-xl "
          />
        )}
      </div>
    </div>
  );
}
