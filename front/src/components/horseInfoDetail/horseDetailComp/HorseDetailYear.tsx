import {IHorseDetail} from "../../../type/apiTypes";
import SharedTxt from "../../shared/sharedTxt";
import HorseDetailYearBody from "./HorseDetailYearComp/HorseDetailYearBody";
import HorseDetailYearFooter from "./HorseDetailYearComp/HorseDetailYearFooter";
import HorseDetailYearHeader from "./HorseDetailYearComp/HorseDetailYearHeader";

export default function HorseDetailYear(
  detailData: Pick<
    IHorseDetail,
    | "chaksunY"
    | "chaksun_6"
    | "ord1CntY"
    | "ord2CntY"
    | "qnlRateY"
    | "rcCntY"
    | "recentBudam"
    | "recentOrd"
    | "recentRank"
    | "recentRating"
    | "recentRcDate"
    | "recentRcDist"
    | "recentRcName"
    | "recentRcNo"
    | "recentRcTime"
    | "recentWgBudam"
    | "recentWgHr"
    | "winRateY"
  >
) {
  return (
    <div className="border-2 border-indigo-500 rounded-md overflow-x-hidden">
      <HorseDetailYearHeader
        recentRcName={detailData.recentRcName}
        recentRank={detailData.recentRank}
        recentBudam={detailData.recentBudam}
        recentRcDate={detailData.recentRcDate}
        recentRcNo={detailData.recentRcNo}
      />
      <HorseDetailYearBody
        recentRcDist={detailData.recentRcDist}
        recentOrd={detailData.recentOrd}
        recentRating={detailData.recentRating}
        recentRcTime={detailData.recentRcTime}
        recentWgBudam={detailData.recentWgBudam}
        recentWgHr={detailData.recentWgHr}
      />
      <HorseDetailYearFooter
        chaksunY={detailData.chaksunY}
        chaksun_6={detailData.chaksun_6}
        ord1CntY={detailData.ord1CntY}
        ord2CntY={detailData.ord2CntY}
        rcCntY={detailData.rcCntY}
        winRateY={detailData.winRateY}
        qnlRateY={detailData.qnlRateY}
      />
    </div>
  );
}
