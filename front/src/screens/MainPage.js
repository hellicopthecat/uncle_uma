import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function MainPage() {
  const year = new Date().getFullYear();
  const month =
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  const date =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  const nowDate = year + month + date;
  const lastDate = `${year}${month < 10 ? "0" + (month - 1) : month - 1}05`;
  const [data, set_data] = useState(null);
  const [localNum, setLocalNum] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const END_POINT =
    "https://apis.data.go.kr/B551015/API3_1/raceInfo_1?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=1&numOfRows=100&meet=${localNum}&rc_month=${year}${month}&_type=json`;
  const URL = END_POINT + API_KEY + query;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await (await fetch(URL)).json();
        console.log(response.response);
        const loadData = response.response.body.items.item;
        console.log(loadData);
        set_data(loadData);
      } catch (error) {
        console.log(error);
        setLoading(false);
        set_data(null);
      } finally {
        setLoading(true);
      }
    };
    fetchData();
  }, [URL, localNum]);

  return (
    <div className="relative h-full">
      <div className="fixed top-0 z-0 brightness-50">
        <img src="/img/main/main_1.jpg" alt="" />
      </div>
      <div className="container mx-auto relative z-10 bg-white border-2 border-sky-600  my-20 rounded-lg w-10/12">
        <div className="flex m-5">
          <button
            onClick={() => {
              setLocalNum(1);
            }}
            className={`border-2 border-sky-500 cursor-pointer px-5 rounded-t-lg`}
          >
            서울
          </button>
          <button
            onClick={() => {
              setLocalNum(2);
            }}
            className={`border-2 border-sky-500 cursor-pointer px-5 rounded-t-lg`}
          >
            제주
          </button>
          <button
            onClick={() => {
              setLocalNum(3);
            }}
            className={`border-2 border-sky-500 cursor-pointer px-5 rounded-t-lg`}
          >
            부산
          </button>
        </div>
        {isLoading ? (
          // data.map((item) => console.log(item))
          <div className="border-2 border-sky-400 p-5 m-5 rounded-md">
            {data === undefined ? (
              <div>
                <div className="flex items-center">
                  <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2">
                    *
                  </span>
                  <span>
                    최근경기데이터가 업로드되지 않았거나 경기가 이뤄지지
                    않았습니다.
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center">
                  <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2">
                    *
                  </span>
                  <span>최근경주개요</span>
                </div>
              </div>
            )}
          </div>
        ) : data === null ? (
          <p>데이터 없음</p>
        ) : (
          <p>로딩중</p>
        )}
      </div>
      <div className="container mx-auto relative z-10">
        <ul className="flex justify-center">
          <li className="flex flex-col items-center border border-blue-300 bg-white w-72 mx-auto p-5 rounded-lg">
            <h2 className="text-2xl font-bold my-5">서울경마</h2>
            <div className="w-44 overflow-hidden rounded-full my-5">
              <img src="/img/main/horse_1.png" alt="" />
            </div>
            <Link to="">
              <button
                type="click"
                className="text-lg border border-blue-200 px-2 py-1 my-5 rounded-md"
              >
                바로가기
              </button>
            </Link>
          </li>
          <li className="flex flex-col items-center border border-blue-300 bg-white w-72 mx-auto p-5 rounded-lg">
            <h2 className="text-2xl font-bold my-5">제주경마</h2>
            <div className="w-44 overflow-hidden rounded-full my-5">
              <img src="/img/main/horse_2.png" alt="" />
            </div>
            <Link to="">
              <button
                type="click"
                className="text-lg border border-blue-200 px-2 py-1 my-5 rounded-md"
              >
                바로가기
              </button>
            </Link>
          </li>
          <li className="flex flex-col items-center border border-blue-300 bg-white w-72 mx-auto p-5 rounded-lg">
            <h2 className="text-2xl font-bold my-5">부산경남경마</h2>
            <div className="w-44 overflow-hidden rounded-full my-5">
              <img src="/img/main/horse_3.png" alt="" />
            </div>
            <Link to="">
              <button
                type="click"
                className="text-lg border border-blue-200 px-2 py-1 my-5 rounded-md"
              >
                바로가기
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
// waterRate 함수율
// track 주로상태
// chaksun1 1착상금
// chaksun2 2착상금
// chaksun3 3착상금
// chaksun4 4착상금
// chaksun5 5착상금
// buga1 1착부가상금
// buga2 2착부가상금
// buga3 3착부가상금
// winAmt 단승식 매출액
// plcAmt 연승식 매출액
// qnlAmt 복승식 매출액
// exaAmt 복연승식 매출액
// qplAmt 쌍승식 매출액
// tlaAmt 삼복승식 매출액
// triAmt 삼쌍승식 매출액
// totalAmt 합계 매출액
// meet 시행경마장명
// rcDate 경주일자
// rcNo 경주번호
// ilsu 경주차수
// rcDist 경주거리
// rank 등급조건
// budam 부담구분
// rcName 경주명
// stRating 레이팅하한조건
// spRating 레이팅상한조건
// ageCond 연령조건
// weather 날
