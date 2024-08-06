import {atom} from "recoil";
import {PoolTypes} from "../../type/apisTypes/dividendRate/dividendRateTypes";

export const dividendPage = atom({
  key: "dividendPage",
  default: 1,
});

export const dividendRows = atom({
  key: "dividendRows",
  default: 15,
});

export const dividendPool = atom<PoolTypes>({
  key: "dividendPool",
  default: "",
});

export const divdiendMeet = atom({
  key: "divdiendMeet",
  default: 1,
});
