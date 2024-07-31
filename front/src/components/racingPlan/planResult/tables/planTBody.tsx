import {Link} from "react-router-dom";
import {IRacingPlanResultTypes} from "../../../../type/apisTypes/racingPlan/racingPlanTypes";
import {useRecoilValue} from "recoil";
import {racingPlanLocal} from "../../../../atoms/racingPlan/racingPlanAtoms";
import {IDefaultResponse} from "../../../../type/apiTypes";

export default function PlanTBody(data: IDefaultResponse) {
  const localNum = useRecoilValue(racingPlanLocal);
  const racingPlan = data.response.body.items.item as IRacingPlanResultTypes[];

  return (
    <tbody>
      {racingPlan ? (
        racingPlan.map((plan, i) => (
          <tr
            key={i}
            className={
              i % 2 === 0
                ? "bg-blue-50 transition ease-in-out hover:bg-blue-300 duration-500"
                : "transition ease-in-out bg-blue-200 hover:bg-blue-400 duration-500"
            }
          >
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {i + 1}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.meet}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.rank}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {plan.rcName}경기
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs font-semibold py-3 ">
              {plan.rcNo}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {plan.rcDate}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.schStTime}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3 ">
              {plan.ilsu}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {plan.rcDist} M
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {plan.budam}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.stRating}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.spRating}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.ageCond}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {String(plan.chaksun1).slice(0, -4)}만원
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {String(plan.chaksun2).slice(0, -4)}만원
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {String(plan.chaksun3).slice(0, -4)}만원
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {String(plan.chaksun4).slice(0, -4)}만원
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              {String(plan.chaksun5).slice(0, -4)}만원
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.buga1}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.buga2}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-sm py-3">
              {plan.buga3}
            </td>
            <td className="border-2 border-x-0 border-t-0 border-b-sky-600/50 text-xs py-3">
              <Link
                to={`/racingPlan/${plan.rcDate}/${plan.rcNo}`}
                className="border-2 border-indigo-300 px-1 py-1 rounded-lg whitespace-nowrap"
              >
                상세 보기
              </Link>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={22} className="bg-blue-400">
            없음
          </td>
        </tr>
      )}
    </tbody>
  );
}
