import {IOutlineRace} from "../../../../../../type/apiTypes";
import SharedTxt from "../../../../../shared/sharedTxt";
import {BadRoad, GoodRoad, MudRoad, UpdateRoad} from "../../../../../svg/Roads";
import InnerLayout from "../../OutlineLayout/innerLayout";

export default function Track({track}: Pick<IOutlineRace, "track">) {
  //업데이트중 / 양호 /불량 /포화
  const TrackStatus = ({track}: {track: string | undefined}) => {
    switch (track) {
      case "양호":
        return <GoodRoad />;
      case "불량":
        return <BadRoad />;
      case "포화":
        return <MudRoad />;
      case undefined:
        return <UpdateRoad />;
    }
  };
  return (
    <div className="flex items-center gap-3">
      <div className="size-8">
        <TrackStatus track={track} />
      </div>
      <div className="flex flex-col items-center">
        <SharedTxt txtType="h5" txt="주로상태" />
        {track ? (
          <SharedTxt txtType="h5" txt={track} />
        ) : (
          <SharedTxt txtType="h5" txt="업데이트중" />
        )}
      </div>
    </div>
  );
}
