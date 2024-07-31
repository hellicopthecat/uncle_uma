import {useParams} from "react-router-dom";
import SharedSection from "../../components/shared/sharedSection";
import SharedTxt from "../../components/shared/sharedTxt";
import {useRecoilValue} from "recoil";
import {racingPlanLocal} from "../../atoms/racingPlan/racingPlanAtoms";
import {useQuery} from "@tanstack/react-query";
import {apis} from "../../apis/api";
import {IDefaultResponse} from "../../type/apiTypes";
import RacingResultComp from "../../components/racingResult/RacingResultComp";

export default function RacingResult() {
  const {rcDate, rcNo} = useParams<{rcDate: string; rcNo: string}>();
  const localNum = useRecoilValue(racingPlanLocal);
  const {data, isLoading, refetch} = useQuery<IDefaultResponse>({
    queryKey: ["getRacingResult", rcDate, rcNo, localNum],
    queryFn: () =>
      apis.getRacingResult({
        rcDate: String(rcDate),
        rcNo: String(rcNo),
        localNum: String(localNum),
      }),
  });
  console.log(data);
  return (
    <SharedSection className="py-32 px-10 h-dvh">
      <div className="flex flex-col bg-white p-5 gap-10">
        <div className="flex items-center gap-3">
          <SharedTxt txtType="span" txt="" className="bg-blue-400 w-3 h-6" />
          <SharedTxt txtType="h2" txt="경기 결과" />
        </div>
        <div className=" border-y-2 border-blue-500 py-5">
          {isLoading && (
            <div className="flex justify-center items-center gap-5">
              <SharedTxt
                txtType="span"
                txt=""
                className="animate-spin bg-yellow-400 w-3 h-6"
              />
              <SharedTxt txtType="h2" txt="경기 결과를 불러오는 중입니다." />
              <SharedTxt
                txtType="span"
                txt=""
                className="animate-spin bg-yellow-400 w-3 h-6"
              />
            </div>
          )}
          {data && <RacingResultComp {...data} />}
        </div>
      </div>
    </SharedSection>
  );
}
