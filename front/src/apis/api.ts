import {useQuery} from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_APP_OPEN_API_ENCODING_KEY;
const year = new Date().getFullYear();

export const apis = {
  getRaceOutline: async (localNum: number) =>
    await (
      await fetch(
        `https://apis.data.go.kr/B551015/API3_1/raceInfo_1?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&meet=${localNum}&rc_year=${year}&_type=json`
      )
    ).json(),
};
