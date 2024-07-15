import {IOutlineRace} from "../../../type/apiTypes";
import SharedTxt from "../../shared/sharedTxt";
import InnerLayout from "./OutlineLayout/innerLayout";
import OuterLayout from "./OutlineLayout/outerLayout";

export default function RaceOutlineLeft({item}: {item: IOutlineRace}) {
  const dateMaker = (date: number) => {
    const yearSting = date.toString().substring(0, 4);
    const monthSting = date.toString().substring(4, 6);
    const dateSting = date.toString().substring(6, 8);
    return `${yearSting}년 ${monthSting}월 ${dateSting}일`;
  };
  return (
    <div className="flex flex-col text-center text-nowrap gap-5">
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <SharedTxt txtType="h3" txt="경주번호" />
          <SharedTxt txtType="h3" txt={item.rcNo + ""} />
        </div>
        <SharedTxt txtType="h3" txt={dateMaker(item.rcDate)} />
        <SharedTxt txtType="h3" txt={`${item.meet} 경마장`} />
      </div>

      <OuterLayout>
        <div className="flex items-center gap-3">
          <SharedTxt txtType="h4" txt="경주차수" />
          <SharedTxt txtType="h4" txt={item.ilsu + ""} />
        </div>
        <SharedTxt txtType="h4" txt={`${item.rcDist} M`} />
      </OuterLayout>

      <OuterLayout>
        <SharedTxt txtType="h4" txt={item.rcName} />
        <SharedTxt txtType="h4" txt={item.ageCond} />
        <SharedTxt txtType="h4" txt={item.rank} />
        <SharedTxt txtType="h4" txt={item.budam} />
      </OuterLayout>

      <OuterLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="주로" />
          <SharedTxt
            txtType="h5"
            txt={item.track === undefined ? "업데이트중" : item.track}
          />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="함수율" />
          <SharedTxt txtType="h5" txt={`${item.waterRate} %`} />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h5" txt="날씨" />
          <SharedTxt
            txtType="h5"
            txt={item.weather === undefined ? "업데이트중" : item.weather}
          />
        </InnerLayout>
      </OuterLayout>

      <OuterLayout>
        <InnerLayout>
          <SharedTxt txtType="h6" txt="1착상금" />
          <SharedTxt
            txtType="h6"
            txt={`${String(item.chaksun1).slice(0, -4)} 만원`}
          />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h6" txt="2착상금" />
          <SharedTxt
            txtType="h6"
            txt={`${String(item.chaksun2).slice(0, -4)} 만원`}
          />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h6" txt="3착상금" />
          <SharedTxt
            txtType="h6"
            txt={`${String(item.chaksun3).slice(0, -4)} 만원`}
          />
        </InnerLayout>

        <InnerLayout>
          <SharedTxt txtType="h6" txt="4착상금" />
          <SharedTxt
            txtType="h6"
            txt={`${String(item.chaksun4).slice(0, -4)} 만원`}
          />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h6" txt="5착상금" />
          <SharedTxt
            txtType="h6"
            txt={`${String(item.chaksun5).slice(0, -4)} 만원`}
          />
        </InnerLayout>
      </OuterLayout>

      <OuterLayout>
        <InnerLayout>
          <SharedTxt txtType="h6" txt="1착부가상금" />
          <SharedTxt txtType="h6" txt={`${item.buga1} 원`} />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h6" txt="2착부가상금" />
          <SharedTxt txtType="h6" txt={`${item.buga2} 원`} />
        </InnerLayout>
        <InnerLayout>
          <SharedTxt txtType="h6" txt="3착부가상금" />
          <SharedTxt txtType="h6" txt={`${item.buga3} 원`} />
        </InnerLayout>
      </OuterLayout>
    </div>
  );
}
