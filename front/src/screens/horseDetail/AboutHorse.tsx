import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {apis} from "../../apis/api";
import {IDefaultResponse, IHorseDetail} from "../../type/apiTypes";
import SharedSection from "../../components/shared/sharedSection";
import SharedTxt from "../../components/shared/sharedTxt";
import HorseDetailHeader from "../../components/horseInfoDetail/horseDetailComp/HorseDetailHeader";
import HorseDetailTotal from "../../components/horseInfoDetail/horseDetailComp/HorseDetailTotal";
import HorseDetailYear from "../../components/horseInfoDetail/horseDetailComp/HorseDetailYear";

export default function AboutHorse() {
  const {id} = useParams<{id: string}>();
  const {data, isLoading} = useQuery<IDefaultResponse>({
    queryKey: ["horseDetail", id],
    queryFn: () => apis.getHorseDetail(String(id)),
    enabled: !!id,
  });
  const detailData = data?.response.body.items.item as IHorseDetail;
  return (
    <SharedSection className="container mx-auto py-36 ">
      <div className="flex flex-col gap-5 bg-white rounded-lg p-16 ">
        <div className="flex items-center">
          <SharedTxt
            txtType="span"
            txt=""
            className="bg-indigo-400 w-2 h-7 mr-3"
          />
          <SharedTxt txtType="h3" txt="경주마 상세 정보" />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center border-2 border-indigo-500 p-5 rounded-md h-full">
            <SharedTxt
              txtType="span"
              txt=""
              className="bg-yellow-400 w-2 h-5 animate-spin"
            />
            <SharedTxt txtType="h3" txt="로딩중" className="mx-5" />
            <SharedTxt
              txtType="span"
              txt=""
              className="bg-yellow-400 w-2 h-5 animate-spin mr-4"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-10 h-full">
            <HorseDetailHeader {...detailData} />
            <HorseDetailTotal {...detailData} />
            <HorseDetailYear {...detailData} />
          </div>
        )}
      </div>
    </SharedSection>
  );
}
