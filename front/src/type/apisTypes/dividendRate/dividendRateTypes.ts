export type PoolTypes =
  /** 승식구분
   * - "WIN" 단승식
   * - "PLC" 연승식
   * - "QNL" 복승식
   * - "EXA" 쌍승식
   * - "QPL" 복연승식
   * - "TLA" 삼복승식
   * - "TRI" 삼쌍승식
   */
  "WIN" | "PLC" | "QNL" | "EXA" | "QPL" | "TLA" | "TRI" | "" | null;
export interface IDividendRateSearchType {
  pageNum?: string;
  rows?: string;
  pool?: PoolTypes;
  rcDate?: string;
  rcMonth?: string;
  rcNo?: string;
  meet?: string;
}

export interface IDividendResultType {
  /**예상배당률 */
  odds: number;
  /** 승식 */
  pool: string;
  /**1착출주번호 */
  chulNo: number;
  /**2착출주번호 */
  chulNo2: number;
  /**3착출주번호 */
  chulNo3: number;
  /**경주번호 */
  rcNo: number;
  /** 시행경마장명 */
  meet: string;
  /** 경주일자 */
  rcDate: number;
}
