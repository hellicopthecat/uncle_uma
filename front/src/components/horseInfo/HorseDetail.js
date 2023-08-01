import {useEffect} from "react";
import {Link} from "react-router-dom";
export default function HorseDetail({data}) {
  const horseData = data;
  const horseList = [];

  useEffect(() => {}, [data]);
  for (let i = 0; i < horseData.length; i++) {
    console.log(horseData[i]);
    horseList.push(
      <li key={horseData[i].hrNo}>
        <Link to={`horseDetail/${horseData[i].hrNo}`} state={horseData[i]}>
          <h2>{horseData[i].hrName}</h2>
        </Link>
      </li>
    );
  }

  return (
    <div>
      <h2>HorseDetail page</h2>
      <ul>{horseList}</ul>
    </div>
  );
}
