import {useRecoilState} from "recoil";
import {localNumAtom} from "../../../../../atoms/localNumAtom";
import SharedTxt from "../../../../shared/sharedTxt";

export default function LocalBtn() {
  const [localNum, setLocalNum] = useRecoilState(localNumAtom);
  const localColor = (placeNum: number) => {
    if (placeNum === 1) {
      return "#255097";
    } else if (placeNum === 3) {
      return "#BD1C13";
    } else {
      return "#509619";
    }
  };
  //components
  function Btn({txt, local}: {txt: string; local: number}) {
    return (
      <button
        onClick={() => setLocalNum(local)}
        className="px-52 py-5 w-full"
        style={{
          backgroundColor: localNum === local ? localColor(localNum) : "white",
          borderBottom: `5px solid ${localColor(localNum)}`,
        }}
      >
        <SharedTxt
          txtType="h3"
          txt={txt}
          className={`${
            localNum === local
              ? "text-white"
              : local === 1
              ? "text-seoul"
              : local === 2
              ? "text-jeju"
              : "text-busan"
          }`}
        />
      </button>
    );
  }
  return (
    <div className={`flex justify-between `}>
      <Btn txt="서울" local={1} />
      <Btn txt="부산" local={3} />
      <Btn txt="제주" local={2} />
    </div>
  );
}
