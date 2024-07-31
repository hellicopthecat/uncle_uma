import {useMutation} from "@tanstack/react-query";
import {apis} from "../../apis/api";
import {
  IRacingPlanResultTypes,
  IRacingPlanSearchTypes,
} from "../../type/apisTypes/racingPlan/racingPlanTypes";
import {IDefaultResponse} from "../../type/apiTypes";

export default function useRacingPlanHook() {
  const {data, mutate, isPending, isError, isSuccess} = useMutation<
    IDefaultResponse,
    Error,
    IRacingPlanSearchTypes,
    unknown
  >({
    mutationKey: ["searchRacingPlan"],
    mutationFn: ({
      currentPage,
      rows,
      localNum,
      date,
      month,
      year,
    }: IRacingPlanSearchTypes) =>
      apis.getHorseRacingPlan({currentPage, rows, localNum, date, month, year}),
  });
  return {data, mutate, isPending, isError, isSuccess};
}
