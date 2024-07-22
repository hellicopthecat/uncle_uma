import {useQuery} from "@tanstack/react-query";
import {json} from "stream/consumers";
import {ISearchHorseTypes} from "../type/inputTypes";

const API_KEY = import.meta.env.VITE_APP_OPEN_API_ENCODING_KEY;
const year = new Date().getFullYear();

//경마시행당일_경주결과종합(실시간)
const dDayRace = "http://apis.data.go.kr/B551015/API299";
//경주개요 정보
const racingOutlineInfo = "https://apis.data.go.kr/B551015/API3_1";
//경마경주정보
const racingInfo = "https://apis.data.go.kr/B551015/API8_2";
// 경주기록 정보
const recordInfo = "https://apis.data.go.kr/B551015/API4_3";
// 경주계획표
const racingPlan = "https://apis.data.go.kr/B551015/API72_2";
// 확정배당률 통합정보
const certainDividedInfo = "https://apis.data.go.kr/B551015/API160_1";
// 경주성적정보
const racingRateInfo = "https://apis.data.go.kr/B551015/API214_1";
// 경주마성적정보
const horseRateInfo = "https://apis.data.go.kr/B551015/API15_2";
// 경주마상세정보
const horseInfo = "https://apis.data.go.kr/B551015/API8_2";

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
};
