import {useRecoilValue, useSetRecoilState} from "recoil";
import {
  racingPlanEndPage,
  racingPlanLocal,
  racingPlanRows,
} from "../../../atoms/racingPlan/racingPlanAtoms";
import PlanTHeader from "./tables/planTHeader";
import PlanTBody from "./tables/planTBody";
import {IDefaultResponse} from "../../../type/apiTypes";
import TableNav from "./tables/tableNav";
import {useEffect} from "react";

export default function PlanResult(data: IDefaultResponse) {
  const localNum = useRecoilValue(racingPlanLocal);
  const setEndPage = useSetRecoilState(racingPlanEndPage);
  const racingPlanRow = useRecoilValue(racingPlanRows);
  const localString = (localNum: number) => {
    if (localNum === 1) {
      return "서울";
    } else if (localNum === 2) {
      return "제주";
    } else {
      return "부산";
    }
  };
  useEffect(() => {
    setEndPage(Math.ceil(data.response.body.totalCount / racingPlanRow));
  }, [data]);
  return (
    <div className=" flex flex-col w-full h-full p-5 overflow-y-scroll gap-5">
      <h2 className="text-xl font-bold my-4 text-white">
        {localString(localNum)} 계획표 결과
      </h2>
      <table className="table-auto text-center border-collapse">
        <PlanTHeader />
        <PlanTBody {...data} />
      </table>
      <TableNav totalpage={data.response.body.totalCount} />
    </div>
  );
}
