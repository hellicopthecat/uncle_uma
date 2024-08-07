import {IDividendRateSearchType} from "../type/apisTypes/dividendRate/dividendRateTypes";
import {IRacingPlanSearchTypes} from "../type/apisTypes/racingPlan/racingPlanTypes";
import {IRacingResultSearchTypes} from "../type/apisTypes/racingResult/racingResultTypes";
import {ISearchHorseTypes} from "../type/inputTypes";

const API_KEY = import.meta.env.VITE_APP_OPEN_API_ENCODING_KEY;
const year = new Date().getFullYear();

//경마시행당일_경주결과종합(실시간)
const dDayRace = "http://apis.data.go.kr/B551015/API299";
//경주개요 정보
const racingOutlineInfo = "https://apis.data.go.kr/B551015/API3_1";
//경주마 상세정보
const racingInfo = "https://apis.data.go.kr/B551015/API8_2";
// 경주마성적정보
const horseRateInfo = "https://apis.data.go.kr/B551015/API15_2";
// 경주계획표
const racingPlan = "https://apis.data.go.kr/B551015/API72_2";
// 경주성적정보
const racingRateInfo = "https://apis.data.go.kr/B551015/API214_1";
// 확정배당률 통합정보
const certainDividedInfo = "https://apis.data.go.kr/B551015/API160_1";

export const apis = {
  getRaceOutline: async (localNum: number) =>
    await (
      await fetch(
        `${racingOutlineInfo}/raceInfo_1?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&meet=${localNum}&rc_year=${year}&_type=json`
      )
    ).json(),
  getHorseInfo: async ({
    currentPage,
    rows,
    horseName = "",
    horseId = "",
    locationNum,
  }: ISearchHorseTypes) =>
    await (
      await fetch(
        `${racingInfo}/raceHorseInfo_2?serviceKey=${API_KEY}&pageNo=${currentPage}&numOfRows=${rows}&hr_name=${horseName}&hr_no=${horseId}&meet=${locationNum}&act_gubun=y&_type=json`
      )
    ).json(),
  getHorseDetail: async (id: string) =>
    await (
      await fetch(
        `${horseRateInfo}/raceHorseResult_2?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&hr_no=${id}&_type=json`
      )
    ).json(),
  getHorseRacingPlan: async ({
    currentPage,
    rows,
    localNum,
    date,
    month,
    year,
  }: IRacingPlanSearchTypes) =>
    await (
      await fetch(
        `${racingPlan}/racePlan_2?serviceKey=${API_KEY}&pageNo=${currentPage}&numOfRows=${rows}&meet=${localNum}&rc_date=${date}&rc_month=${month}&rc_year=${year}&_type=json`
      )
    ).json(),
  getRacingResult: async ({localNum, rcDate, rcNo}: IRacingResultSearchTypes) =>
    await (
      await fetch(
        `${racingRateInfo}/RaceDetailResult_1?serviceKey=${API_KEY}&pageNo=1&numOfRows=50&meet=${localNum}&rc_date=${rcDate}&rc_no=${rcNo}&_type=json`
      )
    ).json(),
  getCertainDivdedInfo: async ({
    pageNum,
    rows,
    pool,
    rcDate,
    rcMonth,
    rcNo,
    meet,
  }: IDividendRateSearchType) =>
    await (
      await fetch(
        `${certainDividedInfo}/integratedInfo_1?serviceKey=${API_KEY}&pageNo=${pageNum}&numOfRows=${rows}&pool=${pool}&rc_date=${rcDate}&rc_month=${rcMonth}&rc_no=${rcNo}&meet=${meet}&_type=json`
      )
    ).json(),
};
