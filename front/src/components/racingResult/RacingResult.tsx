import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {BarChart, CartesianGrid, XAxis, Tooltip, Legend, Bar} from "recharts";
export default function RacingResult() {
  const location = useLocation();
  const rcCnum = location.state[0];
  const dateNum = location.state[1];
  const lcNum = location.state[2];
  const [slide, set_slide] = useState(0);
  const raceSum = useRef(null);
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [dLeng, setDleng] = useState();
  const RESULT_END_POINT =
    "https://apis.data.go.kr/B551015/API214_1/RaceDetailResult_1?serviceKey=";
  // const RECORD_END_POINT =
  //   "https://apis.data.go.kr/B551015/API4_2/raceResult_2?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=1&numOfRows=50&meet=${lcNum}&rc_date=${dateNum}&rc_no=${rcCnum}&_type=json`;
  const URL = RESULT_END_POINT + API_KEY + query;

  const handleLeft = () => {
    if (slide < 0) {
      set_slide(slide + raceSum.current.clientWidth);
    } else {
      set_slide(-(raceSum.current.clientWidth * (result.length - 1)));
    }
  };
  const handleRight = () => {
    if (slide > -raceSum.current.clientWidth * (result.length - 1)) {
      set_slide(slide - raceSum.current.clientWidth);
    } else {
      set_slide(0);
    }
  };

  useEffect(() => {
    const fetchRCResult = async () => {
      setLoading(false);
      try {
        const response = await (await fetch(URL)).json();
        const data = response.response.body.items.item;
        setResult(data);
        setDleng(data.length);

        setLoading(true);
      } catch (error) {
        setResult(null);
      } finally {
        setLoading(true);
      }
    };
    fetchRCResult();
  }, [URL, location]);

  const dataChacksun = [];
  const dataBuga = [];
  for (let i = 0; i < dLeng / dLeng; i++) {
    dataChacksun.push(
      {상금: result[i].chaksun1, name: "1착상금", fill: "#cf6a87"},
      {상금: result[i].chaksun2, name: "2착상금", fill: "#e77f67"},
      {상금: result[i].chaksun3, name: "3착상금", fill: "#778beb"},
      {상금: result[i].chaksun4, name: "4착상금", fill: "#f7d794"},
      {상금: result[i].chaksun5, name: "5착상금", fill: "#f3a683"}
    );
  }
  for (let i = 0; i < dLeng / dLeng; i++) {
    dataBuga.push(
      {부가상금: result[i].buga1, name: "부가상금1", fill: "#ea8685"},
      {부가상금: result[i].buga2, name: "부가상금2", fill: "#63cdda"},
      {부가상금: result[i].buga3, name: "부가상금3", fill: "#f8a5c2"}
    );
  }

  return (
    <div className="relative container mx-auto bg-white p-20 my-20 rounded-md">
      <div className="flex items-center my-5">
        <span className="block bg-blue-300 w-2 h-6 mr-2 "></span>
        <h2 className="text-2xl font-bold">경기 결과</h2>
      </div>
      <div className="absolute top-1/2 flex justify-between w-full">
        <button
          type="click"
          onClick={handleLeft}
          className="relative -left-20 z-20 bg-gray-300/75 hover:bg-gray-400/75 w-16 h-[6rem] rounded-l-lg"
        >
          <img src="/img/icon/left-arrow.png" alt="left-arrow" />
        </button>
        <button
          type="click"
          onClick={handleRight}
          className="relative right-20 z-20 bg-gray-300/75 hover:bg-gray-400/75 w-16 h-[6rem] rounded-r-lg"
        >
          <img src="/img/icon/right-arrow.png" alt="right-arrow" />
        </button>
      </div>
      {!isLoading ? (
        <p>데이터를 불러오고 있습니다.</p>
      ) : result ? (
        <div className=" grid grid-rows-1 grid-flow-col gap-5 overflow-hidden">
          {result.map((item, i) => (
            <div
              key={i}
              ref={raceSum}
              className="grid grid-cols-1 border-2 border-blue-100 boder rounded-md w-[735px]"
              style={{
                transform: `translateX(${slide}px)`,
                transition: "1s ease-in-out",
              }}
            >
              <div className="grid grid-cols-1">
                <div className="flex justify-around items-top border-2 border-t-0 border-x-0 border-b-blue-100 mt-5">
                  <div className="mt-4">
                    <span className="text-sm font-medium mr-3">마명</span>
                    <h2 className="text-md font-bold">
                      no.{item.chulNo}
                      <br />
                      {item.hrName}
                    </h2>
                  </div>
                  <div>
                    <div>
                      <span className="text-sm font-medium">마번</span>
                      <h2 className="text-xl font-bold">{item.hrNo}</h2>
                    </div>
                    <div className="mt-3">
                      <span className="text-sm font-medium">순위</span>
                      <h2 className=" text-4xl text-end font-extrabold mb-3">
                        {item.ord}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1  text-center text-sm border-2 border-t-0 border-x-0 border-b-blue-100 ">
                  <div className="flex justify-around items-center">
                    <div>
                      <h4>생년월일</h4>
                      <p>{item.birthday}</p>
                    </div>
                    <div>
                      <h4>나이</h4>
                      <p>{item.age} 살</p>
                    </div>
                    <div>
                      <h4>성별</h4>
                      <p>{item.sex}</p>
                    </div>
                    <div>
                      <h4>등급</h4>
                      <p>{item.rank}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-around border-2 border-t-0 border-r-0 border-l-blue-100 border-b-blue-100">
                <div className="grid grid-cols-1 text-center text-xs border-2 border-t-0 border-x-0 border-b-blue-100 p-2">
                  <div className="grid grid-cols-4 mb-2">
                    <div>
                      <h4>경주일수</h4>
                      <p>{item.ilsu}</p>
                    </div>
                    <div>
                      <h4>경마장명</h4>
                      <p>{item.meet}</p>
                    </div>
                    <div>
                      <h4>경주일자</h4>
                      <p>{item.rcDate}</p>
                    </div>
                    <div>
                      <h4>경주요일</h4>
                      <p>{item.rcDay}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4">
                    <div>
                      <h4>날씨</h4>
                      <p>{item.weather}</p>
                    </div>
                    <div>
                      <h4>경주명</h4>
                      <p>{item.rcName}</p>
                    </div>
                    <div>
                      <h4>연령조건</h4>
                      <p>{item.ageCond}</p>
                    </div>
                    <div>
                      <h4>부담구분</h4>
                      <p>{item.budam}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 text-center text-xs p-2">
                  <div className="grid grid-cols-4 mb-2">
                    <div>
                      <h4>경주거리</h4>
                      <p>{item.rcDist} M</p>
                    </div>
                    <div>
                      <h4>트랙 상태</h4>
                      <p>{item.track}</p>
                    </div>
                    <div>
                      <h4>레이팅</h4>
                      <p>{item.rating}</p>
                    </div>
                    <div>
                      <h4>경주 번호</h4>
                      <p>{item.rcNo}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4">
                    <div>
                      <h4>경주기록</h4>
                      <p>{item.rcTime} 초</p>
                    </div>
                    <div>
                      <h4>장구내역</h4>
                      <p>{item.hrTool}</p>
                    </div>
                    <div>
                      <h4>기수명</h4>
                      <p>{item.jkName}</p>
                    </div>
                    <div>
                      <h4>기수번호</h4>
                      <p>{item.jkNo}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-wrap justify-around col-span-12 border-2 border-t-0 border-x-0 border-b-blue-100 p-5">
                <BarChart width={300} height={250} data={dataChacksun}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="상금" fill="fill" />
                </BarChart>
                <BarChart width={250} height={250} data={dataBuga}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="부가상금" fill="fill" />
                </BarChart>
              </div>
              <div className=" col-span-12 border-2 border-t-0 border-x-0 border-b-blue-100  text-sm p-3">
                <div className="grid grid-cols-3 border-2 border-t-0 border-x-0 border-b-blue-100 text-center pb-3 mb-2">
                  <div className="mb-2">
                    <h4> 경주조건</h4>
                    <p>{item.prizeCond}</p>
                  </div>
                  <div className="mb-2">
                    <h4> 착차</h4>
                    <p>{item.diffUnit}</p>
                  </div>
                  <div className="mb-2">
                    <h4> 순위비고</h4>
                    <p>{item.ordBigo}</p>
                  </div>
                  <div>
                    <h4> 복승식 배당율</h4>
                    <p>{item.plcOdds}</p>
                  </div>
                  <div>
                    <h4> 단승식배당율</h4>
                    <p>{item.winOdds}</p>
                  </div>
                  <div>
                    <h4> 승군순위</h4>
                    <p>{item.rankRise}</p>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-center mt-2">
                  <div className="mb-3">
                    <h4>마주명</h4>
                    <p>{item.owName}</p>
                  </div>
                  <div className="mb-3">
                    <h4>마주번호</h4>
                    <p>{item.owNo}</p>
                  </div>
                  <div className="mb-3">
                    <h4>조교사명</h4>
                    <p>{item.trName}</p>
                  </div>
                  <div className="mb-3">
                    <h4>조교사번호</h4>
                    <p>{item.trNo}</p>
                  </div>
                  <div className="mb-3">
                    <h4>마필생산국가</h4>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <h4>부담중량</h4>
                    <p>{item.wgBudam}</p>
                  </div>
                  <div>
                    <h4>
                      부담중량
                      <br />
                      증량신청표기
                    </h4>
                    <p>{item.wgBudamBigo}</p>
                  </div>
                  <div>
                    <h4>마체감량</h4>
                    <p>{item.wgHr}</p>
                  </div>
                  <div>
                    <h4>기수감량</h4>
                    <p>{item.wgJk}</p>
                  </div>
                </div>
              </div>
              {item.meet === "서울" ? (
                <div className=" col-span-12 border-2  border-t-0 border-x-0 border-b-blue-100 text-sm text-center  p-3">
                  <div className="grid grid-cols-4  border-2 border-t-0 border-x-0 border-b-blue-100 mb-2 ">
                    <div className="mb-2">
                      <h4>서울1코너통과누적기록</h4>
                      <p>{item.se_1cAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>서울2코너통과누적기록</h4>
                      <p>{item.se_2cAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>서울3코너통과누적기록</h4>
                      <p>{item.se_3cAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>서울4코너통과누적기록</h4>
                      <p>{item.se_4cAccTime}</p>
                    </div>
                    <div>
                      <h4>서울S1F통과누적기록</h4>
                      <p>{item.seS1fAccTime}</p>
                    </div>
                    <div>
                      <h4>서울G1F통과누적기록</h4>
                      <p>{item.seG1fAccTime}</p>
                    </div>
                    <div>
                      <h4>서울G3F통과누적기록</h4>
                      <p>{item.seG3fAccTime}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 mt-2">
                    <div>
                      <h4>서울,제주G1F구간통과순위(서울,제주공통)</h4>
                      <p>{item.sjG1fOrd}</p>
                    </div>
                    <div>
                      <h4>서울,제주G3F구간통과순위(서울,제주공통)</h4>
                      <p>{item.sjG3fOrd}</p>
                    </div>
                    <div>
                      <h4>서울,제주S1F구간통과순위(서울,제주공통)</h4>
                      <p>{item.sjS1fOrd}</p>
                    </div>
                    <div>
                      <h4>서울,제주1코너구간통과순위(서울,제주공통)</h4>
                      <p>{item.sj_1cOrd}</p>
                    </div>
                    <div>
                      <h4>서울,제주2코너구간통과순위(서울,제주공통)</h4>
                      <p>{item.sj_2cOrd}</p>
                    </div>
                    <div>
                      <h4>서울,제주3코너구간통과순위(서울,제주공통)</h4>
                      <p>{item.sj_3cOrd}</p>
                    </div>
                    <div>
                      <h4>서울,제주4코너구간통과순위(서울,제주공통)</h4>
                      <p>{item.sj_4cOrd}</p>
                    </div>
                  </div>
                </div>
              ) : item.meet === "부경" ? (
                <div className=" col-span-12 text-center text-sm border-2 border-t-0 border-x-0 border-b-blue-100 p-3">
                  <div className="grid grid-cols-4  border-2 border-t-0 border-x-0 border-b-blue-100 pb-2 mb-2">
                    <div className="mb-2">
                      <h4>부경1F-G통과기록</h4>
                      <p>{item.bu_1fGTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경2F-G통과기록</h4>
                      <p>{item.bu_2fGTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경3F-G통과기록</h4>
                      <p>{item.bu_3fGTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경4-2F통과기록</h4>
                      <p>{item.bu_4_2fTime}</p>
                    </div>
                    <div>
                      <h4>부경6-4F통과기록</h4>
                      <p>{item.bu_6_4fTime}</p>
                    </div>
                    <div>
                      <h4>부경8-6F통과기록</h4>
                      <p>{item.bu_8_6fTime}</p>
                    </div>
                    <div>
                      <h4>부경10-8F통과기록</h4>
                      <p>{item.bu_10_8fTime}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5">
                    <div className="mb-2">
                      <h4>부경G1F통과순위</h4>
                      <p>{item.buG1fOrd}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G1F통과누적기록</h4>
                      <p>{item.buG1fAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G2F통과순위</h4>
                      <p>{item.buG2fOrd}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G2F통과누적기록</h4>
                      <p>{item.buG2fAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G3F통과순위</h4>
                      <p>{item.buG3fOrd}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G3F통과누적기록</h4>
                      <p>{item.buG3fAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G4F통과순위</h4>
                      <p>{item.buG4fOrd}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G4F통과누적기록</h4>
                      <p>{item.buG4fAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G6F통과순위</h4>
                      <p>{item.buG6fOrd}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G6F통과누적기록</h4>
                      <p>{item.buG6fAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G8F통과순위</h4>
                      <p>{item.buG8fOrd}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경G8F통과누적기록</h4>
                      <p>{item.buG8fAccTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경S1F통과순위</h4>
                      <p>{item.buS1fOrd}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경S1F통과기록</h4>
                      <p>{item.buS1fTime}</p>
                    </div>
                    <div className="mb-2">
                      <h4>부경S1F통과누적기록</h4>
                      <p>{item.buS1fAccTime}</p>
                    </div>
                  </div>
                </div>
              ) : item.meet === "제주" ? (
                <div className=" col-span-12 text-center text-sm border-2 border-t-0 border-x-0 border-b-blue-100 p-3">
                  <div className="grid grid-cols-4  mb-2">
                    <div>
                      <h4>제주1코너통과기록</h4>
                      <p>{item.je_1cTime}</p>
                    </div>
                    <div>
                      <h4>제주2코너통과기록</h4>
                      <p>{item.je_2cTime}</p>
                    </div>
                    <div>
                      <h4>제주3코너통과기록</h4>
                      <p>{item.je_3cTime}</p>
                    </div>
                    <div>
                      <h4>제주4코너통과기록</h4>
                      <p>{item.je_4cTime}</p>
                    </div>
                    <div>
                      <h4>제주G-1F통과기록</h4>
                      <p>{item.jeG1fTime}</p>
                    </div>
                    <div>
                      <h4>제주G-3F통과기록</h4>
                      <p>{item.jeG3fTime}</p>
                    </div>
                    <div>
                      <h4>제주S-1F통과기록</h4>
                      <p>{item.jeS1fTime}</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p>
          아직 진행되지 않는 경기이거나 데이터를 불러오는데 실패하였습니다.
          새로고침 해 주세요.
        </p>
      )}
    </div>
  );
}
