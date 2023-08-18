import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

export default function MainPage() {
  const year = new Date().getFullYear();
  const raceSum = useRef(null);
  const [slide, set_slide] = useState(0);
  const [data, set_data] = useState(null);
  const [localNum, setLocalNum] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const END_POINT =
    "https://apis.data.go.kr/B551015/API3_1/raceInfo_1?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
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
            className={`text-lg whitespace-nowrap border bg-white cursor-pointer px-5 py-1 lg:mr-1 md:mr-1 sm:mr-1 rounded-t-lg`}
          >
            서울
          </button>
          <button
            onClick={() => {
              setLocalNum(2);
            }}
            className={`text-lg whitespace-nowrap border bg-white cursor-pointer px-5 py-1 lg:mr-1 md:mr-1 sm:mr-1 rounded-t-lg`}
          >
            제주
          </button>
          <button
            onClick={() => {
              setLocalNum(3);
            }}
            className={`text-lg whitespace-nowrap border bg-white cursor-pointer px-5 py-1 lg:mr-1 md:mr-1 sm:mr-1 rounded-t-lg`}
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
          <div>
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
              <div className="grid grid-rows-1 grid-flow-col gap-5 bg-white  overflow-hidden p-5 mx-16 rounded-md">
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
                              {item.winAmt.toLocaleString()} 원
                            </span>
                          </div>
                          <div className="col-span-6">
                            <p className="text-xs">연승식 매출액 </p>
                            <span className="text-sm font-semibold">
                              {item.plcAmt.toLocaleString()} 원
                            </span>
                          </div>
                        </div>
                        <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200 h-full">
                          <div className="col-span-6">
                            <p className="text-xs">복승식 매출액 </p>
                            <span className="text-sm font-semibold">
                              {item.qnlAmt.toLocaleString()} 원
                            </span>
                          </div>
                          <div className="col-span-6">
                            <p className="text-xs">복연승식 매출액</p>
                            <span className="text-sm font-semibold">
                              {item.exaAmt.toLocaleString()} 원
                            </span>
                          </div>
                        </div>
                        <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200 h-full">
                          <div className="col-span-6">
                            <p className="text-xs">쌍승식 매출액</p>
                            <span className="text-sm font-semibold">
                              {item.qplAmt.toLocaleString()} 원
                            </span>
                          </div>
                          <div className="col-span-6">
                            <p className="text-xs">삼복승식 매출액</p>
                            <span className="text-sm font-semibold">
                              {item.tlaAmt.toLocaleString()} 원
                            </span>
                          </div>
                        </div>
                        <div className="col-span-12 grid grid-cols-12 items-center border border-x-0 border-b-0 border-blue-200 h-full">
                          <div className="col-span-6">
                            <p className="text-xs">삼쌍승식 매출액</p>
                            <span className="text-sm font-semibold">
                              {item.triAmt.toLocaleString()} 원
                            </span>
                          </div>
                          <div className="col-span-6">
                            <p className="text-xs">합계 매출액</p>
                            <span className="text-sm font-semibold">
                              {item.totalAmt.toLocaleString()} 원
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
          </div>
        )}
      </div>
      <div className="container mx-auto relative z-10">
        <ul className="flex justify-around lg:flex-row md:flex-row sm:flex-col sm:items-center flex-col">
          <li className=" flex flex-col items-center border border-blue-300 bg-white lg:w-80 md:w-72 sm:w-96 w-36 sm:m-2 m-2 mx-auto p-5 rounded-lg">
            <h2 className="lg:text-2xl md:text-base sm:text-sm text-xs lg:font-bold md:font-normal sm:font-light lg:my-5 md:my-3 sm:my-1 my-1">
              서울경마
            </h2>
            <div className="park-card lg:w-44 md:w-36 sm:w-28 w-20 overflow-hidden rounded-full lg:my-5 md:my-3 sm:my-1">
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
          <li className=" flex flex-col items-center border border-blue-300 bg-white lg:w-80 md:w-72 sm:w-96 w-36 sm:m-2 m-2 mx-auto p-5 rounded-lg">
            <h2 className="lg:text-2xl md:text-base sm:text-sm text-xs lg:font-bold md:font-normal sm:font-light lg:my-5 md:my-3 sm:my-1 my-1">
              제주경마
            </h2>
            <div className="park-card lg:w-44 md:w-36 sm:w-28 w-20 overflow-hidden rounded-full lg:my-5 md:my-3 sm:my-1">
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
          <li className=" flex flex-col items-center border border-blue-300 bg-white lg:w-80 md:w-72 sm:w-96 w-36 sm:m-2 m-2 mx-auto p-5 rounded-lg">
            <h2 className="lg:text-2xl md:text-base sm:text-sm text-xs lg:font-bold md:font-normal sm:font-light lg:my-5 md:my-3 sm:my-1 my-1">
              부산경남경마
            </h2>
            <div className="park-card lg:w-44 md:w-36 sm:w-28 w-20 overflow-hidden rounded-full lg:my-5 md:my-3 sm:my-1">
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
