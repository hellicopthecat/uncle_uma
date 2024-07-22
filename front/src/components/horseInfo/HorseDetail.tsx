import {Link} from "react-router-dom";
import {IHorseInfo} from "../../type/apiTypes";

export default function HorseDetail({data}: {data: IHorseInfo[]}) {
  return (
    <div className="container mx-auto border-2 border-blue-200 bg-white/50 rounded-lg m-5 p-5">
      <div className="flex items-center">
        <span className="text-indigo-400 bg-indigo-400 mr-3 w-2 h-5">*</span>
        <h2 className="text-xl font-bold">경주마 상세 정보</h2>
      </div>
      <ul className="grid grid-cols-10 gap-2  text-center text-sm font-semibold my-5 rounded-lg">
        {!data ? (
          <div>No Data</div>
        ) : (
          data.map((horse) => (
            <li
              key={horse.hrNo}
              className=" border-2 border-blue-100 bg-white p-3 rounded-md hover:transition hover:ease-in-out hover:scale-125 hover:text-red-600 hover:bg-gray-300 hover:text-lg duration-300"
            >
              <Link to={`/horseInfo/${horse.hrNo}`} state={horse}>
                <h2>{horse.hrName}</h2>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
