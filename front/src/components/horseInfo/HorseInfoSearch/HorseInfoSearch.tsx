import {useForm} from "react-hook-form";
import {ISearchHorseTypes} from "../../../type/inputTypes";
import {UseMutateFunction} from "@tanstack/react-query";
import {IDefaultResponse} from "../../../type/apiTypes";
import {useEffect} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {
  searchHorsePaginationAtom,
  searchHorseRowAtom,
} from "../../../atoms/searchHorse/searchHorse";

export default function HorseInfoSearch({
  mutateFn,
}: {
  mutateFn: UseMutateFunction<
    IDefaultResponse,
    Error,
    ISearchHorseTypes,
    unknown
  >;
}) {
  const page = useRecoilValue(searchHorsePaginationAtom);
  const [row, setRow] = useRecoilState(searchHorseRowAtom);
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<ISearchHorseTypes>({
    defaultValues: {
      currentPage: page,
      rows: 100,
      horseName: "",
      horseId: "",
      locationNum: 1,
    },
  });

  const onSumbit = ({
    rows,
    horseName,
    horseId,
    locationNum,
  }: ISearchHorseTypes) => {
    mutateFn({currentPage: page, rows, horseName, horseId, locationNum});
  };

  const {currentPage, rows, horseName, horseId, locationNum} = watch();
  useEffect(() => {
    setRow(rows);
    mutateFn({currentPage: page, rows: row, horseName, horseId, locationNum});
  }, [currentPage, rows, horseName, horseId, locationNum, page]);

  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <fieldset className="flex">
        <div>
          <label htmlFor="horseName">마명</label>
          <input
            {...register("horseName")}
            id="horseName"
            name="horseName"
            type="text"
            placeholder="말 이름을 입력하세요."
          />
        </div>
        <div>
          <label htmlFor="">말ID</label>
          <input
            {...register("horseId")}
            id="horseId"
            name="horseId"
            type="text"
            placeholder="말 ID를 입력하세요."
          />
        </div>
        <div>
          <label htmlFor="rows">묶음</label>
          <select {...register("rows")} id="rows" name="rows">
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div>
          <label htmlFor="locationNum">경마장</label>
          <select
            {...register("locationNum")}
            id="locationNum"
            name="locationNum"
          >
            <option value={1}>서울</option>
            <option value={2}>제주</option>
            <option value={3}>부산</option>
          </select>
        </div>
      </fieldset>
      <button type="submit" onSubmit={handleSubmit(onSumbit)}>
        확인
      </button>
    </form>
  );
}
