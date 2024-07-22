import {IOutlineRace} from "../../../../../../type/apiTypes";
import SharedTxt from "../../../../../shared/sharedTxt";
import WaterDrop from "../../../../../svg/WaterDrop";
import InnerLayout from "../../OutlineLayout/innerLayout";

export default function WaterRate({
  waterRate,
}: Pick<IOutlineRace, "waterRate">) {
  function SwitchWaterDrop({waterRate}: {waterRate: number}) {
    if (waterRate <= 10) {
      return <WaterDrop color="green" />;
    } else if (waterRate <= 30) {
      return <WaterDrop color="orange" />;
    } else if (waterRate <= 60) {
      return <WaterDrop color="tomato" />;
    } else if (waterRate < 60) {
      return <WaterDrop color="red" />;
    } else {
      return <WaterDrop color="blue" />;
    }
  }

  return (
    <div className="flex items-center gap-5">
      <div className="size-6">
        <SwitchWaterDrop waterRate={waterRate} />
      </div>
      <div>
        <SharedTxt txtType="h5" txt="함수율" />
        <SharedTxt
          txtType="h5"
          txt={`${!waterRate ? "업데이트중" : waterRate} %`}
        />
        <div className="w-full h-2 bg-gray-500">
          <div
            style={{
              width: waterRate <= 30 ? "30%" : waterRate <= 60 ? "60%" : "100%",
              backgroundColor:
                waterRate === 0
                  ? "inherit"
                  : waterRate <= 10
                  ? "yellowgreen"
                  : waterRate <= 30
                  ? "orange"
                  : waterRate <= 60
                  ? "tomato"
                  : "red",
            }}
            className="bg-green-500 h-2"
          />
        </div>
      </div>
    </div>
  );
}
