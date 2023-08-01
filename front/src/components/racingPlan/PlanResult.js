import {useEffect, useState} from "react";
export default function PlanResult({data, localNum}) {
  console.log(data);
  let local = localNum;
  const planResult = [];
  const [city, setCity] = useState("서울");
  useEffect(() => {
    if (local === "2") {
      setCity("제주");
    } else if (local === "3") {
      setCity("부산");
    } else {
      setCity("서울");
    }
  }, [localNum]);
  /* meet	: 시행경마장명
  rank	: 등급조건
  rcName	: 경주명
  rcDate	: 경주일자
  schStTime	: 발주예정시각
  rcNo	: 경주번호
  ilsu	: 경주차수
  rcDist	: 경주거리
  budam	: 부담구분
  stRating	: 레이팅하한조건
  spRating	: 레이팅상한조건
  ageCond	: 연령조건
  chaksun1	: 1착상금
  chaksun2	: 2착상금
  chaksun3	: 3착상금
  chaksun4	: 4착상금
  chaksun5	: 5착상금
  buga1	: 1착부가상금
  buga2	: 2착부가상금
  buga3	: 3착부가상금 */
  for (let i = 0; i < data.length; i++) {
    planResult.push();
  }

  return (
    <div>
      <h1>{city} 계획표 결과</h1>
    </div>
  );
}
