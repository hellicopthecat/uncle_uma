import {IHorseDetail} from "../../../../type/apiTypes";
import {dateMaker} from "../../../../utils/dateMaker";
import SharedTxt from "../../../shared/sharedTxt";

export default function HorseDetailYearHeader({
  recentRcName,
  recentRank,
  recentBudam,
  recentRcDate,
  recentRcNo,
}: Pick<
  IHorseDetail,
  "recentRcName" | "recentRank" | "recentBudam" | "recentRcDate" | "recentRcNo"
>) {
  const rcYear = String(recentRcDate).substring(0, 4);
  const rcMonth = String(recentRcDate).substring(4, 6);
  const rcDate = String(recentRcDate).substring(6, 8);
  const fullDate = `${rcYear}-${rcMonth}-${rcDate}`;
  const fullRcDate = new Date(fullDate).getTime();
  const NOW = Date.now();
  const nowYear = new Date().getFullYear();
  const nowMonth = String(new Date().getMonth() + 1).padStart(2, "0");
  const nowDate = new Date().getDate();
  const FULLDDay = Number(`${nowYear}${nowMonth}${nowDate}`);

  return (
    <div className="flex justify-between items-baseline p-5">
      <div className="flex items-center">
        <SharedTxt
          txtType="span"
          txt=""
          className="w-2 h-5 bg-indigo-500 mr-3"
        />
        <SharedTxt txtType="h3" txt="최근경주데이터" />
      </div>
      <div className="flex items-baseline gap-5">
        <div className="flex gap-2">
          {recentRcName !== "-" && (
            <SharedTxt
              txtType="h5"
              txt={recentRcName}
              className="px-2 py-1 bg-blue-300 rounded-md"
            />
          )}
          {recentRank !== "-" && (
            <SharedTxt
              txtType="h5"
              txt={recentRank}
              className="px-2 py-1 bg-blue-300 rounded-md"
            />
          )}
          {recentBudam !== "-" && (
            <SharedTxt
              txtType="h5"
              txt={recentBudam}
              className="px-2 py-1 bg-blue-300 rounded-md"
            />
          )}
          {NOW < Number(fullRcDate) && (
            <SharedTxt
              txtType="h5"
              txt="다가오는 경기"
              className="px-2 py-1 bg-red-500 text-white rounded-md"
            />
          )}
          {NOW > Number(fullRcDate) && (
            <SharedTxt
              txtType="h5"
              txt="지난경기"
              className="px-2 py-1 bg-amber-400 rounded-md"
            />
          )}
          {recentRcDate === FULLDDay && (
            <SharedTxt
              txtType="h5"
              txt="오늘경기"
              className="px-2 py-1 bg-green-400 rounded-md"
            />
          )}
        </div>

        <div className="flex flex-col items-end">
          <SharedTxt txtType="h4" txt={dateMaker(recentRcDate)} />
          <SharedTxt txtType="h5" txt={`제 ${recentRcNo} 경기`} />
        </div>
      </div>
    </div>
  );
}
