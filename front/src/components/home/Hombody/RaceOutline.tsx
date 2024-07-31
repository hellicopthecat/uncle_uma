import {useEffect, useRef} from "react";
import {useRecoilValue} from "recoil";
import {IDefaultResponse, IOutlineRace} from "../../../type/apiTypes";
import {useQuery} from "@tanstack/react-query";
import {apis} from "../../../apis/api";
import {localNumAtom} from "../../../atoms/localNumAtom";
import SharedTxt from "../../shared/sharedTxt";
import RaceOutlineCont from "./RaceOutline/OulineCont/RaceOutlineCont";
import RaceSumSlideBtn from "./RaceOutline/OulineCont/RaceSumSlideBtn";
import LocalBtn from "./RaceOutline/OulineCont/LocalBtn";

export default function RaceOutline() {
  //states
  const localNum = useRecoilValue(localNumAtom);
  const raceSum = useRef<HTMLDivElement>(null);
  // data
  const {data, isLoading, refetch} = useQuery<IDefaultResponse>({
    queryKey: ["getRaceOutline"],
    queryFn: () => apis.getRaceOutline(localNum),
  });
  //useEffect
  useEffect(() => {
    refetch();
  }, [localNum]);

  const raceOutline = data?.response.body.items.item as IOutlineRace[];
  return (
    <div>
      <div className="flex items-center p-10 -skew-x-[20deg]">
        <SharedTxt
          txtType="span"
          txt=""
          className="block w-2 h-16 bg-blue-400 mr-5"
        />
        <SharedTxt txtType="h1" txt="최근경주개요" className="text-white" />
      </div>
      <div className="bg-white">
        <LocalBtn />
        <div className="flex flex-col gap-5 p-5 px-24">
          {isLoading ? (
            <div className="flex justify-center items-center gap-5">
              <SharedTxt
                txtType="span"
                txt=""
                className="animate-spin block w-2 h-5 bg-yellow-400"
              />
              <SharedTxt txtType="h4" txt="최근 10경기를 불러오는 중입니다." />
              <SharedTxt
                txtType="span"
                txt=""
                className="animate-spin block w-2 h-5 bg-yellow-400"
              />
            </div>
          ) : data ? (
            <div className="flex justify-center items-center">
              <RaceSumSlideBtn
                raceSum={raceSum}
                dataLength={raceOutline.length}
              />

              <div className="relative flex w-[980px] overflow-x-hidden">
                {raceOutline.map((item, i) => (
                  <RaceOutlineCont
                    key={item.rcNo}
                    refName={raceSum}
                    item={item as IOutlineRace}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-5 ">
              <SharedTxt
                txtType="span"
                txt=""
                className="block w-2 h-4 bg-red-400"
              />
              <SharedTxt
                txtType="h4"
                txt="최근경기데이터가 업로드되지 않았거나 경기가 이뤄지지 않았습니다."
                className=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
