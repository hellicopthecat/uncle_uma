interface IHeaderObj {
  resultCode: string;
  resultMsg: string;
}
interface IBodyObj {
  items: {
    item: Array<IOutlineRace>;
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
export interface IDefaultResponse {
  response: {
    header: IHeaderObj;
    body: IBodyObj;
  };
}

export interface IOutlineRace {
  ageCond: string;
  budam: string;
  buga1: number;
  buga2: number;
  buga3: number;
  chaksun1: number;
  chaksun2: number;
  chaksun3: number;
  chaksun4: number;
  chaksun5: number;
  exaAmt: number;
  ilsu: number;
  meet: string;
  plcAmt: number;
  qnlAmt: number;
  qplAmt: number;
  rank: string;
  rcDate: number;
  rcDist: number;
  rcName: string;
  rcNo: number;
  spRating: number;
  stRating: number;
  tlaAmt: number;
  totalAmt: number;
  track: string;
  triAmt: number;
  waterRate: number;
  weather: string;
  winAmt: number;
}
