import {MutableRefObject, RefObject, useEffect, useRef} from "react";
import {IRacingResultResultTypes} from "../../../type/apisTypes/racingResult/racingResultTypes";
import RaceHorseInfo from "./resultDataComp/raceHorseInfo";
import RaceInfoHead from "./resultDataComp/raceInfoHead";
import RacePrize from "./resultDataComp/racePrize";
import RaceRecord from "./resultDataComp/raceRecord";
import RacingInfo from "./resultDataComp/racingInfo";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {
  racingSlideRef,
  slideWidth,
} from "../../../atoms/racingResultData/racingResultData";

export default function RacingResultData({
  data,
}: {
  data: IRacingResultResultTypes[];
}) {
  const racingDataRef = useRef(null);
  const setSlideRef = useSetRecoilState(racingSlideRef);
  const slide = useRecoilValue(slideWidth);
  useEffect(() => {
    setSlideRef(racingDataRef);
  }, [racingDataRef]);

  return (
    <div className="flex overflow-x-hidden ">
      {!data ? (
        <p>no Data</p>
      ) : (
        data.map((item) => (
          <div
            key={item.hrNo}
            ref={racingDataRef}
            className="flex flex-col gap-10 *:text-nowrap min-w-full transition-all duration-300 ease-in-out"
            style={{transform: `translateX(${slide}px)`}}
          >
            <RaceInfoHead
              ord={item.ord}
              diffUnit={item.diffUnit}
              rcTime={item.rcTime}
              hrName={item.hrName}
              hrNo={item.hrNo}
              ordBigo={item.ordBigo}
            />
            <RacingInfo
              rcDate={item.rcDate}
              rcDay={item.rcDay}
              weather={item.weather}
              track={item.track}
              rcNo={item.rcNo}
              meet={item.meet}
              ilsu={item.ilsu}
              rcName={item.rcName}
              rank={item.rank}
              budam={item.budam}
              ageCond={item.ageCond}
              prizeCond={item.prizeCond}
              rcDist={item.rcDist}
            />
            <RaceHorseInfo
              chulNo={item.chulNo}
              birthday={item.birthday}
              age={item.age}
              sex={item.sex}
              name={item.name}
              hrTool={item.hrTool}
              rankRise={item.rankRise}
              rating={item.rating}
              wgBudam={item.wgBudam}
              wgBudamBigo={item.wgBudamBigo}
              wgHr={item.wgHr}
              wgJk={item.wgJk}
              owName={item.owName}
              owNo={item.owNo}
              trName={item.trName}
              trNo={item.trNo}
              jkName={item.jkName}
              jkNo={item.jkNo}
            />
            <RacePrize
              chaksun1={item.chaksun1}
              chaksun2={item.chaksun2}
              chaksun3={item.chaksun3}
              chaksun4={item.chaksun4}
              chaksun5={item.chaksun5}
              buga1={item.buga1}
              buga2={item.buga2}
              buga3={item.buga3}
            />

            <RaceRecord
              sjG1fOrd={item.sjG1fOrd}
              sjG3fOrd={item.sjG3fOrd}
              sjS1fOrd={item.sjS1fOrd}
              sj_1cOrd={item.sj_1cOrd}
              sj_2cOrd={item.sj_2cOrd}
              sj_3cOrd={item.sj_3cOrd}
              sj_4cOrd={item.sj_4cOrd}
              seG1fAccTime={item.seG1fAccTime}
              seG3fAccTime={item.seG3fAccTime}
              seS1fAccTime={item.seS1fAccTime}
              se_1cAccTime={item.se_1cAccTime}
              se_2cAccTime={item.se_2cAccTime}
              se_3cAccTime={item.se_3cAccTime}
              se_4cAccTime={item.se_4cAccTime}
              jeG1fTime={item.jeG1fTime}
              jeG3fTime={item.jeG3fTime}
              jeS1fTime={item.jeS1fTime}
              je_1cTime={item.je_1cTime}
              je_2cTime={item.je_2cTime}
              je_3cTime={item.je_3cTime}
              je_4cTime={item.je_4cTime}
              buG1fOrd={item.buG1fOrd}
              buG2fOrd={item.buG2fOrd}
              buG3fOrd={item.buG3fOrd}
              buG4fOrd={item.buG4fOrd}
              buG6fOrd={item.buG6fOrd}
              buG8fOrd={item.buG8fOrd}
              buS1fOrd={item.buS1fOrd}
              buG1fAccTime={item.buG1fAccTime}
              buG2fAccTime={item.buG2fAccTime}
              buG3fAccTime={item.buG3fAccTime}
              buG4fAccTime={item.buG4fAccTime}
              buG6fAccTime={item.buG6fAccTime}
              buG8fAccTime={item.buG8fAccTime}
              buS1fAccTime={item.buS1fAccTime}
              buS1fTime={item.buS1fTime}
              bu_1fGTime={item.bu_1fGTime}
              bu_2fGTime={item.bu_2fGTime}
              bu_3fGTime={item.bu_3fGTime}
              bu_4_2fTime={item.bu_4_2fTime}
              bu_6_4fTime={item.bu_6_4fTime}
              bu_8_6fTime={item.bu_8_6fTime}
              bu_10_8fTime={item.bu_10_8fTime}
            />
          </div>
        ))
      )}
    </div>
  );
}
