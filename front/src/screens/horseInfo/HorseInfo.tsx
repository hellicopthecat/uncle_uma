import {useEffect, useState} from "react";
import HorseDetail from "../../components/horseInfo/HorseDetail";
import {IHorseInfo} from "../../type/apiTypes";
import SharedSection from "../../components/shared/sharedSection";
import HorseInfoSearch from "../../components/horseInfo/HorseInfoSearch/HorseInfoSearch";
import useHorseInfoHook from "../../hooks/hosreInfo/useHorseInfoHook";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
  searchHorseEndPageAtom,
  searchHorseRowAtom,
  searchHorseTotalPageAtom,
} from "../../atoms/searchHorse/searchHorse";
import HorseInfoPageBtn from "../../components/horseInfo/HorseInfoPageBtn/HorseInfoPageBtn";

export default function HorseInfo() {
  const row = useRecoilValue(searchHorseRowAtom);
  const [endPages, setEndPages] = useRecoilState(searchHorseEndPageAtom);
  const setTotalPage = useSetRecoilState(searchHorseTotalPageAtom);

  //custom hook
  const {data, isPending, mutate} = useHorseInfoHook();
  //useEffect
  useEffect(() => {
    if (data) {
      setTotalPage(data.response.body.totalCount);
      setEndPages(Math.ceil(Number(data.response.body.totalCount) / row));
    }
  }, [data, endPages]);

  return (
    <SharedSection className="flex justify-center items-center bg-horse_4 bg-cover h-dvh py-32 ">
      <HorseInfoSearch mutateFn={mutate} />
      <div className="flex flex-col justify-center items-center gap-5 backdrop-brightness-50 py-5 h-full w-full">
        {isPending ? (
          <div className="flex justify-center container mx-auto bg-white/50 border border-blue-100 p-5 m-5 h-[300px] rounded-lg">
            <div className="flex items-center justify-center text-2xl font-bold">
              <span className="text-center text-indigo-400 bg-indigo-400 mr-3 w-3 h-6">
                *
              </span>
              <p>말의 정보를 불러오고 있습니다.</p>
            </div>
          </div>
        ) : (
          <HorseDetail data={data?.response.body.items.item as IHorseInfo[]} />
        )}
        <HorseInfoPageBtn />
      </div>
    </SharedSection>
  );
}
