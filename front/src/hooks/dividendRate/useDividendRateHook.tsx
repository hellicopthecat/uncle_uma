import {useMutation} from "@tanstack/react-query";
import {apis} from "../../apis/api";
import {IDividendRateSearchType} from "../../type/apisTypes/dividendRate/dividendRateTypes";
import {IDefaultResponse} from "../../type/apiTypes";

export default function useDivdendRateHook() {
  const {data, mutate, isPending, isError, isSuccess} = useMutation<
    IDefaultResponse,
    Error,
    IDividendRateSearchType,
    unknown
  >({
    mutationKey: ["dividendRate"],
    mutationFn: ({
      pageNum,
      rows,
      pool,
      rcDate,
      rcMonth,
      rcNo,
      meet,
    }: IDividendRateSearchType) =>
      apis.getCertainDivdedInfo({
        pageNum,
        rows,
        pool,
        rcDate,
        rcMonth,
        rcNo,
        meet,
      }),
  });
  return {data, mutate, isPending, isError, isSuccess};
}
