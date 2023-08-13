import {useEffect, useState} from "react";

import HorseDetail from "../components/horseInfo/HorseDetail";
import HorseLocalNav from "../components/localNav/HorseLocalNav";

export default function HorseInfo() {
  const [data, setData] = useState();
  const [locationNum, setLocationNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const rows = 100;
  let endPages = Math.ceil(totalPage / rows);

  const BASE_URL =
    "https://apis.data.go.kr/B551015/API8_2/raceHorseInfo_2?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=${currentPage}&numOfRows=${rows}&meet=${locationNum}&act_gubun=y&_type=json`;
  const fetchUrl = `${BASE_URL}${API_KEY}${query}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await (await fetch(fetchUrl)).json();
        setData(response.response.body.items.item);
        setTotalPage(response.response.body.totalCount);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchUrl, locationNum, currentPage, totalPage, endPages]);

  const pageNation = [];
  for (let i = 1; i < endPages; i++) {
    pageNation.push(i);
  }

  return (
    <div className="relative z-0">
      <div className="absolute -top-56 z-0 brightness-50">
        <img src="/img/main/horse_4.jpeg" alt="배경이미지" />
      </div>
      <div className="relative z-10 mb-10">
        <div className="container mx-auto">
          <HorseLocalNav
            onChangeLocation={(num) => {
              setLocationNum(num);
            }}
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center container mx-auto bg-white/50 border border-blue-100 p-5 m-5 h-[300px] rounded-lg">
            <div className="flex items-center justify-center text-2xl font-bold">
              <span className="text-center text-indigo-400 bg-indigo-400 mr-3 w-3 h-6">
                *
              </span>
              <p>말의 정보를 불러오고 있습니다.</p>
            </div>
          </div>
        ) : data ? (
          <HorseDetail data={data} />
        ) : (
          <div className="flex justify-center container mx-auto bg-white/50 border border-blue-100 p-5 m-5 h-[300px] rounded-lg">
            <div className="flex items-center justify-center text-2xl font-bold">
              <span className="text-center text-indigo-400 bg-indigo-400 mr-3 w-3 h-6">
                *
              </span>
              <p>데이터를 가져오는 중에 오류가 발생했습니다.</p>
            </div>
          </div>
        )}

        <ul className="flex justify-center mt-10 mb-20">
          {pageNation.map((num) => (
            <li
              className="border-2  border-blue-300 bg-white cursor-pointer text-center text-blue-400 w-[50px]  mx-2 rounded-full"
              key={num}
              data-id={num}
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
  );
}
