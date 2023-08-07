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
    <div>
      <div className="container mx-auto">
        <HorseLocalNav
          onChangeLocation={(num) => {
            setLocationNum(num);
          }}
        />
      </div>

      {isLoading ? (
        <div className="container mx-auto">
          <p>말의 정보를 불러오고 있습니다.</p>
        </div>
      ) : data ? (
        <HorseDetail data={data} />
      ) : (
        <div className="container mx-auto">
          <p>데이터를 가져오는 중에 오류가 발생했습니다.</p>
        </div>
      )}

      <ul className="flex justify-center mt-10">
        {pageNation.map((num) => (
          <li
            className="border-2 border-x-0 border-y-blue-300 cursor-pointer text-center text-blue-400 w-10 mx-2"
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
  );
}
