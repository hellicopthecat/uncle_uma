import {useLocation, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import MoreAbout from "./MoreAbout";

export default function AboutHorse() {
  let location = useLocation();
  const {id} = useParams();
  const [data, setData] = useState();
  const [recent, setRecent] = useState(false);
  const BASE_URL =
    "https://apis.data.go.kr/B551015/API15_2/raceHorseResult_2?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=1&numOfRows=10&hr_no=${id}&_type=json`;
  const fetchUrl = `${BASE_URL}${API_KEY}${query}`;

  useEffect(() => {
    const fetachData = async () => {
      setRecent(false);
      try {
        const response = await (await fetch(fetchUrl)).json();
        setData(response.response.body.items.item);
        setRecent(true);
      } catch (error) {
        setData(null);
        setRecent(false);
      } finally {
        setRecent(true);
      }
    };
    fetachData();
  }, [fetchUrl]);

  const aboutHorse = {
    hrName: location.state.hrName, //말이름
    hrNo: location.state.hrNo, //말번호
    birthday: location.state.birthday, //말생일
    localName: location.state.name, //출생지
    sex: location.state.sex, //성별
    rank: location.state.rank, //말 등급
    meet: location.state.meet, //시행경마장명
    chaksunT: location.state.chaksunT, //통산착순상금
    hrLastAmt: location.state.hrLastAmt, //말도입가
    faHrName: location.state.faHrName, //부마명 아빠말
    faHrNo: location.state.faHrNo, //부마번
    moHrName: location.state.moHrName, // 모마명 엄마말
    moHrNo: location.state.moHrNo, // 모마번
    ord1CntT: location.state.ord1CntT, // 통산1착회수
    ord1CntY: location.state.ord1CntY, // 최근 1년 1착회수
    ord2CntT: location.state.ord2CntT, //통산 2착회수
    ord2CntY: location.state.ord2CntY, // 최근 1년 2착회수
    ord3CntT: location.state.ord3CntT, //통산 3착회수
    ord3CntY: location.state.ord3CntY, // 최근 1년 2착회수
    owName: location.state.owName, //마주명
    owNo: location.state.owNo, //마주번호
    rating: location.state.rating, //레이팅 레이팅이란 경주에 출전하여 보여준 경주마의 경주능력에 따라 경주마의 능력을 수치화한 경주마 능력평가 지수로 이해할 수 있습니다. 경마에 있어서 레이팅은 경주마가 그간 거둔 경주성적에 따라 일반적으로 1∼140 구간에서 결정되며, 상위등급 경주마일수록 레이팅이 높습니다.
    rcCntT: location.state.rcCntT, //통산총출주회수
    rcCntY: location.state.rcCntY, //최근1년총출주회수
    trName: location.state.trName, //조교사명 경주를 할 수 있도록 경주마를 훈련시키고 마필의 경주능력을 향상시킬 수 있도록 사육·관리한다.
    trNo: location.state.trNo, //조교사번호
  };
  const ratingData = [
    {
      data: aboutHorse.rating,
      name: "레이팅",
      hrName: aboutHorse.hrName,
    },
  ];

  return (
    <div className="bg-blue-50 p-5">
      <div className="bg-white p-5 rounded-lg">
        <h1 className="text-3xl font-bold mb-5">경주마 상세 정보</h1>
        <div className="flex justify-around mb-10">
          <ul>
            <li className="mb-5">
              <p className="text-lg font-semibold mb-5">말 이름</p>
              <h2 className="text-6xl font-bold">{aboutHorse.hrName}</h2>
            </li>
            <li className="mb-5">
              <p>말 번호</p>
              <h3 className="text-3xl font-bold">{aboutHorse.hrNo}</h3>
            </li>
          </ul>
          <div className="flex  ml-5">
            <div className="flex flex-col ml-5">
              <p className="text-2xl font-bold mb-3">레이팅</p>
              <p className="text-5xl ">{aboutHorse.rating}</p>
              <div className="flex mt-5">
                <small className="w-60">
                  레이팅이란 경주에 출전하여 보여준 경주마의 경주능력에 따라
                  경주마의 능력을 수치화한 경주마 능력평가 지수로 이해할 수
                  있습니다. 경마에 있어서 레이팅은 경주마가 그간 거둔 경주성적에
                  따라 일반적으로 1∼140 구간에서 결정되며, 상위등급 경주마일수록
                  레이팅이 높습니다.
                </small>
              </div>
            </div>
            <BarChart width={200} height={250} data={ratingData}>
              <CartesianGrid strokeDasharray="0 140" />
              <XAxis dataKey="hrName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="data" fill="#8884d8" />
            </BarChart>
          </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-2 gap-5 text-center outline outline-blue-100 rounded-2xl px-10 py-5 ">
          <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
            생년일
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
            출생지
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
            성별
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
            말 등급
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
            시행 경마장
          </p>
          <p className="text-xl font-semibold">{aboutHorse.birthday}</p>
          <p className="text-xl font-semibold">{aboutHorse.localName}</p>
          <p className="text-xl font-semibold">{aboutHorse.sex}</p>
          <p className="text-xl font-semibold">{aboutHorse.rank} 등급</p>
          <p className="text-xl font-semibold">{aboutHorse.meet} 경마장</p>
        </div>

        <div className="outline outline-blue-100 rounded-lg p-5 mt-5">
          <h1 className="text-2xl font-medium mb-5">
            {aboutHorse.hrName} 경주 성적 정보
          </h1>
          {!recent ? (
            <p>최근 말의 정보를 불러오고 있습니다.</p>
          ) : recent ? (
            <MoreAbout data={data} recent={recent} />
          ) : (
            <p>오류가 발생했습니다 새로고침해주세요</p>
          )}
        </div>
        <div className="grid grid-row-4 text-center outline outline-blue-100 rounded-2xl p-5 my-5">
          <div className="grid grid-cols-2  gap-5 my-5">
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              통산착순상금
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              말도입가
            </p>
            <p className="text-xl font-semibold">{aboutHorse.chaksunT}</p>
            <p className="text-xl font-semibold">{aboutHorse.hrLastAmt}</p>
          </div>

          <div className="grid grid-cols-8 gap-2 border-2 border-x-0 border-b-0 border-t-sky-900/50 text-xs pt-5 my-5">
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              통산 1착회수
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              최근 1년 1착회수
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              통산 2착회수
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              최근 1년 2착회수
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              통산 3착회수
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              최근 1년 3착회수
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              통산총출주회수
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              최근 1년 총 출주 회수
            </p>
            <p className="text-xl font-semibold">{aboutHorse.ord1CntT} 회</p>
            <p className="text-xl font-semibold">{aboutHorse.ord1CntY} 회</p>
            <p className="text-xl font-semibold">{aboutHorse.ord2CntT} 회</p>
            <p className="text-xl font-semibold">{aboutHorse.ord2CntY} 회</p>
            <p className="text-xl font-semibold">{aboutHorse.ord3CntT} 회</p>
            <p className="text-xl font-semibold">{aboutHorse.ord3CntY} 회</p>
            <p className="text-xl font-semibold">{aboutHorse.rcCntT} 회</p>
            <p className="text-xl font-semibold">{aboutHorse.rcCntY} 회</p>
          </div>
          <div className="grid grid-cols-4 gap-5 border-2 border-x-0 border-b-0 border-t-sky-900/50 pt-5 my-5">
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              부마명 (아버지 말)
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              부마번
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              모마명
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              모마번
            </p>
            <p className="text-xl font-semibold">{aboutHorse.faHrName}</p>
            <p className="text-xl font-semibold">{aboutHorse.faHrNo}</p>
            <p className="text-xl font-semibold">{aboutHorse.moHrName}</p>
            <p className="text-xl font-semibold">{aboutHorse.moHrNo}</p>
          </div>
          <div className="grid grid-cols-4 gap-5 border-2 border-x-0 border-b-0 border-t-sky-900/50 pt-5 my-5">
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              마주명
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              마주번호
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              조교사명
            </p>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-300 pb-5">
              조교사번호
            </p>
            <p className="text-xl font-semibold">{aboutHorse.owName}</p>
            <p className="text-xl font-semibold">{aboutHorse.owNo}</p>
            <p className="text-xl font-semibold">{aboutHorse.trName}</p>
            <p className="text-xl font-semibold">{aboutHorse.trNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
