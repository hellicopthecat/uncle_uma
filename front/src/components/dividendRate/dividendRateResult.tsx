import {useRecoilValue} from "recoil";
import {IDividendResultType} from "../../type/apisTypes/dividendRate/dividendRateTypes";
import {IDefaultResponse} from "../../type/apiTypes";
import {dateMaker} from "../../utils/dateMaker";
import SharedTxt from "../shared/sharedTxt";
import {divdiendMeet} from "../../atoms/dividendRate/dividendRateAtom";

export default function DividendRateResult(data: IDefaultResponse) {
  const result = data.response.body.items.item as IDividendResultType[];
  const meet = useRecoilValue(divdiendMeet);
  return (
    <div className="grid grid-cols-5 gap-5">
      {result.map((divide, index) => (
        <div
          key={index}
          className={`border rounded-md ${
            meet === 1
              ? `border-seoul`
              : meet === 2
              ? `border-jeju`
              : `border-busan`
          }`}
        >
          <div
            className={`flex flex-col justify-between px-5 py-2 ${
              meet === 1 ? `bg-seoul` : meet === 2 ? `bg-jeju` : `bg-busan`
            }`}
          >
            <div className="flex justify-between gap-5">
              <SharedTxt
                txtType="h5"
                txt={dateMaker(divide.rcDate)}
                className="text-white"
              />
              <SharedTxt
                txtType="h5"
                txt={`${divide.meet} 경마장`}
                className="text-white"
              />
            </div>
            <div className="flex justify-between">
              <SharedTxt txtType="h5" txt="경주번호" className="text-white" />
              <SharedTxt
                txtType="h5"
                txt={divide.rcNo + ""}
                className="text-white"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 p-5">
            <div className="flex justify-around *:flex *:flex-col *:items-center">
              <div>
                <SharedTxt txtType="h4" txt="승식" />
                <SharedTxt txtType="h3" txt={divide.pool} />
              </div>
              <div>
                <SharedTxt txtType="h4" txt="예상배당률" />
                <SharedTxt txtType="h3" txt={divide.odds + ""} />
              </div>
            </div>

            <div className="flex justify-around *:flex *:flex-col *:items-center">
              <div className="border-2 border-amber-400 p-1 rounded-md">
                <SharedTxt txtType="h6" txt="1착출주번호" />
                <SharedTxt txtType="h5" txt={divide.chulNo + ""} />
              </div>
              <div className="border-2 border-slate-300 p-1 rounded-md">
                <SharedTxt txtType="h6" txt="2착출주번호" />
                <SharedTxt txtType="h5" txt={divide.chulNo2 + ""} />
              </div>
              <div className="border-2 border-yellow-700 p-1 rounded-md">
                <SharedTxt txtType="h6" txt="3착출주번호" />
                <SharedTxt txtType="h5" txt={divide.chulNo3 + ""} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
