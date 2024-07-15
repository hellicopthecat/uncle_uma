import {useEffect, useRef, useState} from "react";

import {useQuery} from "@tanstack/react-query";

import {useRecoilValue} from "recoil";
import {localNumAtom} from "../../atoms/localNumAtom";
import {IDefaultResponse} from "../../type/apiTypes";
import {apis} from "../../apis/api";
import SharedSection from "../../components/shared/sharedSection";
import LocalBtn from "../../components/home/LocalBtn";
import SharedTxt from "../../components/shared/sharedTxt";
import HomeSlideBtn from "../../components/home/HomeSlideBtn";
import RaceOutline from "../../components/home/RaceOutline/RaceOutline";
import RacingPlace from "../../components/home/RacingPlace";

export default function MainPage() {
  //states
  const localNum = useRecoilValue(localNumAtom);
  const raceSum = useRef(null);

  // data
  const {data, isLoading, refetch} = useQuery<IDefaultResponse>({
    queryKey: ["getRaceOutline"],
    queryFn: () => apis.getRaceOutline(localNum),
  });

  //useEffect
  useEffect(() => {
    refetch();
  }, [localNum]);
  return (
    <SharedSection className="flex flex-col gap-20 bg-main_1 bg-cover bg-no-repeat h-full  py-32 ">
      <div className=" flex flex-col ">
        <div className="bg-white">
          <LocalBtn />
          <div className="flex flex-col gap-5 py-5">
            <div className="flex items-center p-4">
              <SharedTxt
                txtType="span"
                txt=""
                className="block w-2 h-10 bg-blue-400 mr-2"
              />
              <SharedTxt txtType="h2" txt="최근경주개요" />
            </div>
            {isLoading ? (
              <div className="flex justify-center items-center gap-5">
                <SharedTxt
                  txtType="span"
                  txt=""
                  className="animate-spin block w-2 h-5 bg-yellow-400"
                />
                <SharedTxt
                  txtType="h4"
                  txt="최근 10경기를 불러오는 중입니다."
                />
                <SharedTxt
                  txtType="span"
                  txt=""
                  className="animate-spin block w-2 h-5 bg-yellow-400"
                />
              </div>
            ) : data ? (
              <div className="relative flex justify-center items-center">
                <HomeSlideBtn
                  raceSum={raceSum}
                  dataLength={data.response.body.items.item.length}
                />
                <div className="flex  w-[1000px] overflow-x-hidden">
                  {data.response.body.items.item.map((item, i) => (
                    <RaceOutline key={i} refName={raceSum} item={item} />
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
                  txt="최근경기데이터가 업로드되지 않았거나 경기가 이뤄지지
              않았습니다."
                  className=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <RacingPlace />
    </SharedSection>
  );
}
