import {ChevLeft, ChevRight} from "../../svg/Chevron";

export default function RacingResultBtn() {
  // const handleLeft = () => {
  //   if (slide < 0) {
  //     set_slide(slide + raceSum.current.clientWidth);
  //   } else {
  //     set_slide(-(raceSum.current.clientWidth * (result.length - 1)));
  //   }
  // };
  // const handleRight = () => {
  //   if (slide > -raceSum.current.clientWidth * (result.length - 1)) {
  //     set_slide(slide - raceSum.current.clientWidth);
  //   } else {
  //     set_slide(0);
  //   }
  // };
  return (
    <div className="relative flex justify-between w-full">
      <button
        type="button"
        // onClick={handleLeft}
        className="bg-gray-300/75 hover:bg-gray-400/75 w-16 h-[6rem] rounded-l-lg"
      >
        <ChevLeft color="black" width={40} height={40} />
      </button>
      <button
        type="button"
        // onClick={handleRight}
        className="bg-gray-300/75 hover:bg-gray-400/75 w-16 h-[6rem] rounded-r-lg"
      >
        <ChevRight color="black" width={40} height={40} />
      </button>
    </div>
  );
}
