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
  const [data, setData] = useState([]);
  const [locationNum, setLocationNum] = useState(1);
  const [nowYear, setNowYear] = useState(`${year}`);
  const [nowMonth, setNowMonth] = useState("");
  const [nowDate, setNowDate] = useState("");

  const BASE_URL =
    "https://apis.data.go.kr/B551015/API72_1/racePlan_1?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=1&numOfRows=50&meet=${locationNum}&rc_date=${nowDate}&rc_month=${nowMonth}&rc_year=${nowYear}&_type=json`;
  const fetchUrl = `${BASE_URL}${API_KEY}${query}`;

  useEffect(() => {
    const fetchRacingPlan = async () => {
      const response = await (await fetch(fetchUrl)).json();
      console.log(response.response);
      setData(response.response.body.items.item);
    };
    fetchRacingPlan();
  }, [fetchUrl, nowDate, nowMonth, nowYear, locationNum]);

  return (
    <div>
      <HorseLocalNav
        onChangeLocation={(num) => {
          setLocationNum(num);
        }}
      />
      <h1>전국 경마공원 경주계획표</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNowYear(e.target.year.value);
          setNowMonth(e.target.month.value.replace(/-/g, ""));
          setNowDate(e.target.date.value.replace(/-/g, ""));
        }}
      >
        <fieldset>
          <legend>계획검색</legend>
          <select name="year" defaultValue={""}>
            <option value="">선택</option>
            <option value={year - 1}>{year - 1}</option>
            <option value={year}>{year}</option>
          </select>
          <input
            type="month"
            name="month"
            min={`${year - 1}-${month}`}
            max={`${year}-${month}`}
          />
          <input
            type="date"
            name="date"
            min={`${year - 2}-${month}-${dateNum}`}
            max={`${year}-${month}-${dateNum}`}
          />
          <button type="submit">검색</button>
        </fieldset>
      </form>
      <PlanResult data={data} localNum={locationNum} />
    </div>
  );
}
