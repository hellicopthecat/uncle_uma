export interface IRacingPlanSearchTypes {
  currentPage: string;
  rows: string;
  localNum: string;
  date?: string;
  month?: string;
  year?: string;
}
export interface IRacingPlanResultTypes {
  /**시행경마장 */
  meet: string;
  /**경주일자 */
  rcDate: number;
  /**발주 예정 시각 */
  schStTime: number;
  /**경주 번호 */
  rcNo: number;
  /**경주차수 */
  ilsu: number;
  /**경주거리 */
  rcDist: number;
  /**등급조건 */
  rank: string;
  /**부담구분 */
  budam: string;
  /**경주명 */
  rcName: string;
  /**레이팅 상한 조건 */
  spRating: number;
  /**레이팅 하한 조건 */
  stRating: number;
  /**연령조건 */
  ageCond: string;
  /**1착상금 */
  chaksun1: number;
  /**2착상금 */
  chaksun2: number;
  /**3착상금 */
  chaksun3: number;
  /**4착상금 */
  chaksun4: number;
  /**5착상금 */
  chaksun5: number;
  /**1착부가상금 */
  buga1: number;
  /**1착부가상금 */
  buga2: number;
  /**1착부가상금 */
  buga3: number;
  /**성별조건 */
  sexCond: string;
}
