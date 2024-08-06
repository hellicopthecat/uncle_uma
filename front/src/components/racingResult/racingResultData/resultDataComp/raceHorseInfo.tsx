import {IRacingResultResultTypes} from "../../../../type/apisTypes/racingResult/racingResultTypes";
import {dateMaker} from "../../../../utils/dateMaker";
import SharedTxt from "../../../shared/sharedTxt";

interface IRaceHorseInfoParams {
  chulNo: IRacingResultResultTypes["chulNo"];
  birthday: IRacingResultResultTypes["birthday"];
  age: IRacingResultResultTypes["age"];
  sex: IRacingResultResultTypes["sex"];
  name: IRacingResultResultTypes["name"];
  hrTool: IRacingResultResultTypes["hrTool"];
  rankRise: IRacingResultResultTypes["rankRise"];
  rating: IRacingResultResultTypes["rating"];
  wgBudam: IRacingResultResultTypes["wgBudam"];
  wgBudamBigo: IRacingResultResultTypes["wgBudamBigo"];
  wgHr: IRacingResultResultTypes["wgHr"];
  wgJk: IRacingResultResultTypes["wgJk"];
  owName: IRacingResultResultTypes["owName"];
  owNo: IRacingResultResultTypes["owNo"];
  trName: IRacingResultResultTypes["trName"];
  trNo: IRacingResultResultTypes["trNo"];
  jkName: IRacingResultResultTypes["jkName"];
  jkNo: IRacingResultResultTypes["jkNo"];
}
export default function RaceHorseInfo({
  chulNo,
  birthday,
  age,
  sex,
  name,
  hrTool,
  rankRise,
  rating,
  wgBudam,
  wgBudamBigo,
  wgHr,
  wgJk,
  owName,
  owNo,
  trName,
  trNo,
  jkName,
  jkNo,
}: IRaceHorseInfoParams) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <SharedTxt txtType="span" txt="" className="w-2 h-6 bg-blue-400" />
        <SharedTxt txtType="h3" txt="말정보" />
      </div>
      <div className="flex flex-col gap-10 px-10">
        <div className="flex justify-between ">
          <SharedTxt txtType="h3" txt={`출전번호 ${chulNo}`} />
          <div className="flex flex-col items-end gap-1">
            <SharedTxt txtType="h5" txt="출생일" />
            <div className="flex gap-5">
              <SharedTxt txtType="p" txt={`${dateMaker(birthday)} 생`} />
              <SharedTxt txtType="p" txt={`${age} 살`} />
            </div>
          </div>
          <div className="flex flex-col items-end ">
            <SharedTxt txtType="h5" txt="성별" />
            <SharedTxt txtType="p" txt={sex} />
          </div>
          <div className="flex flex-col items-end ">
            <SharedTxt txtType="h5" txt="생산지" />
            <SharedTxt txtType="p" txt={name} />
          </div>
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h5" txt="장구내역" />
            <SharedTxt txtType="p" txt={hrTool} />
          </div>
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h5" txt="승군순위" />
            <SharedTxt txtType="p" txt={rankRise + ""} />
          </div>
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h5" txt="레이팅" />
            <SharedTxt txtType="p" txt={rating + ""} />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h5" txt="부담중량" />
            <SharedTxt txtType="p" txt={wgBudam + ""} />
          </div>
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h5" txt="부담증량 증량신청표기" />
            <SharedTxt txtType="p" txt={wgBudamBigo + ""} />
          </div>
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h5" txt="마체감량" />
            <SharedTxt txtType="p" txt={wgHr} />
          </div>
          <div className="flex flex-col items-end">
            <SharedTxt txtType="h5" txt="기수감량" />
            <SharedTxt txtType="p" txt={wgJk + ""} />
          </div>
        </div>
        <div className="flex justify-around text-center">
          <div className="flex flex-col">
            <SharedTxt txtType="h6" txt="마주" />
            <SharedTxt txtType="p" txt={`No.${owNo} ${owName}`} />
          </div>
          <div className="flex flex-col">
            <SharedTxt txtType="h6" txt="조교사" />
            <SharedTxt txtType="p" txt={`No.${trNo} ${trName}`} />
          </div>
          <div className="flex flex-col">
            <SharedTxt txtType="h6" txt="기수" />
            <SharedTxt txtType="p" txt={`No.${jkNo} ${jkName}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
