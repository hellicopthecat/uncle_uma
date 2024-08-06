import {IDividendResultType} from "./apisTypes/dividendRate/dividendRateTypes";
import {IRacingPlanResultTypes} from "./apisTypes/racingPlan/racingPlanTypes";
import {IRacingResultResultTypes} from "./apisTypes/racingResult/racingResultTypes";

interface IHeaderObj {
  resultCode: string;
  resultMsg: string;
}
interface IBodyObj {
  items: {
    item:
      | Array<
          | IOutlineRace
          | IHorseInfo
          | IRacingPlanResultTypes
          | IRacingResultResultTypes
          | IDividendResultType
        >
      | IHorseDetail;
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

export interface IHorseDetail {
  //정보
  /**말이름 */
  hrName: string;
  /**말번호 */
  hrNo: string;
  /**나이 */
  age: number;
  /**성별 */
  sex: string;
  /**산지 */
  name: string;
  /**시행경마장명 */
  meet: string;
  /**데뷔일자 */
  debut: number;

  //통산
  /**통산승률 */
  winRateT: number;
  /**통산착순상금 */
  chaksunT: number | string;
  /**통산1착회수 */
  ord1CntT: number;
  /**통산2착회수 */
  ord2CntT: number;
  /**통산복승률 */
  qnlRateT: number;
  /**통산총출주회수 */
  rcCntT: number;

  //최근
  /** 최근경주번호 */
  recentRcNo: number | string;
  /** 최근경주일자 */
  recentRcDate: number;
  /** 최근경주부담종류 */
  recentBudam: string;

  /** 최근경주순위 */
  recentOrd: number | string;
  /** 최근경주등급 */
  recentRank: string;
  /** 최근경주레이팅 */
  recentRating: number | string;

  /** 최근경주거리 */
  recentRcDist: number | string;
  /** 최근경주명 */
  recentRcName: string;
  /** 최근경주기록 */
  recentRcTime: number | string;

  /** 최근경주부담증량 */
  recentWgBudam: number | string;
  /** 최근경주마체중 */
  recentWgHr: number | string;

  /** 최근1년착순상금 */
  chaksunY: number | string;
  /** 최근6개월수득상금 */
  chaksun_6: number | string;
  /** 최근1년1착회수 */
  ord1CntY: number | string;
  /** 최근1년2착회수 */
  ord2CntY: number | string;

  /** 최근1년총출주횟수 */
  rcCntY: number | string;
  /** 최근1년승률 */
  winRateY: number | string;
  /** 최근1년복승률 */
  qnlRateY: number | string;
}
