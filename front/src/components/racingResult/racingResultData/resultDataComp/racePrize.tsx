import {IRacingResultResultTypes} from "../../../../type/apisTypes/racingResult/racingResultTypes";
import SharedTxt from "../../../shared/sharedTxt";
import CrownIcon from "../../../svg/Crown";
interface IRacePrizeParams {
  chaksun1: IRacingResultResultTypes["chaksun1"];
  chaksun2: IRacingResultResultTypes["chaksun2"];
  chaksun3: IRacingResultResultTypes["chaksun3"];
  chaksun4: IRacingResultResultTypes["chaksun4"];
  chaksun5: IRacingResultResultTypes["chaksun5"];
  buga1: IRacingResultResultTypes["buga1"];
  buga2: IRacingResultResultTypes["buga2"];
  buga3: IRacingResultResultTypes["buga3"];
}
export default function RacePrize({
  chaksun1,
  chaksun2,
  chaksun3,
  chaksun4,
  chaksun5,
  buga1,
  buga2,
  buga3,
}: IRacePrizeParams) {
  return (
    <div className="flex flex-col gap-5 *:text-center">
      <div className="flex items-center gap-3">
        <SharedTxt txtType="span" txt="" className="w-2 h-6 bg-blue-400" />
        <SharedTxt txtType="h3" txt="착순상금" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <div className="relative size-12 flex items-center justify-center ">
              <CrownIcon />
              <SharedTxt txtType="h3" txt="1" className="absolute bottom-0" />
            </div>
            <SharedTxt txtType="h4" txt={`${chaksun1.toLocaleString()} 원`} />
          </div>
          <div className="flex flex-col items-center">
            <div className="relative size-12 flex items-center justify-center ">
              <CrownIcon />
              <SharedTxt txtType="h3" txt="2" className="absolute bottom-0" />
            </div>
            <SharedTxt txtType="h4" txt={`${chaksun2.toLocaleString()} 원`} />
          </div>
          <div className="flex flex-col items-center">
            <div className="relative size-12 flex items-center justify-center ">
              <CrownIcon />
              <SharedTxt txtType="h3" txt="3" className="absolute bottom-0" />
            </div>
            <SharedTxt txtType="h4" txt={`${chaksun3.toLocaleString()} 원`} />
          </div>
          <div className="flex flex-col items-center">
            <div className="relative size-12 flex items-center justify-center ">
              <CrownIcon />
              <SharedTxt txtType="h3" txt="4" className="absolute bottom-0" />
            </div>
            <SharedTxt txtType="h4" txt={`${chaksun4.toLocaleString()} 원`} />
          </div>
          <div className="flex flex-col items-center">
            <div className="relative size-12 flex items-center justify-center ">
              <CrownIcon />
              <SharedTxt txtType="h3" txt="5" className="absolute bottom-0" />
            </div>
            <SharedTxt txtType="h4" txt={`${chaksun5.toLocaleString()} 원`} />
          </div>
        </div>

        <div className="flex justify-around gap-5">
          <div className="flex flex-col items-center">
            <SharedTxt txtType="h5" txt="1착 부가 상금" />
            <SharedTxt txtType="h6" txt={`${buga1.toLocaleString()} 원`} />
          </div>
          <div className="flex flex-col items-center">
            <SharedTxt txtType="h5" txt="2착 부가 상금" />
            <SharedTxt txtType="h6" txt={`${buga2.toLocaleString()} 원`} />
          </div>
          <div className="flex flex-col items-center">
            <SharedTxt txtType="h5" txt="3착 부가 상금" />
            <SharedTxt txtType="h6" txt={`${buga3.toLocaleString()} 원`} />
          </div>
        </div>
      </div>
    </div>
  );
}
