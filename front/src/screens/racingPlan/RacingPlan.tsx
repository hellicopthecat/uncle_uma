import SharedSection from "../../components/shared/sharedSection";
import SharedTxt from "../../components/shared/sharedTxt";
import RacingPlanForm from "../../components/racingPlan/racingPlanForm";
import useRacingPlanHook from "../../hooks/racingPlan/useRacingPlanHook";
import PlanResult from "../../components/racingPlan/planResult/PlanResult";

export default function RacingPlan() {
  const {data, isPending, mutate, isError} = useRacingPlanHook();

  return (
    <SharedSection className="flex flex-col gap-10 bg-horse bg-no-repeat bg-cover py-32 px-10">
      <div className="flex items-center gap-5">
        <SharedTxt txtType="span" txt="" className="w-2 h-5 bg-blue-500" />
        <SharedTxt
          txtType="h2"
          txt="전국 경마공원 경주계획표"
          className="text-white"
        />
      </div>
      <div className="flex justify-between h-screen bg-black/25 rounded-md overflow-hidden">
        <RacingPlanForm mutate={mutate} />
        <div className="flex justify-center items-center w-full">
          {isPending && (
            <SharedTxt
              txtType="h5"
              txt="경기일정을 불러오고 있습니다."
              className="text-white"
            />
          )}
          {data && <PlanResult {...data} />}
          {isError && (
            <SharedTxt
              txtType="h5"
              txt="경기를 불러오는데 데이터가 존재하지 않습니다. 다른 날짜를 조회해보세요."
              className="text-white"
            />
          )}
        </div>
      </div>
    </SharedSection>
  );
}
