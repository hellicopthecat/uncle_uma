import {useRecoilState} from "recoil";
import {homeSlideState} from "../../atoms/slideAtoms";
import {MutableRefObject, useEffect} from "react";

export default function HomeSlideBtn({
  raceSum,
  dataLength,
}: {
  raceSum: MutableRefObject<HTMLDivElement | null>;
  dataLength: number;
}) {
  //state
  const [slide, setSlide] = useRecoilState(homeSlideState);

  //fn
  const handleLeft = () => {
    if (slide < 0) {
      setSlide(slide + raceSum.current?.offsetWidth!);
    } else {
      setSlide(-(raceSum.current?.offsetWidth! * (dataLength - 1)));
    }
  };
  const handleRight = () => {
    if (slide > -raceSum.current?.offsetWidth! * (dataLength - 1)) {
      setSlide(slide - raceSum.current?.offsetWidth!);
    } else {
      setSlide(0);
    }
  };

  return (
    <div className="absolute z-50 flex justify-between w-[60%] ">
      <button
        type="button"
        onClick={handleLeft}
        className="  hover:bg-gray-200/75 px-2 py-2 rounded-full"
      >
        <img src="/img/icon/left-arrow.png" alt="left-arrow" width={50} />
      </button>
      <button
        type="button"
        onClick={handleRight}
        className="  hover:bg-gray-200/75 px-2 py-2 rounded-full"
      >
        <img src="/img/icon/right-arrow.png" alt="right-arrow" width={50} />
      </button>
    </div>
  );
}
