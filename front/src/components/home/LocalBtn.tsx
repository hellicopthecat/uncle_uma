import {SetterOrUpdater, useRecoilState} from "recoil";
import {localNumAtom} from "../../atoms/localNumAtom";
import SharedTxt from "../shared/sharedTxt";

export default function LocalBtn() {
  const [localNum, setLocalNum] = useRecoilState(localNumAtom);
  //components
  function Btn({txt, local}: {txt: string; local: number}) {
    return (
      <button
        onClick={() => setLocalNum(local)}
        className={`${
          localNum === local ? "bg-blue-400" : "bg-white"
        }  px-52 py-5 w-full`}
      >
        <SharedTxt txtType="h6" txt={txt} className="text-2xl" />
      </button>
    );
  }
  return (
    <div className="flex justify-between ">
      <Btn txt="서울" local={1} />
      <Btn txt="부산" local={3} />
      <Btn txt="제주" local={2} />
    </div>
  );
}
