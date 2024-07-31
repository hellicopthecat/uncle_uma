import {Link} from "react-router-dom";
import {IHorseInfo} from "../../type/apiTypes";
import SharedTxt from "../shared/sharedTxt";
import {useSetRecoilState} from "recoil";
import {chaksunSlideAtom} from "../../atoms/chaksunSlideAtom";
import ChaksunInfo from "./HorseInfoPageBtn/ChaksunInfo";

export default function HorseDetail({data}: {data: IHorseInfo[]}) {
  const setChaksun = useSetRecoilState(chaksunSlideAtom);
  //fn
  const mouseUp = (index: number) => setChaksun(index);
  const mouseOut = () => setChaksun(null);
  return (
    <div className="flex flex-col gap-5 bg-white/50 p-5 w-full h-full">
      <div className="flex items-center">
        <SharedTxt
          txtType="span"
          txt=""
          className="w-2 h-4 mr-3 bg-indigo-400"
        />
        <SharedTxt txtType="h3" txt="경주마 상세 정보" />
      </div>

      {!data ? (
        <div className="flex items-center">
          <SharedTxt txtType="h5" txt="검색결과없음" />
        </div>
      ) : (
        <ul className="grid grid-cols-10 gap-2 rounded-lg">
          {data.map((horse, index) => (
            <li
              key={horse.hrNo}
              className="flex flex-col justify-between items-center gap-5 border-2 border-indigo-300 bg-white p-3 rounded-md hover:scale-125 hover:bg-gray-300 hover:text-lg transition-all duration-150 ease-in-out shadow-lg group"
              onMouseOver={() => mouseUp(index)}
              onMouseOut={() => mouseOut()}
            >
              <Link to={`/horseInfo/${horse.hrNo}`} state={horse}>
                <SharedTxt
                  txtType="h5"
                  txt={horse.hrName}
                  className="group-hover:text-red-600"
                />
              </Link>
            </li>
          ))}
          {data.map((horse, index) => (
            <ChaksunInfo horse={horse} index={index} key={horse.hrNo + ""} />
          ))}
        </ul>
      )}
    </div>
  );
}
