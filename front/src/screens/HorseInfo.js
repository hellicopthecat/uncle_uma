import {useEffect, useState} from "react";

import HorseDetail from "../components/horseInfo/HorseDetail";
import HorseLocalNav from "../components/localNav/HorseLocalNav";

export default function HorseInfo() {
  const [data, setData] = useState();
  const [locationNum, setLocationNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL =
    "https://apis.data.go.kr/B551015/API8_2/raceHorseInfo_2?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=1&numOfRows=50&meet=${locationNum}&act_gubun=y&_type=json`;
  const fetchUrl = `${BASE_URL}${API_KEY}${query}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await (await fetch(fetchUrl)).json();
        setData(response.response.body.items.item);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchUrl, locationNum]);

  // console.log(data);

  return (
    <div>
      <HorseLocalNav
        onChangeLocation={(num) => {
          setLocationNum(num);
        }}
      />

      {isLoading ? (
        <p>말의 정보를 불러오고 있습니다.</p>
      ) : data ? (
        <HorseDetail data={data} />
      ) : (
        <p>데이터를 가져오는 중에 오류가 발생했습니다.</p>
      )}
    </div>
  );
}
