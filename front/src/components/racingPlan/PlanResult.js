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
  //   meet	: 시행경마장명
  //   rank	: 등급조건
  //   rcName	: 경주명
  //   rcDate	: 경주일자
  //   schStTime	: 발주예정시각
  //   rcNo	: 경주번호
  //   ilsu	: 경주차수
  //   rcDist	: 경주거리
  //   budam	: 부담구분
  //   stRating	: 레이팅하한조건
  //   spRating	: 레이팅상한조건
  //   ageCond	: 연령조건
  //   chaksun1	: 1착상금
  //   chaksun2	: 2착상금
  //   chaksun3	: 3착상금
  //   chaksun4	: 4착상금
  //   chaksun5	: 5착상금
  //   buga1	: 1착부가상금
  //   buga2	: 2착부가상금
  //   buga3	: 3착부가상금
  for (let i = 0; i < data.length; i++) {
    planResult.push(
      <tr>
        <td>{i + 1}</td>
        <td>{data[i].meet}</td>
        <td>{data[i].rank}</td>
        <td>{data[i].rcName}경기</td>
        <td>{data[i].rcDate}</td>
        <td>{data[i].schStTime}</td>
        <td>{data[i].rcNo}</td>
        <td>{data[i].ilsu}</td>
        <td>{data[i].rcDist}미터</td>
        <td>{data[i].budam}</td>
        <td>{data[i].stRating}</td>
        <td>{data[i].spRating}</td>
        <td>{data[i].ageCond}</td>
        <td>{data[i].chaksun1}</td>
        <td>{data[i].chaksun2}</td>
        <td>{data[i].chaksun3}</td>
        <td>{data[i].chaksun4}</td>
        <td>{data[i].chaksun5}</td>
        <td>{data[i].buga1}</td>
        <td>{data[i].buga2}</td>
        <td>{data[i].buga3}</td>
      </tr>
    );
  }

  return (
    <div>
      <h1>{city} 계획표 결과</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>시행경마장명</th>
            <th>등급조건</th>
            <th>경주명</th>
            <th>경주일자</th>
            <th>발주예정시각</th>
            <th>경주번호</th>
            <th>경주차수</th>
            <th>경주거리</th>
            <th>부담구분</th>
            <th>레이팅하한조건</th>
            <th>레이팅상한조건</th>
            <th>연령조건</th>
            <th>1착상금</th>
            <th>2착상금</th>
            <th>3착상금</th>
            <th>4착상금</th>
            <th>5착상금</th>
            <th>1착부가상금</th>
            <th>2착부가상금</th>
            <th>3착부가상금</th>
          </tr>
        </thead>
        <tbody>{planResult}</tbody>
      </table>
    </div>
  );
}
