import SharedTxt from "../../shared/sharedTxt";
import {Mars, Neuter, Venus, VenusNmars} from "../../svg/venusNmars";
import {IHorseDetail} from "../../../type/apiTypes";
import {dateMaker} from "../../../utils/dateMaker";

export default function HorseDetailHeader(
  detailData: Pick<
    IHorseDetail,
    "hrName" | "hrNo" | "age" | "sex" | "name" | "meet" | "debut"
  >
) {
  const switchGender = (gender: string) => {
    switch (gender) {
      case "암":
        return <Venus />;
      case "수":
        return <Mars />;
      case "거":
        return <Neuter />;
    }
  };

  return (
    <div className="flex flex-col gap-3 border-2 border-indigo-500 p-5 rounded-md">
      <div className="flex items-center">
        <SharedTxt
          txtType="span"
          txt=""
          className="bg-indigo-400 w-2 h-7 mr-3"
        />
        <SharedTxt txtType="h3" txt="말 정보" />
      </div>

      <div className="flex justify-between items-center gap-5">
        <div className="flex flex-col items-end ">
          <SharedTxt txtType="h4" txt={`No.${detailData.hrNo}`} />
          <SharedTxt txtType="h3" txt={detailData.hrName} />
        </div>

        <div className="flex flex-col items-end">
          <SharedTxt txtType="h4" txt="데뷔일자" />
          <SharedTxt txtType="h5" txt={dateMaker(detailData.debut)} />
        </div>

        <div className="flex flex-col items-end">
          <SharedTxt txtType="h4" txt="나이" />
          <SharedTxt txtType="h5" txt={`${detailData.age} 살`} />
        </div>

        <div className="flex flex-col items-end ">
          <div className="flex items-center gap-2">
            <VenusNmars />
            <SharedTxt txtType="h4" txt="성별" />
          </div>
          <div className="flex items-center gap-2">
            {switchGender(detailData.sex)}
            <SharedTxt txtType="h5" txt={detailData.sex} />
          </div>
        </div>

        <div className="flex flex-col items-end">
          <SharedTxt txtType="h4" txt="출신지" />
          <SharedTxt txtType="h5" txt={detailData.name} />
        </div>

        <div className="flex flex-col items-end">
          <SharedTxt txtType="h4" txt="시행경마장" />
          <SharedTxt txtType="h5" txt={detailData.meet} />
        </div>
      </div>
    </div>
  );
}
