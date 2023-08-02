import {useEffect} from "react";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Bar,
} from "recharts";
export default function MoreAbout(props) {
  const {data, recent} = props;
  useEffect(() => {}, [data, recent]);

  const winRateData = [
    {name: "최근 1년 승률", 승률: data.winRateY},
    {name: "최근 1년 복승률", 승률: data.qnlRateY},
    {name: "통산 승률", 승률: data.winRateT},
    {name: "통산 복승률", 승률: data.qnlRateT},
  ];

  const rcCount = [
    {name: "최근 1년 총 출주회수", 출주회수: data.rcCntY},
    {name: "통산 총 출주회수", 출주회수: data.rcCntT},
  ];

  const prizeData = [
    {name: "최근 1년 착순 상금", 상금: data.chaksunY},
    {name: "근 6개월 수득 상금", 상금: data.chaksun_6},
  ];

  return (
    <div>
      <div className="">
        <div className="mb-5">
          <p className="text-xl font-extrabold">현재 말나이 {data.age} 살</p>
          <small>데뷔일 {data.debut}</small>
        </div>
        <div className="grid grid-cols-11 gap-5 text-center text-sm mb-10">
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주일자
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주번호
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주명
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주등급
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주거리
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주순위
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주레이팅
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주마체중
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주부담중량
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주부담종류
          </p>
          <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
            최근경주기록
          </p>
          <p className="text-md font-bold ">{data.recentRcDate}</p>
          <p className="text-md font-bold ">{data.recentRcNo} 번</p>
          <p className="text-md font-bold ">{data.recentRcName} 경기</p>
          <p className="text-md font-bold ">{data.recentRank}</p>
          <p className="text-md font-bold ">{data.recentRcDist} M</p>
          <p className="text-md font-bold ">{data.recentOrd} 위</p>
          <p className="text-md font-bold ">{data.recentRating}</p>
          <p className="text-md font-bold ">{data.recentWgHr} Kg</p>
          <p className="text-md font-bold ">{data.recentWgBudam} Kg</p>
          <p className="text-md font-bold ">{data.recentBudam}</p>
          <p className="text-md font-bold ">{data.recentRcTime} 초</p>
        </div>
        <div className="flex justify-around">
          <div>
            <BarChart width={450} height={250} data={winRateData}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis className="text-xs" dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="승률" fill="#b8e994" />
            </BarChart>
          </div>
          <div>
            <BarChart width={300} height={250} data={rcCount}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis className="text-xs" dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="출주회수" fill="#ffaf40" />
            </BarChart>
          </div>
          <div>
            <BarChart width={250} height={250} data={prizeData}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis className="text-xs" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="상금" fill="#18dcff" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}
