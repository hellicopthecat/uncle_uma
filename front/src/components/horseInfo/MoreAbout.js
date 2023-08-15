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
        <div className="grid lg:grid-cols-11 md:grid-cols-6 gap-5 text-center text-sm mb-10">
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주일자
            </p>
            <p className="text-md font-bold ">{data.recentRcDate}</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주번호
            </p>
            <p className="text-md font-bold ">{data.recentRcNo} 번</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주명
            </p>
            <p className="text-md font-bold ">{data.recentRcName} 경기</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주등급
            </p>
            <p className="text-md font-bold ">{data.recentRank}</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주거리
            </p>
            <p className="text-md font-bold ">{data.recentRcDist} M</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주순위
            </p>
            <p className="text-md font-bold ">{data.recentOrd} 위</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주레이팅
            </p>
            <p className="text-md font-bold ">{data.recentRating}</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주마체중
            </p>
            <p className="text-md font-bold ">{data.recentWgHr} Kg</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주부담중량
            </p>
            <p className="text-md font-bold ">{data.recentWgBudam} Kg</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주부담종류
            </p>
            <p className="text-md font-bold ">{data.recentBudam}</p>
          </div>
          <div>
            <p className="border-2 border-x-0 border-t-0 border-b-blue-400 pb-2">
              최근
              <br />
              경주기록
            </p>
            <p className="text-md font-bold ">{data.recentRcTime} 초</p>
          </div>
        </div>
        <div className="flex justify-around items-center xl:flex-row lg:flex-col lg:items-center md:flex-col md:items-center sm:flex-col flex-col">
          <div className="flex justify-center xl:w-1/3 lg:w-2/6">
            <BarChart
              width={450}
              height={250}
              data={winRateData}
              className="mx-auto"
            >
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis className="text-xs" dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="승률" fill="#b8e994" />
            </BarChart>
          </div>
          <div className="flex justify-center xl:w-1/3 lg:w-2/6">
            <BarChart
              width={300}
              height={250}
              data={rcCount}
              className="mx-auto"
            >
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis className="text-xs" dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="출주회수" fill="#ffaf40" />
            </BarChart>
          </div>
          <div className="flex justify-center xl:w-1/3 lg:w-2/6">
            <BarChart
              width={250}
              height={250}
              data={prizeData}
              className="mx-auto"
            >
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
