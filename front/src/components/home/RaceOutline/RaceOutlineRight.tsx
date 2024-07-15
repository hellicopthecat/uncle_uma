import {IOutlineRace} from "../../../type/apiTypes";
import SharedTxt from "../../shared/sharedTxt";
import InnerLayout from "./OutlineLayout/innerLayout";
import OuterLayout from "./OutlineLayout/outerLayout";

export default function RaceOutlineRight({item}: {item: IOutlineRace}) {
  return (
    <div className="flex flex-col text-center text-nowrap  gap-5">
      <OuterLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="단승식 매출액" />
          <SharedTxt
            txtType="h5"
            txt={`${
              item.winAmt ? item.winAmt.toLocaleString("ko-KR") : "0"
            } 원`}
          />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="연승식 매출액" />
          <SharedTxt
            txtType="h5"
            txt={`${
              item.plcAmt ? item.plcAmt.toLocaleString("ko-KR") : "0"
            } 원`}
          />
        </InnerLayout>
      </OuterLayout>

      <OuterLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="복승식 매출액" />
          <SharedTxt
            txtType="h5"
            txt={`${
              item.qnlAmt ? item.qnlAmt.toLocaleString("ko-KR") : "0"
            } 원`}
          />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="복연승식 매출액" />
          <SharedTxt
            txtType="h5"
            txt={`${
              item.exaAmt ? item.exaAmt.toLocaleString("ko-KR") : "0"
            } 원`}
          />
        </InnerLayout>
      </OuterLayout>

      <OuterLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="쌍승식 매출액" />
          <SharedTxt
            txtType="h5"
            txt={`${
              item.qplAmt ? item.qplAmt.toLocaleString("ko-KR") : "0"
            } 원`}
          />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="삼복승식 매출액" />
          <SharedTxt
            txtType="h5"
            txt={`${
              item.tlaAmt ? item.tlaAmt.toLocaleString("ko-KR") : "0"
            } 원`}
          />
        </InnerLayout>
      </OuterLayout>

      <OuterLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="삼쌍승식 매출액" />
          <SharedTxt
            txtType="h5"
            txt={`${
              item.triAmt ? item.triAmt.toLocaleString("ko-KR") : "0"
            } 원`}
          />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="합계 매출액" />
          <SharedTxt
            txtType="h5"
            txt={`${
              item.totalAmt ? item.totalAmt.toLocaleString("ko-KR") : "0"
            } 원`}
          />
        </InnerLayout>
      </OuterLayout>

      <OuterLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="레이팅하한조건" />
          <SharedTxt txtType="h5" txt={item.stRating + ""} />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="레이팅상한조건" />
          <SharedTxt txtType="h5" txt={item.spRating + ""} />
        </InnerLayout>
      </OuterLayout>
    </div>
  );
}
