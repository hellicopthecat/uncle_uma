import {IHorseDetail} from "../../../../type/apiTypes";
import SharedTxt from "../../../shared/sharedTxt";

export default function HorseDetailYearBody({
  recentRcDist,
  recentOrd,
  recentRating,
  recentRcTime,
  recentWgBudam,
  recentWgHr,
}: Pick<
  IHorseDetail,
  | "recentRcDist"
  | "recentOrd"
  | "recentRating"
  | "recentRcTime"
  | "recentWgBudam"
  | "recentWgHr"
>) {
  return (
    <div className="flex justify-between items-center border-y-2 border-blue-500 px-5">
      <div>
        <div className="relative right-[2.5em] flex  bg-blue-400 w-96 h-14 -skew-x-[30deg]">
          <div className="flex flex-col justify-center items-end ml-10 skew-x-[30deg]">
            <SharedTxt
              txtType="h3"
              txt={`${recentRcDist} M`}
              className="text-white"
            />
          </div>
          <div className="absolute bottom-2 right-5 skew-x-[30deg]">
            <SharedTxt
              txtType="p"
              txt={`${recentOrd}위`}
              className="text-7xl font-bold text-rose-500"
            />
          </div>
        </div>

        <div className="relative right-[4.2em] flex items-center  bg-gray-500 w-96 h-10 -skew-x-[30deg]">
          <div
            style={{
              backgroundColor: "red",
              width: recentRating === "-" ? 0 : `${recentRating}%`,
              height: "100%",
            }}
          />
          <SharedTxt
            txtType="h5"
            txt="RATING"
            className="absolute left-16 top-1 bottom-0 text-white"
          />
          <SharedTxt
            txtType="h5"
            txt={`${recentRating === "-" ? 0 : `${recentRating}%`}`}
            className="absolute right-3 top-1 bottom-0 text-white"
          />
        </div>
      </div>

      <div className="flex flex-col items-end">
        <SharedTxt txtType="h5" txt="최근경주기록" />
        <SharedTxt txtType="h5" txt={`${recentRcTime}초`} />
      </div>
      <div className="flex flex-col items-end">
        <SharedTxt txtType="h5" txt="최근경주부담중량" />
        <SharedTxt txtType="h5" txt={`${recentWgBudam} Kg`} />
      </div>
      <div className="flex flex-col items-end">
        <SharedTxt txtType="h5" txt="최근경주마체중" />
        <SharedTxt txtType="h5" txt={`${recentWgHr} Kg`} />
      </div>
    </div>
  );
}
