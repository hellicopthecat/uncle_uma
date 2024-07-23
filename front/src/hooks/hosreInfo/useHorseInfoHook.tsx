import {useMutation, useQuery} from "@tanstack/react-query";
import {apis} from "../../apis/api";
import {ISearchHorseTypes} from "../../type/inputTypes";
import {IDefaultResponse} from "../../type/apiTypes";

export default function useHorseInfoHook() {
  const {data, isPending, mutate, error} = useMutation<
    IDefaultResponse,
    Error,
    ISearchHorseTypes,
    unknown
  >({
    mutationKey: ["horseInfo"],
    mutationFn: ({
      currentPage,
      rows,
      horseName,
      horseId,
      locationNum,
    }: ISearchHorseTypes) =>
      apis.getHorseInfo({
        currentPage,
        rows,
        horseName,
        horseId,
        locationNum,
      }),
  });

  return {mutate, data, isPending};
}
