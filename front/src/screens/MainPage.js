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

  let currentSum = 0;
  const raceSum = document.querySelectorAll(".race-summary");

  const handleLeft = () => {
    if (currentSum === 0) {
      currentSum = raceSum.length;
    } else {
      currentSum--;
    }

    raceSum.forEach((each, i) => {
      each.style.transition = `ease-in-out 1s`;
      each.style.transform = `translateX(-${
        each.clientWidth * (currentSum - 1)
      }px)`;
    });

    console.log(currentSum);
  };

  const handleRight = () => {
    if (currentSum >= raceSum.length) {
      currentSum = 0;
    } else {
      currentSum++;
    }

    raceSum.forEach((each, i) => {
      each.style.transition = `ease-in-out 1s`;
      each.style.transform = `translateX(-${each.clientWidth * currentSum}px)`;
    });

    console.log(currentSum);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await (await fetch(URL)).json();
        const loadData = response.response.body.items.item;
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
  }, [URL, localNum, currentSum]);

  return (
    <div className="relative h-full">
      <div className="fixed top-0 z-0 brightness-50">
        <img src="/img/main/main_1.jpg" alt="" width={3500} />
      </div>
      <div className="container mx-auto relative z-10 bg-white/75 border-2 border-sky-600  my-20 rounded-lg w-10/12">
        <div className="flex m-5 mb-0">
          <button
            onClick={() => {
              setLocalNum(1);
            }}
            className={`border-2 border-sky-500 bg-white cursor-pointer px-5 rounded-t-lg`}
          >
            서울
          </button>
          <button
            onClick={() => {
              setLocalNum(2);
            }}
            className={`border-2 border-sky-500 bg-white cursor-pointer px-5 rounded-t-lg`}
          >
            제주
          </button>
          <button
            onClick={() => {
              setLocalNum(3);
            }}
            className={`border-2 border-sky-500 bg-white cursor-pointer px-5 rounded-t-lg`}
          >
            부산
          </button>
        </div>
        {!isLoading ? (
          <div className="border-2 border-sky-400 bg-white p-5 m-5 mt-0 rounded-b-md rounded-r-md">
            <div className="flex items-center">
              <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2">
                *
              </span>
              <p>로딩중</p>
            </div>
          </div>
        ) : data === null ? (
          <div className="border-2 border-sky-400 bg-white p-5 m-5 mt-0 rounded-b-md rounded-r-md">
            <div className="flex items-center">
              <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2">
                *
              </span>
              <p>데이터 없음</p>
            </div>
          </div>
        ) : (
          <div className="border-2 border-sky-400 bg-white p-5 m-5 mt-0 rounded-b-md rounded-r-md">
            {data === undefined ? (
              <div>
                <div className="flex items-center">
                  <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2">
                    *
                  </span>
                  <span className="text-lg font-medium">
                    최근경기데이터가 업로드되지 않았거나 경기가 이뤄지지
                    않았습니다.
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col relative">
                  <div className="flex items-center mb-5">
                    <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2">
                      *
                    </span>
                    <h2>최근경주개요</h2>
                  </div>
                  <div className="flex justify-between absolute w-full top-20">
                    <button
                      type="click"
                      onClick={handleLeft}
                      className="relative -left-32 z-20 bg-gray-400/75 hover:bg-gray-500/75 w-20 h-96 rounded-l-lg"
                    >
                      &lt;
                    </button>
                    <button
                      type="click"
                      onClick={handleRight}
                      className="relative -right-32 z-20 bg-gray-400/75 hover:bg-gray-500/75 w-20 h-96 rounded-r-lg"
                    >
                      &gt;
                    </button>
                  </div>
                  <div className="grid grid-rows-1 grid-flow-col gap-5 overflow-hidden">
                    {data.map((item, i) => (
                      <div key={i}>
                        <div className="race-summary border-8 border-blue-300 rounded-md text-center w-96">
                          <div className="grid grid-rows-1 gap-2 justify-center">
                            <div className="border flex justify-around text-sm">
                              <p>
                                경마장 <br />
                                <span className="text-md font-semibold">
                                  {item.meet}
                                </span>
                              </p>
                              <p>
                                경주일자 <br />
                                <span className="text-md font-semibold">
                                  {item.rcDate}
                                </span>
                              </p>
                              <p>
                                경주번호 <br />
                                <span className="text-md font-semibold">
                                  {item.rcNo}
                                </span>
                              </p>
                              <p>
                                경주차수 <br />
                                <span className="text-md font-semibold">
                                  {item.ilsu}
                                </span>
                              </p>
                              <p>
                                경주거리 <br />
                                <span className="text-md font-semibold">
                                  {item.rcDist} M
                                </span>
                              </p>
                            </div>
                            <div className="border flex justify-around text-sm">
                              <p>
                                등급조건 <br />
                                <span className="text-md font-semibold">
                                  {item.rank}
                                </span>
                              </p>
                              <p>
                                부담구분 <br />
                                <span className="text-md font-semibold">
                                  {item.budam}
                                </span>
                              </p>
                              <p>
                                경주명 <br />
                                <span className="text-md font-semibold">
                                  {item.rcName}
                                </span>
                              </p>
                              <p>
                                함수율 <br />
                                <span className="text-md font-semibold">
                                  {item.waterRate} %
                                </span>
                              </p>
                              <p>
                                주로상태 <br />
                                <span className="text-md font-semibold">
                                  {item.track}
                                </span>
                              </p>
                              <p>
                                연령조건 <br />
                                <span className="text-md font-semibold">
                                  {item.ageCond}
                                </span>
                              </p>
                              <p>
                                날씨 <br />
                                <span className="text-md font-semibold">
                                  {item.weather}
                                </span>
                              </p>
                            </div>
                            <div className="border flex justify-around text-sm">
                              <p>
                                1착상금 <br />
                                <span className="text-md font-semibold">
                                  {String(item.chaksun1).slice(0, -4)} 만원
                                </span>
                              </p>
                              <p>
                                2착상금 <br />
                                <span className="text-md font-semibold">
                                  {String(item.chaksun2).slice(0, -4)} 만원
                                </span>
                              </p>
                              <p>
                                3착상금 <br />
                                <span className="text-md font-semibold">
                                  {String(item.chaksun3).slice(0, -4)} 만원
                                </span>
                              </p>
                              <p>
                                4착상금 <br />
                                <span className="text-md font-semibold">
                                  {String(item.chaksun4).slice(0, -4)} 만원
                                </span>
                              </p>
                              <p>
                                5착상금 <br />
                                <span className="text-md font-semibold">
                                  {String(item.chaksun5).slice(0, -4)} 만원
                                </span>
                              </p>
                            </div>
                            <div className="border flex justify-around text-sm">
                              <p>
                                1착부가상금 <br />
                                <span className="text-md font-semibold">
                                  {item.buga1}
                                </span>
                              </p>
                              <p>
                                2착부가상금 <br />
                                <span className="text-md font-semibold">
                                  {item.buga2}
                                </span>
                              </p>
                              <p>
                                3착부가상금 <br />
                                <span className="text-md font-semibold">
                                  {item.buga3}
                                </span>
                              </p>
                            </div>
                            <div className="border flex justify-around text-sm">
                              <p>
                                단승식 매출액 <br />
                                <span className="text-md font-semibold">
                                  {item.winAmt.toLocaleString()} 원
                                </span>
                              </p>
                              <p>
                                연승식 매출액 <br />
                                <span className="text-md font-semibold">
                                  {item.plcAmt.toLocaleString()} 원
                                </span>
                              </p>
                              <p>
                                복승식 매출액 <br />
                                <span className="text-md font-semibold">
                                  {item.qnlAmt.toLocaleString()} 원
                                </span>
                              </p>
                            </div>
                            <div className="border flex justify-around text-sm">
                              <p>
                                복연승식
                                <br />
                                매출액 <br />
                                <span className="text-md font-semibold">
                                  {item.exaAmt.toLocaleString()} 원
                                </span>
                              </p>
                              <p>
                                쌍승식
                                <br />
                                매출액 <br />
                                <span className="text-md font-semibold">
                                  {item.qplAmt.toLocaleString()} 원
                                </span>
                              </p>
                              <p>
                                삼복승식
                                <br />
                                매출액 <br />
                                <span className="text-md font-semibold">
                                  {item.tlaAmt.toLocaleString()} 원
                                </span>
                              </p>
                              <p>
                                삼쌍승식
                                <br />
                                매출액 <br />
                                <span className="text-md font-semibold">
                                  {item.triAmt.toLocaleString()} 원
                                </span>
                              </p>
                            </div>
                            <div className="border flex justify-around text-sm">
                              <p>
                                합계 매출액 <br />
                                <span className="text-md font-semibold">
                                  {item.totalAmt.toLocaleString()} 원
                                </span>
                              </p>
                            </div>
                            <div className="border flex justify-around text-sm">
                              <p>
                                레이팅하한조건 <br />
                                <span className="text-md font-semibold">
                                  {item.stRating}
                                </span>
                              </p>
                              <p>
                                레이팅상한조건 <br />
                                <span className="text-md font-semibold">
                                  {item.spRating}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
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
