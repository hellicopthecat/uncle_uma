import {useEffect, useState} from "react";
// import HorseLocalNav from "../components/horseInfo/HorseLocalNav";
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
  const [monVal, setMonVal] = useState("");
  const [dateVal, setDateVal] = useState("");

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
    <div className="bg-horse bg-no-repeat bg-cover py-20">
      <div className="container mx-auto">
        <h2 className="text-white text-2xl font-bold my-10">
          전국 경마공원 경주계획표
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNowYear(e.target.year.value);
            setNowMonth(e.target.month.value.replace(/-/g, ""));
            setNowDate(e.target.date.value.replace(/-/g, ""));
          }}
        >
          <fieldset className="flex md:flex-row md:justify-center md:items-center sm:flex-col sm:justify-start sm:items-start">
            <legend className="hidden">경주계획검색</legend>
            <h3 className="font-semibold text-white whitespace-nowrap mr-5">
              경주 계획 검색
            </h3>
            <div className="flex items-center sm:my-2">
              <label className="text-white whitespace-nowrap" htmlFor="year">
                연도
              </label>
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
            </div>
            <div className="flex items-center sm:my-2">
              <label className="text-white whitespace-nowrap" htmlFor="month">
                년 / 월
              </label>
              <input
                id="month"
                type="month"
                name="month"
                min={`${year - 1}-${month}`}
                max={`${year}-${month}`}
                className="border-2 mx-2 transition ease-in-out focus-within:bg-blue-300 duration-300"
                onChange={(event) => setMonVal(event.target.value)}
                disabled={dateVal ? true : false}
                defaultValue={monVal}
              />
            </div>
            <div className="flex items-center sm:my-2">
              <label className="text-white whitespace-nowrap" htmlFor="date">
                년 / 월 / 일
              </label>
              <input
                id="date"
                type="date"
                name="date"
                min={`${year - 2}-${month}-${dateNum}`}
                max={`${year}-${month}-${dateNum}`}
                className="border-2 mx-2 transition ease-in-out focus-within:bg-blue-300 duration-300"
                onChange={(event) => setDateVal(event.target.value)}
                disabled={monVal ? true : false}
                defaultValue={dateVal}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-100 py-1 px-4 transition ease-in-out  hover:bg-blue-300 duration-300 rounded-md whitespace-nowrap"
            >
              검색
            </button>
          </fieldset>
        </form>
        <HorseLocalNav
          onChangeLocation={(num) => {
            setLocationNum(num);
          }}
        />
        {isLoading ? (
          <div className="flex justify-center items-center bg-white/50 h-[300px] text-2xl font-bold">
            <p>경기일정을 불러오고 있습니다</p>
          </div>
        ) : data ? (
          <div className="flex flex-col items-center pb-20">
            <PlanResult data={data} localNum={locationNum} />
            <div className="my-10">
              <ul className="flex justify-center">
                {pageNation.map((num) => (
                  <li
                    data-id={num}
                    key={num}
                    className={`border-2 mx-1 cursor-pointer text-center bg-white rounded-full w-[30px] ${
                      Number(currentPage) === num
                        ? `border-red-600 text-red-500`
                        : `border-blue-600  text-blue-500`
                    }`}
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
        ) : data === undefined ? (
          <div className="flex justify-center items-center bg-white/50 h-[300px] text-2xl font-bold">
            <p>당일 경기가 진행되지 않았습니다.</p>
          </div>
        ) : (
          <div className="flex justify-center items-center bg-white/50 h-[300px] text-2xl font-bold">
            <p>데이터를 불러오는데 실패하였습니다. 새로고침 해주세요</p>
          </div>
        )}
      </div>
    </div>
  );
}
