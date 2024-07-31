export interface IRacingResultSearchTypes {
  localNum: string;
  rcDate: string;
  rcNo: string;
}

export interface IRacingResultResultTypes {
  //공통정보
  /** 순위 */
  ord: number;
  /** 순위비고 */
  ordBigo: string | number;
  /** 마명 */
  hrName: string;
  /** 마번 */
  hrNo: string;

  //경기정보
  /** 착차(코끗차이) */
  diffUnit: number | string;
  /** 경주번호 */
  rcNo: number;
  /** 경마장명*/
  meet: string;
  /** 경기일수 */
  ilsu: number;
  /** 경주일자 */
  rcDate: number;
  /** 경주요일*/
  rcDay: string;
  /** 주로 */
  track: string;
  /** 날씨 */
  weather: string;
  /** 부담구분 */
  budam: string;
  /** 연령조건 */
  ageCond: string;
  /** 경주조건 */
  prizeCond: string;
  /** 군 (등급)*/
  rank: string;
  /** 승군순위 */
  rankRise: number;
  /** 레이팅 */
  rating: number;

  /** 출전번호 */
  chulNo: number;
  /** 경주거리 */
  rcDist: number;
  /**경주명 */
  rcName: string;
  /** 경주기록 */
  rcTime: number;

  /** 장구내역 */
  hrTool: string;

  /** 부담중량 */
  wgBudam: number;
  /** 부담중량 증량신청표기 */
  wgBudamBigo: string | number;
  /** 마체감량 */
  wgHr: string;
  /** 기수감량 */
  wgJk: number;

  /** 단승식배당률 */
  winOdds: number;
  /** 복승식 배당률 */
  plcOdds: number;

  //말정보
  /** 연령 */
  age: number;
  /** 생년월일 */
  birthday: number;
  /** 성별 */
  sex: string;

  //마주정보
  /** 마필생산국가 */
  name: string;
  /** 마주명 */
  owName: string;
  /** 마주번호 */
  owNo: number;

  //기수정보
  /** 기수명 */
  jkName: string;
  /** 기수번호 */
  jkNo: string;

  //조교사정보
  /** 조교사명 */
  trName: string;
  /** 조교사번호 */
  trNo: string;

  //상금
  /** 1착상금 */
  chaksun1: number;
  /** 2착상금 */
  chaksun2: number;
  /** 3착상금 */
  chaksun3: number;
  /** 4착상금 */
  chaksun4: number;
  /** 5착상금 */
  chaksun5: number;
  /** 부가상금1 */
  buga1: number;
  /** 부가상금2 */
  buga2: number;
  /** 부가상금3 */
  buga3: number;

  //서울제주
  /** 서울,제주G1F구간통관순위 (서울,제주공통) */
  sjG1fOrd: number;
  /** 서울,제주G3F구간통관순위 (서울,제주공통) */
  sjG3fOrd: number;
  /** 서울,제주S1F구간통관순위 (서울,제주공통) */
  sjS1fOrd: number;

  /** 서울,제주1코너구간통과순위(서울,제주공통)  */
  sj_1cOrd: number;
  /** 서울,제주2코너구간통과순위(서울,제주공통) */
  sj_2cOrd: number;
  /** 서울,제주3코너구간통과순위(서울,제주공통) */
  sj_3cOrd: number;
  /** 서울,제주4코너구간통과순위(서울,제주공통) */
  sj_4cOrd: number;
  //서울
  /** 서울G1F통과누적기록 */
  seG1fAccTime: number;
  /** 서울G3F통과누적기록 */
  seG3fAccTime: number;
  /** 서울S1F통과누적기록 */
  seS1fAccTime: number;
  /** 서울1코너통과누적기록 */
  se_1cAccTime: number;
  /** 서울2코너통과누적기록 */
  se_2cAccTime: number;
  /** 서울3코너통과누적기록 */
  se_3cAccTime: number;
  /** 서울4코너통과누적기록 */
  se_4cAccTime: number;
  //제주
  /** 제주G-1F통과기록 */
  jeG1fTime: number;
  /** 제주G-3F통과기록 */
  jeG3fTime: number;
  /** 제주S-1F통과기록 */
  jeS1fTime: number;
  /** 제주1코너통과기록 */
  je_1cTime: number;
  /** 제주2코너통과기록 */
  je_2cTime: number;
  /** 제주3코너통과기록 */
  je_3cTime: number;
  /** 제주4코너통과기록 */
  je_4cTime: number;
  //부산
  /** 부경G1F통과누적기록 */
  buG1fAccTime: number;
  /** 부경G1F통과순위 */
  buG1fOrd: number;
  /** 부경G2F통과누적기록 */
  buG2fAccTime: number;
  /** 부경G2F통과순위 */
  buG2fOrd: number;
  /** 부경G3F통과누적기록 */
  buG3fAccTime: number;
  /** 부경G3F통과순위 */
  buG3fOrd: number;
  /** 부경G4F통과누적기록 */
  buG4fAccTime: number;
  /** 부경G4F통과순위 */
  buG4fOrd: number;
  /** 부경G6F통과누적기록 */
  buG6fAccTime: number;
  /** 부경G6F통과순위 */
  buG6fOrd: number;
  /** 부경G8F통과누적기록 */
  buG8fAccTime: number;
  /** 부경G8F통과순위 */
  buG8fOrd: number;
  /** 부경S1F통과누적기록 */
  buS1fAccTime: number;
  /** 부경S1F통과순위 */
  buS1fOrd: number;
  /** 부경S1F통과기록 */
  buS1fTime: number;
  /** 부경1F-G통과기록 */
  bu_1fGTime: number;
  /** 부경2F-G통과기록 */
  bu_2fGTime: number;
  /** 부경3F-G통과기록 */
  bu_3fGTime: number;
  /** 부경4-2F통과기록 */
  bu_4_2fTime: number;
  /**  부경6-4F통과기록 */
  bu_6_4fTime: number;
  /** 부경8-6F통과기록 */
  bu_8_6fTime: number;
  /** 부경10-8F통과기록 */
  bu_10_8fTime: number;
}
