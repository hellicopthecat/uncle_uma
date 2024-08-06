import {IDefaultResponse} from "../../type/apiTypes";
import RacingResultBtn from "./racingResultBtn/RacingResultBtn";
import RacingResultData from "./racingResultData/racingResultData";
import {IRacingResultResultTypes} from "../../type/apisTypes/racingResult/racingResultTypes";

export default function RacingResultComp(data: IDefaultResponse) {
  return (
    <div className="relative flex flex-col justify-center">
      <RacingResultBtn length={data.response.body.totalCount} />
      <RacingResultData
        data={data.response.body.items.item as IRacingResultResultTypes[]}
      />
    </div>
  );
}
