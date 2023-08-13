import {useEffect} from "react";
import {Link} from "react-router-dom";
export default function HorseDetail({data}) {
  const horseData = data;
  const horseList = [];

  useEffect(() => {}, [data]);
  for (let i = 0; i < horseData.length; i++) {
    horseList.push(
      <li
        key={horseData[i].hrNo}
        className=" border-2 border-blue-100 bg-white p-3 rounded-md"
      >
        <Link to={`/horseDetail/${horseData[i].hrNo}`} state={horseData[i]}>
          <h2>{horseData[i].hrName}</h2>
        </Link>
      </li>
    );
  }

  return (
    <div className="container mx-auto border-2 border-blue-200 bg-white/50 rounded-lg m-5 p-5">
      <div className="flex items-center">
        <span className="text-indigo-400 bg-indigo-400 mr-3 w-2 h-5">*</span>
        <h2 className="text-xl font-bold">경주마 상세 정보</h2>
      </div>
      <ul className="grid grid-cols-10 gap-2  text-center text-sm font-semibold my-5 rounded-lg">
        {horseList}
      </ul>
    </div>
  );
}
