import {UseMutateFunction} from "@tanstack/react-query";
import {useForm, UseFormRegister} from "react-hook-form";
import {date, month, year} from "../../constants/date";
import {IDefaultResponse} from "../../type/apiTypes";
import {IDividendRateSearchType} from "../../type/apisTypes/dividendRate/dividendRateTypes";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {
  divdiendMeet,
  dividendRows,
} from "../../atoms/dividendRate/dividendRateAtom";
import SharedTxt from "../shared/sharedTxt";

interface IDividendRateFormTypes {
  mutate: UseMutateFunction<
    IDefaultResponse,
    Error,
    IDividendRateSearchType,
    unknown
  >;
}
export default function DividendRateForm({mutate}: IDividendRateFormTypes) {
  const [findMonth, setFindMonth] = useState(false);
  const [meetValue, setMeet] = useRecoilState(divdiendMeet);
  const [rowsValue, setRows] = useRecoilState(dividendRows);
  const {register, handleSubmit, getValues, watch, setValue} =
    useForm<IDividendRateSearchType>({
      defaultValues: {
        pageNum: "1",
        rows: String(rowsValue),
        pool: "WIN",
        rcDate: "",
        rcMonth: "",
        rcNo: "1",
        meet: String(meetValue),
      },
    });
  //fn
  const onSubmit = () => {
    const {pageNum, rows, pool, rcDate, rcMonth, rcNo, meet} = getValues();
    mutate({
      pageNum,
      rows,
      pool,
      rcDate,
      rcMonth: rcMonth?.replace("-", ""),
      rcNo,
      meet,
    });
  };
  //useEffect
  const {pageNum, pool, rcDate, rcMonth, rcNo} = watch();
  useEffect(() => {
    mutate({
      pageNum,
      rows: String(rowsValue),
      pool,
      rcDate,
      rcMonth: rcMonth?.replace("-", ""),
      rcNo,
      meet: String(meetValue),
    });
  }, [pageNum, rowsValue, pool, rcDate, rcMonth, rcNo, meetValue]);
  useEffect(() => {
    if (findMonth) {
      setValue("rcDate", "");
    } else {
      setValue("rcMonth", "");
    }
  }, [findMonth]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex lg:items-center lg:flex-row md:flex-col md:items-start sm:flex-col justify-between ">
        <legend className="hidden">배당률 검색</legend>
        <div className="flex gap-5">
          <div className="flex items-center">
            <label htmlFor="find_fullDay" className=" whitespace-nowrap mr-5">
              <SharedTxt txtType="h6" txt="년/월/일로 찾기" />
            </label>
            <input
              id="find_fullDay"
              type="radio"
              name="findSelector"
              defaultChecked={!findMonth}
              onClick={() => setFindMonth(false)}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="find_month" className=" whitespace-nowrap mr-5">
              <SharedTxt txtType="h6" txt="년/월로 찾기" />
            </label>
            <input
              id="find_month"
              type="radio"
              name="findSelector"
              defaultChecked={findMonth}
              onClick={() => setFindMonth(true)}
            />
          </div>
        </div>
        <div className="flex items-center mx-3 md:my-2 sm:my-1">
          {!findMonth && (
            <>
              <label htmlFor="rcDate" className=" whitespace-nowrap mr-5">
                <SharedTxt txtType="h6" txt="날짜" />
              </label>
              <input
                {...register("rcDate")}
                id="rcDate"
                type="date"
                name="rcDate"
                min={`${year - 1}-${month}-${date}`}
                max={`${year}-${month}-${date}`}
                className="border border-blue-400"
              />
            </>
          )}
          {findMonth && (
            <>
              <label htmlFor="rcMonth" className=" whitespace-nowrap mr-5">
                <SharedTxt txtType="h6" txt="날짜" />
              </label>
              <input
                {...register("rcMonth")}
                id="rcMonth"
                type="month"
                name="rcMonth"
                min={`${year - 1}-${month}`}
                max={`${year}-${month}`}
                className="border border-blue-400"
              />
            </>
          )}
        </div>
        <div className="flex items-center mx-3 md:my-2 sm:my-1">
          <label htmlFor="pool" className=" whitespace-nowrap mr-5">
            <SharedTxt txtType="h6" txt="승식구분" />
          </label>
          <select
            {...register("pool")}
            id="pool"
            name="pool"
            className="border border-blue-400"
          >
            <option value={"WIN"}>단승식</option>
            <option value={"PLC"}>연승식</option>
            <option value={"QNL"}>복승식</option>
            <option value={"EXA"}>쌍승식</option>
            <option value={"QPL"}>복연승식</option>
            <option value={"TLA"}>삼복승식</option>
            <option value={"TRI"}>삼쌍승식</option>
          </select>
        </div>
        <div className="flex items-center mx-3 md:my-2 sm:my-1">
          <label htmlFor="rcNo" className=" whitespace-nowrap mr-5">
            <SharedTxt txtType="h6" txt="경주번호" />
          </label>
          <select
            {...register("rcNo")}
            id="rcNo"
            name="rcNo"
            className="border border-blue-400"
          >
            {Array.from({length: 15}, (_, num) => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center mx-3 md:my-2 sm:my-1">
          <label htmlFor="meet" className=" whitespace-nowrap mr-5">
            <SharedTxt txtType="h6" txt="경기 지역" />
          </label>
          <select
            {...register("meet")}
            id="meet"
            name="meet"
            className="border border-blue-400"
            onChange={(e) => setMeet(Number(e.target.value))}
          >
            <option value={1}>서울</option>
            <option value={2}>제주</option>
            <option value={3}>부산</option>
          </select>
        </div>
        <div className="flex items-center mx-3 md:my-2 sm:my-1">
          <label htmlFor="rows" className=" whitespace-nowrap mr-5">
            <SharedTxt txtType="h6" txt="개수" />
          </label>
          <select
            {...register("rows")}
            id="rows"
            name="rows"
            className="border border-blue-400"
            onChange={(e) => setRows(Number(e.target.value))}
          >
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-200 rounded-lg px-3 py-1 whitespace-nowrap"
        >
          검색
        </button>
      </fieldset>
    </form>
  );
}
