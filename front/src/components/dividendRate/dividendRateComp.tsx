import useDivdendRateHook from "../../hooks/dividendRate/useDividendRateHook";
import {IDividendResultType} from "../../type/apisTypes/dividendRate/dividendRateTypes";
import SharedTxt from "../shared/sharedTxt";
import DividendRateForm from "./dividendRateForm";
import DividendRatePagigation from "./dividendRatePagination";
import DividendRateResult from "./dividendRateResult";

export default function DividendRateComp() {
  const {data, mutate, isPending, isError} = useDivdendRateHook();
  return (
    <div className="flex flex-col gap-5 bg-white p-10 h-full ">
      <div className="flex items-center gap-5">
        <SharedTxt txtType="span" txt="" className="w-2 h-8 bg-blue-500" />
        <SharedTxt txtType="h2" txt="배당률 검색" />
      </div>
      <DividendRateForm mutate={mutate} />
      <div className="flex flex-col h-full overflow-auto">
        {isPending && (
          <SharedTxt txtType="h3" txt="데이터를 불러오는 중입니다." />
        )}
        {isError && (
          <SharedTxt txtType="h3" txt="데이터를 불러오는데 오류가 있습니다." />
        )}
        {data && <DividendRateResult {...data} />}
      </div>
      <DividendRatePagigation
        length={data?.response.body.totalCount as number}
      />
    </div>
  );
}
