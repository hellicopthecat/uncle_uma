import {useEffect, useState} from "react";
import HorseLocalNav from "../components/localNav/HorseLocalNav";
import PlanResult from "../components/racingPlan/PlanResult";
export default function RacingPlan() {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const dateNum =
    date.getDate() < 10 ? "0" + (date.getDate() + 1) : date.getDate() + 1;
  const [data, setData] = useState();
  const [locationNum, setLocationNum] = useState(1);
  const [nowYear, setNowYear] = useState(`${year}`);
  const [nowMonth, setNowMonth] = useState("");
  const [nowDate, setNowDate] = useState("");
  const [isLoading, setLoading] = useState(true);

  let [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const rows = 30;
  let endPage = Math.ceil(totalPage / rows);
  const BASE_URL =
    "https://apis.data.go.kr/B551015/API72_1/racePlan_1?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=${currentPage}&numOfRows=${rows}&meet=${locationNum}&rc_date=${nowDate}&rc_month=${nowMonth}&rc_year=${nowYear}&_type=json`;
  const fetchUrl = `${BASE_URL}${API_KEY}${query}`;

  useEffect(() => {
    const fetchRacingPlan = async () => {
      setLoading(true);
      try {
        const response = await (await fetch(fetchUrl)).json();
        setTotalPage(response.response.body.totalCount);
        setData(response.response.body.items.item);
      } catch (error) {
        setData(null);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRacingPlan();
  }, [
    fetchUrl,
    nowDate,
    nowMonth,
    nowYear,
    locationNum,
    totalPage,
    endPage,
    currentPage,
  ]);

  const pageNation = [];
  for (let i = 1; i < endPage; i++) {
    pageNation.push(i);
  }
  return (
    <div className="container mx-auto">
      <HorseLocalNav
        onChangeLocation={(num) => {
          setLocationNum(num);
        }}
      />
      <h2 className="text-xl font-bold my-10">전국 경마공원 경주계획표</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNowYear(e.target.year.value);
          setNowMonth(e.target.month.value.replace(/-/g, ""));
          setNowDate(e.target.date.value.replace(/-/g, ""));
        }}
      >
        <fieldset className="flex justify-center items-center ">
          <legend className="hidden">경주계획검색</legend>
          <h3 className="font-semibold mr-5">경주 계획 검색</h3>
          <label htmlFor="year">연도</label>
          <select
            id="year"
            name="year"
            defaultValue={""}
            className="border-2 mx-2 transition ease-in-out focus-within:bg-blue-300 duration-300"
          >
            <option value="">선택</option>
            <option value={year - 1}>{year - 1}</option>
            <option value={year}>{year}</option>
          </select>
          <label htmlFor="month">년 / 월</label>
          <input
            id="month"
            type="month"
            name="month"
            min={`${year - 1}-${month}`}
            max={`${year}-${month}`}
            className="border-2 mx-2 transition ease-in-out focus-within:bg-blue-300 duration-300"
          />
          <label htmlFor="date">년 / 월 / 일</label>
          <input
            id="date"
            type="date"
            name="date"
            min={`${year - 2}-${month}-${dateNum}`}
            max={`${year}-${month}-${dateNum}`}
            className="border-2 mx-2 transition ease-in-out focus-within:bg-blue-300 duration-300"
          />
          <button
            type="submit"
            className="bg-blue-100 py-1 px-4 transition ease-in-out  hover:bg-blue-300 duration-300 rounded-md"
          >
            검색
          </button>
        </fieldset>
      </form>
      {isLoading ? (
        <p>경기일정을 불러오고 있습니다</p>
      ) : data ? (
        <div>
          <PlanResult data={data} localNum={locationNum} />
          <div className="my-2">
            <ul className="flex justify-center">
              {pageNation.map((num) => (
                <li
                  data-id={num}
                  key={num}
                  className="border-2 border-x-0 border-y-blue-200 mx-1 px-2 cursor-pointer"
                  onClick={(e) => {
                    setCurrentPage(e.target.dataset.id);
                  }}
                >
                  {num}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>데이터를 불러오는데 실패하였습니다. 새로고침 해주세요</p>
      )}
    </div>
  );
}
