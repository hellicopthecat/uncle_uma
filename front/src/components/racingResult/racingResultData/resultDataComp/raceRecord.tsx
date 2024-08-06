import {useRecoilValue} from "recoil";
import {IRacingResultResultTypes} from "../../../../type/apisTypes/racingResult/racingResultTypes";
import SharedTxt from "../../../shared/sharedTxt";
import {racingPlanLocal} from "../../../../atoms/racingPlan/racingPlanAtoms";

interface IRaceRecordParams {
  sjG1fOrd: IRacingResultResultTypes["sjG1fOrd"];
  sjG3fOrd: IRacingResultResultTypes["sjG3fOrd"];
  sjS1fOrd: IRacingResultResultTypes["sjS1fOrd"];
  sj_1cOrd: IRacingResultResultTypes["sj_1cOrd"];
  sj_2cOrd: IRacingResultResultTypes["sj_2cOrd"];
  sj_3cOrd: IRacingResultResultTypes["sj_3cOrd"];
  sj_4cOrd: IRacingResultResultTypes["sj_4cOrd"];
  seG1fAccTime: IRacingResultResultTypes["seG1fAccTime"];
  seG3fAccTime: IRacingResultResultTypes["seG3fAccTime"];
  seS1fAccTime: IRacingResultResultTypes["seS1fAccTime"];
  se_1cAccTime: IRacingResultResultTypes["se_1cAccTime"];
  se_2cAccTime: IRacingResultResultTypes["se_2cAccTime"];
  se_3cAccTime: IRacingResultResultTypes["se_3cAccTime"];
  se_4cAccTime: IRacingResultResultTypes["se_4cAccTime"];
  jeG1fTime: IRacingResultResultTypes["jeG1fTime"];
  jeG3fTime: IRacingResultResultTypes["jeG3fTime"];
  jeS1fTime: IRacingResultResultTypes["jeS1fTime"];
  je_1cTime: IRacingResultResultTypes["je_1cTime"];
  je_2cTime: IRacingResultResultTypes["je_2cTime"];
  je_3cTime: IRacingResultResultTypes["je_3cTime"];
  je_4cTime: IRacingResultResultTypes["je_4cTime"];
  buG1fOrd: IRacingResultResultTypes["buG1fOrd"];
  buG2fOrd: IRacingResultResultTypes["buG2fOrd"];
  buG3fOrd: IRacingResultResultTypes["buG3fOrd"];
  buG4fOrd: IRacingResultResultTypes["buG4fOrd"];
  buG6fOrd: IRacingResultResultTypes["buG6fOrd"];
  buG8fOrd: IRacingResultResultTypes["buG8fOrd"];
  buS1fOrd: IRacingResultResultTypes["buS1fOrd"];
  buG1fAccTime: IRacingResultResultTypes["buG1fAccTime"];
  buG2fAccTime: IRacingResultResultTypes["buG2fAccTime"];
  buG3fAccTime: IRacingResultResultTypes["buG3fAccTime"];
  buG4fAccTime: IRacingResultResultTypes["buG4fAccTime"];
  buG6fAccTime: IRacingResultResultTypes["buG6fAccTime"];
  buG8fAccTime: IRacingResultResultTypes["buG8fAccTime"];
  buS1fAccTime: IRacingResultResultTypes["buS1fAccTime"];
  buS1fTime: IRacingResultResultTypes["buS1fTime"];
  bu_1fGTime: IRacingResultResultTypes["bu_1fGTime"];
  bu_2fGTime: IRacingResultResultTypes["bu_2fGTime"];
  bu_3fGTime: IRacingResultResultTypes["bu_3fGTime"];
  bu_4_2fTime: IRacingResultResultTypes["bu_4_2fTime"];
  bu_6_4fTime: IRacingResultResultTypes["bu_6_4fTime"];
  bu_8_6fTime: IRacingResultResultTypes["bu_8_6fTime"];
  bu_10_8fTime: IRacingResultResultTypes["bu_10_8fTime"];
}
export default function RaceRecord({
  sjG1fOrd,
  sjG3fOrd,
  sjS1fOrd,
  sj_1cOrd,
  sj_2cOrd,
  sj_3cOrd,
  sj_4cOrd,
  seG1fAccTime,
  seG3fAccTime,
  seS1fAccTime,
  se_1cAccTime,
  se_2cAccTime,
  se_3cAccTime,
  se_4cAccTime,
  jeG1fTime,
  jeG3fTime,
  jeS1fTime,
  je_1cTime,
  je_2cTime,
  je_3cTime,
  je_4cTime,
  buG1fOrd,
  buG2fOrd,
  buG3fOrd,
  buG4fOrd,
  buG6fOrd,
  buG8fOrd,
  buS1fOrd,
  buG1fAccTime,
  buG2fAccTime,
  buG3fAccTime,
  buG4fAccTime,
  buG6fAccTime,
  buG8fAccTime,
  buS1fAccTime,
  buS1fTime,
  bu_1fGTime,
  bu_2fGTime,
  bu_3fGTime,
  bu_4_2fTime,
  bu_6_4fTime,
  bu_8_6fTime,
  bu_10_8fTime,
}: IRaceRecordParams) {
  const localNum = useRecoilValue(racingPlanLocal);
  return (
    <div className="flex flex-col gap-5 *:text-center">
      <div className="flex items-center gap-3">
        <SharedTxt txtType="span" txt="" className="w-2 h-6 bg-blue-400" />
        <SharedTxt txtType="h3" txt="경주기록" />
      </div>
      {(localNum === 1 || localNum === 2) && (
        <>
          <div className="flex justify-around">
            <div>
              <SharedTxt
                txtType="h5"
                txt="서울,제주 결승선 전방 200M지점의 기록"
              />
              <SharedTxt txtType="h6" txt={`${sjG1fOrd} 위`} />
            </div>
            <div>
              <SharedTxt
                txtType="h5"
                txt="서울,제주 결승선 전방 600M지점의 기록"
              />
              <SharedTxt txtType="h6" txt={`${sjG3fOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="서울,제주 발주후 200M 지점의 기록" />
              <SharedTxt txtType="h6" txt={`${sjS1fOrd} 위`} />
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <SharedTxt txtType="h5" txt="서울,제주 1코너구간통과순위" />
              <SharedTxt txtType="h6" txt={`${sj_1cOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="서울,제주 2코너구간통과순위" />
              <SharedTxt txtType="h6" txt={`${sj_2cOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="서울,제주 3코너구간통과순위" />
              <SharedTxt txtType="h6" txt={`${sj_3cOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="서울,제주 4코너구간통과순위" />
              <SharedTxt txtType="h6" txt={`${sj_4cOrd} 위`} />
            </div>
          </div>
        </>
      )}
      {localNum === 1 && (
        <div className="flex justify-around">
          <div>
            <SharedTxt txtType="h5" txt="결승선 200M 지점 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${seG1fAccTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="결승선 600M 지점 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${seG3fAccTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="발주후 200M 거리 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${seS1fAccTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="1코너 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${se_1cAccTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="2코너 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${se_2cAccTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="3코너 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${se_3cAccTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="4코너 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${se_4cAccTime} 초`} />
          </div>
        </div>
      )}
      {localNum === 2 && (
        <div className="flex justify-around">
          <div>
            <SharedTxt txtType="h5" txt="결승선 200M 지점 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${jeG1fTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="결승선 600M 지점 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${jeG3fTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="발주후 200M 거리 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${jeS1fTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="1코너 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${je_1cTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="2코너 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${je_2cTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="3코너 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${je_3cTime} 초`} />
          </div>
          <div>
            <SharedTxt txtType="h5" txt="4코너 통과누적기록" />
            <SharedTxt txtType="h6" txt={`${je_4cTime} 초`} />
          </div>
        </div>
      )}
      {localNum === 3 && (
        <div className="flex flex-col gap-5">
          <div className="flex justify-around">
            <div>
              <SharedTxt txtType="h5" txt="결승선 200M 지점 기록" />
              <SharedTxt txtType="h6" txt={`${buG1fOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 400M 지점 기록" />
              <SharedTxt txtType="h6" txt={`${buG2fOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 600M 지점 기록" />
              <SharedTxt txtType="h6" txt={`${buG3fOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 800M 지점 기록" />
              <SharedTxt txtType="h6" txt={`${buG4fOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 1200M 지점 기록" />
              <SharedTxt txtType="h6" txt={`${buG6fOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 1600M 지점 기록" />
              <SharedTxt txtType="h6" txt={`${buG8fOrd} 위`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="발주후 200M 지점 기록" />
              <SharedTxt txtType="h6" txt={`${buS1fOrd} 위`} />
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <SharedTxt txtType="h5" txt="결승선 200M 통과누적기록" />
              <SharedTxt txtType="h6" txt={`${buG1fAccTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 400M 통과누적기록" />
              <SharedTxt txtType="h6" txt={`${buG2fAccTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 600M 통과누적기록" />
              <SharedTxt txtType="h6" txt={`${buG3fAccTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 800M 통과누적기록" />
              <SharedTxt txtType="h6" txt={`${buG4fAccTime} 초`} />
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <SharedTxt txtType="h5" txt="결승선 1200M 통과누적기록" />
              <SharedTxt txtType="h6" txt={`${buG6fAccTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 1600M 통과누적기록" />
              <SharedTxt txtType="h6" txt={`${buG8fAccTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="발주후 200M 통과누적기록" />
              <SharedTxt txtType="h6" txt={`${buS1fAccTime} 초`} />
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <SharedTxt txtType="h5" txt="발주후 200M 통과기록" />
              <SharedTxt txtType="h6" txt={`${buS1fTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 200M 통과기록" />
              <SharedTxt txtType="h6" txt={`${bu_1fGTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 400M 통과기록" />
              <SharedTxt txtType="h6" txt={`${bu_2fGTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="결승선 600M 통과기록" />
              <SharedTxt txtType="h6" txt={`${bu_3fGTime} 초`} />
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <SharedTxt txtType="h5" txt="발주후 800M~400M 통과기록" />
              <SharedTxt txtType="h6" txt={`${bu_4_2fTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="발주후 1200M~800M 통과기록" />
              <SharedTxt txtType="h6" txt={`${bu_6_4fTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="발주후 1600M~1200M 통과기록" />
              <SharedTxt txtType="h6" txt={`${bu_8_6fTime} 초`} />
            </div>
            <div>
              <SharedTxt txtType="h5" txt="발주후 2000M~1600M 통과기록" />
              <SharedTxt txtType="h6" txt={`${bu_10_8fTime} 초`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
