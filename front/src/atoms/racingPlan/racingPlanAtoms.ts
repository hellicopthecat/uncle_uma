import {atom} from "recoil";

export const racingPlanCurrentPage = atom({
  key: "racingPlanCurrentPage",
  default: 1,
});
export const racingPlanRows = atom({
  key: "racingPlanRows",
  default: 100,
});
export const racingPlanLocal = atom({
  key: "racingPlanLocal",
  default: 1,
});

export const racingPlanMinPage = atom({
  key: "racingPlanMinPage",
  default: 0,
});
export const racingPlanMaxPage = atom({
  key: "racingPlanMaxPage",
  default: 10,
});
export const racingPlanEndPage = atom({
  key: "racingPlanEndPage",
  default: 1,
});
