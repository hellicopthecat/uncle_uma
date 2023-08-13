import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function PlanResult({data, localNum}) {
  let local = localNum;
  const [city, setCity] = useState("서울");
  useEffect(() => {
    if (local === "2") {
      setCity("제주");
    } else if (local === "3") {
      setCity("부산");
    } else {
      setCity("서울");
    }
  }, [localNum, local]);

  return (
    <div className="container mx-auto flex flex-col">
      <h2 className="text-xl font-bold my-4 text-white">{city} 계획표 결과</h2>
      <table className="table-auto text-center border-collapse">
        <thead>
          <tr className="border-2 border-x-0 border-y-cyan-600 bg-blue-200 text-xs">
            <th className="py-3 px-3">번호</th>
            <th className="py-3 px-2">
              시행
              <br />
              경마장
            </th>
            <th className="py-3 px-3">등급조건</th>
            <th className="py-3 px-3">경주명</th>
            <th className="py-3 px-3">
              경주
              <br />
              번호
            </th>
            <th className="py-3 px-3">
              발주예정
              <br />
              시각
            </th>
            <th className="py-3 px-3">
              경주
              <br />
              일자
            </th>
            <th className="py-3 px-3">
              경주
              <br />
              차수
            </th>
            <th className="py-3 px-3">
              경주
              <br />
              거리
            </th>
            <th className="py-3 px-3">
              부담
              <br />
              구분
            </th>
            <th className="py-3 px-3">
              레이팅
              <br />
              하한조건
            </th>
            <th className="py-3 px-3">
              레이팅
              <br />
              상한조건
            </th>
            <th className="py-3 px-4">
              연령
              <br />
              조건
            </th>
            <th className="py-3 px-3">
              1착
              <br />
              상금
            </th>
            <th className="py-3 px-3">
              2착
              <br />
              상금
            </th>
            <th className="py-3 px-3">
              3착
              <br />
              상금
            </th>
            <th className="py-3 px-3">
              4착
              <br />
              상금
            </th>
            <th className="py-3 px-3">
              5착
              <br />
              상금
            </th>
            <th className="py-3 px-3">
              1착
              <br />
              부가상금
            </th>
            <th className="py-3 px-3">
              2착
              <br />
              부가상금
            </th>
            <th className="py-3 px-3">
              3착
              <br />
              부가상금
            </th>
            <th className="py-3 px-3 w-20">
              상세 <br />
              보기
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className={
                i % 2 === 0
                  ? "bg-blue-50 transition ease-in-out hover:bg-blue-300 duration-500"
                  : "transition ease-in-out bg-blue-200 hover:bg-blue-400 duration-500"
              }
            >
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {i + 1}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.meet}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.rank}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.rcName}경기
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs font-semibold py-3 ">
                {item.rcNo}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.rcDate}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.schStTime}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3 ">
                {item.ilsu}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.rcDist} M
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.budam}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.stRating}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.spRating}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.ageCond}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.chaksun1}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.chaksun2}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.chaksun3}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.chaksun4}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                {item.chaksun5}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.buga1}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.buga2}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
                {item.buga3}
              </td>
              <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
                <Link
                  to={`${item.rcDate}/${item.rcNo}`}
                  className="border-2 border-indigo-300 px-1 py-1 rounded-lg"
                  state={[item.rcNo, item.rcDate, localNum]}
                >
                  상세 보기
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
