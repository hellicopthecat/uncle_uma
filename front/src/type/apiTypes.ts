interface IHeaderObj {
  resultCode: string;
  resultMsg: string;
}
interface IBodyObj {
  items: {
    item: Array<IOutlineRace | IHorseInfo>;
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

export interface IHorseInfo {
  birthday: number;
  chaksunT: number;
  faHrName: string;
  faHrNo: string;
  hrLastAmt: string;
  hrName: string;
  hrNo: string;
  meet: string;
  moHrName: string;
  moHrNo: string;
  name: string;
  ord1CntT: number;
  ord1CntY: number;
  ord2CntT: number;
  ord2CntY: number;
  ord3CntT: number;
  ord3CntY: number;
  owName: string;
  owNo: number;
  rank: string;
  rating: number;
  rcCntT: number;
  rcCntY: number;
  sex: string;
  trName: string;
  trNo: string;
}
