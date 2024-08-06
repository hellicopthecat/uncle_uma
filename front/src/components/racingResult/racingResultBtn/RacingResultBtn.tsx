import {useRecoilState, useRecoilValue} from "recoil";
import {ChevLeft, ChevRight} from "../../svg/Chevron";
import {
  racingSlideRef,
  slideWidth,
} from "../../../atoms/racingResultData/racingResultData";

export default function RacingResultBtn({length}: {length: number}) {
  const [slide, setSlide] = useRecoilState(slideWidth);
  const slideRef = useRecoilValue(racingSlideRef);
  const handleLeft = () => {
    if (slideRef?.current) {
      if (slide < 0) {
        setSlide(slide + slideRef.current.clientWidth);
      } else {
        setSlide(-(slideRef.current.clientWidth * (length - 1)));
      }
    }
  };
  const handleRight = () => {
    if (slideRef?.current) {
      if (slide > -slideRef.current.clientWidth * (length - 1)) {
        setSlide(slide - slideRef.current.clientWidth);
      } else {
        setSlide(0);
      }
    }
  };
  return (
    <div className="absolute z-40 flex justify-between w-full">
      <button
        type="button"
        onClick={handleLeft}
        className="flex justify-center items-center bg-gray-300/75 hover:bg-gray-400/75 w-16 h-[6rem] rounded-l-lg"
      >
        <ChevLeft color="black" width={40} height={40} />
      </button>
      <button
        type="button"
        onClick={handleRight}
        className="flex justify-center items-center bg-gray-300/75 hover:bg-gray-400/75 w-16 h-[6rem] rounded-r-lg"
      >
        <ChevRight color="black" width={40} height={40} />
      </button>
    </div>
  );
}
