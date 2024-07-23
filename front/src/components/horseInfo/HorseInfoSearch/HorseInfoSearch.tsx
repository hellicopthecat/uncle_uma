import {useForm} from "react-hook-form";
import {ISearchHorseTypes} from "../../../type/inputTypes";
import {UseMutateFunction} from "@tanstack/react-query";
import {IDefaultResponse} from "../../../type/apiTypes";
import {useEffect} from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
  searchHorseEndPageAtom,
  searchHorseMaxPageAtom,
  searchHorseMinPageAtom,
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
  const [row, setRow] = useRecoilState(searchHorseRowAtom);
  const [currentPage, setCurrentPage] = useRecoilState(
    searchHorsePaginationAtom
  );

  const endPage = useRecoilValue(searchHorseEndPageAtom);
  const setMinPage = useSetRecoilState(searchHorseMinPageAtom);
  const [maxPage, setMaxPage] = useRecoilState(searchHorseMaxPageAtom);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: {errors},
  } = useForm<ISearchHorseTypes>({
    defaultValues: {
      currentPage: currentPage,
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
    mutateFn({currentPage, rows, horseName, horseId, locationNum});
    setCurrentPage(1);
    setMinPage(0);
    setMaxPage(10);
  };

  const {rows, horseName, horseId, locationNum} = watch();
  useEffect(() => {
    mutateFn({
      currentPage,
      rows: row,
      horseName,
      horseId,
      locationNum,
    });
    setRow(rows);
    if (maxPage > endPage) {
      setCurrentPage(endPage);
      setMaxPage(endPage === 1 ? 10 : endPage);
      setMinPage(endPage <= 10 ? 0 : endPage - 10);
    }
  }, [currentPage, rows, horseName, horseId, locationNum, endPage, maxPage]);

  return (
    <form
      onSubmit={handleSubmit(onSumbit)}
      className="relative z-20 flex flex-col justify-center gap-5 bg-yellow-50 h-full p-5 w-96"
    >
      <fieldset className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="horseName" className="">
            마명
          </label>
          <input
            {...register("horseName")}
            id="horseName"
            name="horseName"
            type="text"
            placeholder="말 이름을 입력하세요."
            className="p-2 rounded-md bg-black/50 placeholder:text-white text-white shadow-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="horseId">말ID</label>
          <input
            {...register("horseId")}
            id="horseId"
            name="horseId"
            type="text"
            placeholder="말 ID를 입력하세요."
            className="p-2 rounded-md bg-black/50 placeholder:text-white text-white shadow-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="rows">묶음</label>
          <select
            {...register("rows")}
            id="rows"
            name="rows"
            className="p-2 rounded-md bg-black/50 text-white shadow-md"
          >
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="locationNum">경마장</label>
          <select
            {...register("locationNum")}
            id="locationNum"
            name="locationNum"
            className="p-2 rounded-md bg-black/50 text-white shadow-md"
          >
            <option value={1}>서울</option>
            <option value={2}>제주</option>
            <option value={3}>부산</option>
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onSubmit={handleSubmit(onSumbit)}
        className="bg-blue-400 py-2 rounded-md text-white shadow-md"
      >
        확인
      </button>
    </form>
  );
}
