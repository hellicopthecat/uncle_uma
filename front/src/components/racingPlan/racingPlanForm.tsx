import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import SharedTxt from "../shared/sharedTxt";
import {
  racingPlanCurrentPage,
  racingPlanMinPage,
  racingPlanMaxPage,
  racingPlanLocal,
  racingPlanRows,
} from "../../atoms/racingPlan/racingPlanAtoms";
import {useForm} from "react-hook-form";
import {IRacingPlanSearchTypes} from "../../type/apisTypes/racingPlan/racingPlanTypes";
import {UseMutateFunction} from "@tanstack/react-query";
import {IDefaultResponse} from "../../type/apiTypes";
import {ChangeEvent, SetStateAction, useEffect, useState} from "react";

export default function RacingPlanForm({
  mutate,
}: {
  mutate: UseMutateFunction<
    IDefaultResponse,
    Error,
    IRacingPlanSearchTypes,
    unknown
  >;
}) {
  const yearState = new Date().getFullYear();
  const monthState = String(new Date().getMonth() + 1).padStart(2, "0");
  const dateState = String(new Date().getDate()).padStart(2, "0");
  const [radio, setRadio] = useState<1 | 2 | 3>(1);
  const [currentPageState, setCurrentPageState] = useRecoilState(
    racingPlanCurrentPage
  );
  const [localNumState, setLocalNum] = useRecoilState(racingPlanLocal);
  const [rowsState, setRows] = useRecoilState(racingPlanRows);
  const resetMinPage = useResetRecoilState(racingPlanMinPage);
  const resetMaxPage = useResetRecoilState(racingPlanMaxPage);

  const {register, handleSubmit, getValues, watch, setValue} =
    useForm<IRacingPlanSearchTypes>({
      defaultValues: {
        currentPage: String(currentPageState),
        rows: String(rowsState),
        localNum: String(localNumState),
        year: String(yearState),
        month: "",
        date: "",
      },
    });
  //fn
  const resetDates = (radioNum: SetStateAction<1 | 2 | 3>) => {
    setRadio(radioNum);
    setValue("date", "");
    setValue("month", "");
    setValue("year", "");
  };
  const onSubmit = () => {
    const {currentPage, rows, localNum, year, month, date} = getValues();
    mutate({
      currentPage,
      rows,
      localNum,
      year,
      month: month?.replace("-", ""),
      date: date?.replace("-", ""),
    });
    resetMinPage();
    resetMaxPage();
    setCurrentPageState(1);
  };

  const {year, month, date} = watch();

  useEffect(() => {
    mutate({
      currentPage: currentPageState + "",
      rows: rowsState + "",
      localNum: localNumState + "",
      year,
      month: month?.replace("-", ""),
      date: date?.replace("-", ""),
    });
  }, [currentPageState, localNumState, rowsState, year, month, date]);

  return (
    <form className="flex flex-col gap-5 p-5" onSubmit={handleSubmit(onSubmit)}>
      <legend>
        <SharedTxt txtType="h3" txt="경주계획검색" className="text-white" />
      </legend>
      <fieldset className="flex flex-col justify-center h-full gap-10 *:flex *:gap-5 *:items-center">
        <div>
          <label htmlFor="date">
            <SharedTxt
              txtType="h5"
              txt="
              경마장
              "
              className="text-white whitespace-nowrap"
            />
          </label>
          <select
            className="px-4 py-2 rounded-md"
            {...register("localNum")}
            name="localNum"
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setLocalNum(Number(event.target.value))
            }
          >
            <option value="1">서울</option>
            <option value="2">제주</option>
            <option value="3">부산</option>
          </select>
        </div>
        <div>
          <SharedTxt
            txtType="h5"
            txt="
              검색방법
              "
            className="text-white whitespace-nowrap"
          />
          <label htmlFor="searchYear">
            <SharedTxt txtType="h6" txt="연도로 검색" className="text-white" />
          </label>
          <input
            id="searchYear"
            type="radio"
            value={1}
            defaultChecked={radio === 1}
            name="searchRadio"
            onClick={() => resetDates(1)}
          />
          <label htmlFor="searchMonth">
            <SharedTxt txtType="h6" txt="연/월로 검색" className="text-white" />
          </label>
          <input
            id="searchMonth"
            type="radio"
            value={2}
            defaultChecked={radio === 2}
            name="searchRadio"
            onClick={() => resetDates(2)}
          />
          <label htmlFor="searchDate">
            <SharedTxt
              txtType="h6"
              txt="연/월/일로 검색"
              className="text-white"
            />
          </label>
          <input
            id="searchDate"
            type="radio"
            value={3}
            defaultChecked={radio === 3}
            name="searchRadio"
            onClick={() => resetDates(3)}
          />
        </div>

        {radio === 1 && (
          <div>
            <label className="text-white whitespace-nowrap" htmlFor="year">
              <SharedTxt txtType="h5" txt="연도" />
            </label>
            <select
              {...register("year")}
              id="year"
              name="year"
              className="px-4 py-2 rounded-md"
            >
              <option value={yearState}>{yearState}</option>
              <option value={String(Number(yearState) - 1)}>
                {String(Number(yearState) - 1)}
              </option>
              <option value={String(Number(yearState) - 2)}>
                {String(Number(yearState) - 2)}
              </option>
              <option value={String(Number(yearState) - 3)}>
                {String(Number(yearState) - 3)}
              </option>
              <option value={String(Number(yearState) - 4)}>
                {String(Number(yearState) - 4)}
              </option>
            </select>
          </div>
        )}
        {radio === 2 && (
          <div>
            <label className="text-white whitespace-nowrap" htmlFor="month">
              <SharedTxt txtType="h5" txt="연/월" />
            </label>
            <input
              {...register("month")}
              type="month"
              name="month"
              min={`${yearState - 4}-${monthState}`}
              max={`${yearState}-${monthState}`}
            />
          </div>
        )}
        {radio === 3 && (
          <div>
            <label className="text-white whitespace-nowrap" htmlFor="month">
              <SharedTxt txtType="h5" txt="연/월/일" />
            </label>
            <input
              {...register("date")}
              type="date"
              name="date"
              min={`${yearState - 4}-${monthState}-${dateState}`}
              max={`${yearState}-${monthState}-${dateState}`}
            />
          </div>
        )}
        <div>
          <select
            className="px-4 py-2 rounded-md"
            {...register("rows")}
            onChange={(event) => setRows(Number(event.target.value))}
          >
            <option value="">선택</option>
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <label className="text-white whitespace-nowrap" htmlFor="date">
            <SharedTxt txtType="h6" txt="개 씩 보기" className="text-white" />
          </label>
        </div>
        <button
          type="submit"
          className="flex justify-center bg-blue-100 py-1 px-4 transition ease-in-out hover:bg-blue-300 duration-300 rounded-md whitespace-nowrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          검색
        </button>
      </fieldset>
    </form>
  );
}
