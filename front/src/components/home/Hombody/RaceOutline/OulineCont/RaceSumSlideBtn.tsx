import {useRecoilState} from "recoil";
import {MutableRefObject} from "react";
import {homeSlideState} from "../../../../../atoms/slideAtoms";

export default function RaceSumSlideBtn({
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
    const width = raceSum.current?.clientWidth || 0;
    if (slide < 0) {
      setSlide(slide + width);
    } else {
      setSlide(-(width * (dataLength - 1)));
    }
  };
  const handleRight = () => {
    const width = raceSum.current?.clientWidth || 0;
    if (slide > -width * (dataLength - 1)) {
      setSlide(slide - width);
    } else {
      setSlide(0);
    }
  };
  return (
    <div className="absolute z-30 flex justify-between w-full ">
      <button
        type="button"
        onClick={handleLeft}
        className="flex justify-center items-center h-full hover:bg-gray-200/75 px-2 py-2 rounded-md"
      >
        <img src="/img/icon/left-arrow.png" alt="left-arrow" width={50} />
      </button>
      <button
        type="button"
        onClick={handleRight}
        className="flex justify-center items-center h-full hover:bg-gray-200/75 px-2 py-2 rounded-md"
      >
        <img src="/img/icon/right-arrow.png" alt="right-arrow" width={50} />
      </button>
    </div>
  );
}
