import {useEffect, useRef, useState} from "react";
import RacingPlace from "../components/main/RacingPlace";

export default function MainPage() {
  const year = new Date().getFullYear();
  const raceSum = useRef(null);
  const [slide, set_slide] = useState(0);
  const [data, set_data] = useState(null);
  const [localNum, setLocalNum] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const END_POINT =
    "https://apis.data.go.kr/B551015/API3_1/raceInfo_1?serviceKey=";
  const API_KEY = import.meta.env.VITE_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=1&numOfRows=10&meet=${localNum}&rc_year=${year}&_type=json`;
  const URL = END_POINT + API_KEY + query;

  const handleLeft = () => {
    if (slide < 0) {
      set_slide(slide + raceSum.current.clientWidth);
    } else {
      set_slide(-(raceSum.current.clientWidth * (data.length - 1)));
    }
  };
  const handleRight = () => {
    if (slide > -raceSum.current.clientWidth * (data.length - 1)) {
      set_slide(slide - raceSum.current.clientWidth);
    } else {
      set_slide(0);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await (await fetch(URL)).json();
        console.log(response);
        const loadData = response.response.body.items.item;
        set_data(loadData);
      } catch (error) {
        console.log(error);
        setLoading(false);
        set_data(null);
      }
    };
    fetchData();
  }, [URL, localNum]);

  return (
    <div className="relative flex flex-col items-center bg-main_1 bg-no-repeat bg-cover h-full p-20">
      <div className="container sm:mx-auto relative z-10 bg-white/50 border border-white/10 mb-20  rounded-lg lg:w-full sm:w-10/12  ">
        <div className="flex md:flex-row flex-col mx-16 mt-5 mb-0">
          <button
            onClick={() => {
              setLocalNum(1);
            }}
            className={`text-lg whitespace-nowrap border  cursor-pointer px-5 py-1 lg:mr-1 md:mr-1 sm:mr-1 rounded-t-lg ${
              localNum === 1 ? "bg-blue-300" : "bg-white"
            }`}
          >
            서울
          </button>
          <button
            onClick={() => {
              setLocalNum(2);
            }}
            className={`text-lg whitespace-nowrap border  cursor-pointer px-5 py-1 lg:mr-1 md:mr-1 sm:mr-1 rounded-t-lg ${
              localNum === 2 ? "bg-blue-300" : "bg-white"
            }`}
          >
            제주
          </button>
          <button
            onClick={() => {
              setLocalNum(3);
            }}
            className={`text-lg whitespace-nowrap border  cursor-pointer px-5 py-1 lg:mr-1 md:mr-1 sm:mr-1 rounded-t-lg ${
              localNum === 3 ? "bg-blue-300" : "bg-white"
            }`}
          >
            부산
          </button>
        </div>
        {!isLoading ? (
          <div className=" bg-white p-5 m-5 mt-0 rounded-b-md md:rounded-r-md">
            <div className="flex items-center sm:text-2xl border border-x-0 border-t-0 border-blue-100 pb-3 sm:mx-16 mb-5 ">
              <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2"></span>
              <p>로딩중</p>
            </div>
          </div>
        ) : data === null ? (
          <div className=" bg-white p-5 m-5 mt-0 rounded-b-md md:rounded-r-md">
            <div className="flex items-center">
              <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2">
                *
              </span>
              <p>데이터 없음</p>
            </div>
          </div>
        ) : data === undefined ? (
          <div className=" bg-white p-5 m-5 mt-0 rounded-b-md md:rounded-r-md">
            <div className="flex items-center sm:text-2xl border border-x-0 border-t-0 border-blue-100 pb-3 sm:mx-16 mb-5 ">
              <span className="block w-2 h-4 bg-blue-400 text-blue-400 mr-2"></span>
              <p className="text-lg font-medium">
                최근경기데이터가 업로드되지 않았거나 경기가 이뤄지지 않았습니다.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col relative my-5">
            <div className="flex items-center sm:text-2xl border border-x-0 border-t-0 border-blue-100 pb-3 sm:mx-16 mb-5 ">
              <span className="block w-2 h-5 bg-blue-400 text-blue-400 mr-2"></span>
              <h2 className="font-bold">최근경주개요</h2>
            </div>
            <div className="flex justify-between absolute w-full top-56">
              <button
                type="button"
                onClick={handleLeft}
                className="relative -left-0 z-20 bg-gray-300/75 hover:bg-gray-400/75 w-16 h-[6rem] rounded-l-lg"
              >
                <img src="/img/icon/left-arrow.png" alt="left-arrow" />
              </button>
              <button
                type="button"
                onClick={handleRight}
                className="relative -right-0 z-20 bg-gray-300/75 hover:bg-gray-400/75 w-16 h-[6rem] rounded-r-lg"
              >
                <img src="/img/icon/right-arrow.png" alt="right-arrow" />
              </button>
            </div>
            <div className="grid grid-rows-1 grid-flow-row md:grid-flow-row lg:grid-flow-row xl:grid-flow-col gap-5 bg-white  overflow-hidden p-5 mx-16 rounded-md">
              {data.map((item, i) => (
                <div
                  key={i}
                  ref={raceSum}
                  className="border-8  border-blue-300 rounded-md text-center lg:w-[53.4rem]  md:w-[30rem] w-full "
                  style={{
                    transform: `translateX(${slide}px)`,
                    transition: "1s ease-in-out",
                  }}
                >
                  <div className="grid grid-rows-1 sm:grid-flow-col grid-flow-row items-center gap-5 m-3 ">
                    <div className="grid grid-cols-12  h-full">
                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200">
                        <div className="col-span-5 row-span-2 m-1 my-2">
                          <p className="text-sm">경주일자</p>
                          <span className="text-sm font-semibold">
                            {item.rcDate}
                          </span>
                        </div>
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">경마장</p>
                          <span className="text-sm font-semibold">
                            {item.meet}
                          </span>
                        </div>
                        <div className="col-span-3 m-1 my-2">
                          <p className="text-sm">경주번호</p>
                          <span className="text-sm font-semibold">
                            {item.rcNo}
                          </span>
                        </div>
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">경주차수</p>
                          <span className="text-sm font-semibold">
                            {item.ilsu}
                          </span>
                        </div>
                        <div className="col-span-3 m-1 my-2">
                          <p className="text-sm">경주거리</p>
                          <span className="text-sm font-semibold">
                            {item.rcDist} M
                          </span>
                        </div>
                      </div>

                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200">
                        <div className="col-span-3 m-1 my-2">
                          <p className="text-sm">등급조건</p>
                          <span className="text-sm font-semibold">
                            {item.rank}
                          </span>
                        </div>
                        <div className="col-span-3 m-1 my-2">
                          <p className="text-sm">부담구분</p>
                          <span className="text-sm font-semibold">
                            {item.budam}
                          </span>
                        </div>
                        <div className="col-span-3 m-1 my-2">
                          <p className="text-sm">연령조건</p>
                          <span className="text-sm font-semibold">
                            {item.ageCond}
                          </span>
                        </div>
                        <div className="col-span-3 m-1 my-2">
                          <p className="text-sm">경주명</p>
                          <span className="text-sm font-semibold">
                            {item.rcName}
                          </span>
                        </div>
                      </div>

                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200">
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">주로상태</p>
                          <span className="text-sm font-semibold">
                            {item.track === undefined
                              ? "업데이트중"
                              : item.track}
                          </span>
                        </div>
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">함수율</p>
                          <span className="text-sm font-semibold">
                            {item.waterRate} %
                          </span>
                        </div>
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">날씨</p>
                          <span className="text-sm font-semibold">
                            {item.weather === undefined
                              ? "업데이트중"
                              : item.weather}
                          </span>
                        </div>
                      </div>

                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200">
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">1착상금</p>
                          <span className="text-sm font-semibold">
                            {String(item.chaksun1).slice(0, -4)} 만원
                          </span>
                        </div>
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">2착상금</p>
                          <span className="text-sm font-semibold">
                            {String(item.chaksun2).slice(0, -4)} 만원
                          </span>
                        </div>
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">3착상금</p>
                          <span className="text-sm font-semibold">
                            {String(item.chaksun3).slice(0, -4)} 만원
                          </span>
                        </div>
                      </div>

                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200">
                        <div className="col-span-6 m-1 my-2">
                          <p className="text-sm">4착상금</p>
                          <span className="text-sm font-semibold">
                            {String(item.chaksun4).slice(0, -4)} 만원
                          </span>
                        </div>
                        <div className="col-span-6 m-1 my-2">
                          <p className="text-sm">5착상금</p>
                          <span className="text-sm font-semibold">
                            {String(item.chaksun5).slice(0, -4)} 만원
                          </span>
                        </div>
                      </div>

                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-blue-200">
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">1착부가상금</p>
                          <span className="text-sm font-semibold">
                            {item.buga1}
                          </span>
                        </div>
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">2착부가상금</p>
                          <span className="text-sm font-semibold">
                            {item.buga2}
                          </span>
                        </div>
                        <div className="col-span-4 m-1 my-2">
                          <p className="text-sm">3착부가상금</p>
                          <span className="text-sm font-semibold">
                            {item.buga3}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 items-center h-full">
                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200 h-full">
                        <div className="col-span-6">
                          <p className="text-xs">단승식 매출액 </p>
                          <span className="text-sm font-semibold">
                            {item && item.winAmt !== undefined
                              ? item.winAmt.toLocaleString("ko-KR")
                              : "0"}
                            원
                          </span>
                        </div>
                        <div className="col-span-6">
                          <p className="text-xs">연승식 매출액 </p>
                          <span className="text-sm font-semibold">
                            {item && item.plcAmt !== undefined
                              ? item.plcAmt.toLocaleString("ko-KR")
                              : "0"}
                            원
                          </span>
                        </div>
                      </div>
                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200 h-full">
                        <div className="col-span-6">
                          <p className="text-xs">복승식 매출액 </p>
                          <span className="text-sm font-semibold">
                            {item && item.qnlAmt !== undefined
                              ? item.qnlAmt.toLocaleString("ko-KR")
                              : "0"}
                            원
                          </span>
                        </div>
                        <div className="col-span-6">
                          <p className="text-xs">복연승식 매출액</p>
                          <span className="text-sm font-semibold">
                            {item && item.exaAmt !== undefined
                              ? item.exaAmt.toLocaleString("ko-KR")
                              : "0"}
                            원
                          </span>
                        </div>
                      </div>
                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200 h-full">
                        <div className="col-span-6">
                          <p className="text-xs">쌍승식 매출액</p>
                          <span className="text-sm font-semibold">
                            {item && item.qplAmt !== undefined
                              ? item.qplAmt.toLocaleString("ko-KR")
                              : "0"}
                            원
                          </span>
                        </div>
                        <div className="col-span-6">
                          <p className="text-xs">삼복승식 매출액</p>
                          <span className="text-sm font-semibold">
                            {item && item.tlaAmt !== undefined
                              ? item.tlaAmt.toLocaleString("ko-KR")
                              : "0"}
                            원
                          </span>
                        </div>
                      </div>
                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200 h-full">
                        <div className="col-span-6">
                          <p className="text-xs">삼쌍승식 매출액</p>
                          <span className="text-sm font-semibold">
                            {item && item.triAmt !== undefined
                              ? item.triAmt.toLocaleString("ko-KR")
                              : "0"}
                            원
                          </span>
                        </div>
                        <div className="col-span-6">
                          <p className="text-xs">합계 매출액</p>
                          <span className="text-sm font-semibold">
                            {item && item.totalAmt !== undefined
                              ? item.totalAmt.toLocaleString("ko-KR")
                              : "0"}
                            원
                          </span>
                        </div>
                      </div>
                      <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-blue-200 h-full">
                        <div className="col-span-6">
                          <p className="text-xs">레이팅하한조건</p>
                          <span className="text-sm font-semibold">
                            {item.stRating}
                          </span>
                        </div>
                        <div className="col-span-6">
                          <p className="text-xs">레이팅상한조건</p>
                          <span className="text-sm font-semibold">
                            {item.spRating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="container mx-auto relative z-10">
        <RacingPlace />
      </div>
    </div>
  );
}
