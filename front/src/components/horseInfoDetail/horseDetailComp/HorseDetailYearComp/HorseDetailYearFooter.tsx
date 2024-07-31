import {IHorseDetail} from "../../../../type/apiTypes";
import SharedTxt from "../../../shared/sharedTxt";

export default function HorseDetailYearFooter({
  chaksunY,
  chaksun_6,
  ord1CntY,
  ord2CntY,
  rcCntY,
  winRateY,
  qnlRateY,
}: Pick<
  IHorseDetail,
  | "chaksunY"
  | "chaksun_6"
  | "ord1CntY"
  | "ord2CntY"
  | "rcCntY"
  | "winRateY"
  | "qnlRateY"
>) {
  return (
    <div className="flex justify-around p-5 text-center">
      <div className="flex flex-col justify-center gap-5 flex-1">
        <div className="flex items-center gpa-5">
          <SharedTxt
            txtType="span"
            txt=""
            className="w-2 h-5 bg-green-400 mr-3"
          />
          <SharedTxt txtType="h5" txt="최근수득상금" />
        </div>
        <div className="">
          <SharedTxt txtType="h5" txt="최근6개월수득상금" />
          <SharedTxt txtType="h3" txt={`${chaksun_6.toLocaleString()} 원`} />
        </div>
        <div className="">
          <SharedTxt txtType="h5" txt="최근1년착순상금" />
          <SharedTxt txtType="h3" txt={`${chaksunY.toLocaleString()} 원`} />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-5 flex-1">
        <div className="flex items-center gpa-5">
          <SharedTxt
            txtType="span"
            txt=""
            className="w-2 h-5 bg-green-400 mr-3"
          />
          <SharedTxt txtType="h5" txt="최근수득상금" />
        </div>
        <div className="flex justify-between gap-5">
          <div className="">
            <SharedTxt txtType="h5" txt="최근1년1착회수" />
            <SharedTxt txtType="h3" txt={`${ord1CntY} 회`} />
          </div>
          <div className="">
            <SharedTxt txtType="h5" txt="최근1년2착회수" />
            <SharedTxt txtType="h3" txt={`${ord2CntY} 회`} />
          </div>
          <div className="">
            <SharedTxt txtType="h5" txt="최근1년총출주횟수" />
            <SharedTxt txtType="h3" txt={`${rcCntY} 회`} />
          </div>
        </div>

        <div className="flex justify-around gap-5">
          <div className="">
            <SharedTxt txtType="h5" txt="최근1년승률" />
            <SharedTxt txtType="h3" txt={`${winRateY} %`} />
          </div>
          <div className="">
            <SharedTxt txtType="h5" txt="최근1년복승률" />
            <SharedTxt txtType="h3" txt={`${qnlRateY} %`} />
          </div>
        </div>
      </div>
    </div>
  );
}
