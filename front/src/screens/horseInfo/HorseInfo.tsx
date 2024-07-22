import {useEffect, useState} from "react";
import HorseDetail from "../../components/horseInfo/HorseDetail";
import {IHorseInfo} from "../../type/apiTypes";
import SharedSection from "../../components/shared/sharedSection";
import HorseInfoSearch from "../../components/horseInfo/HorseInfoSearch/HorseInfoSearch";
import useHorseInfoHook from "../../hooks/hosreInfo/useHorseInfoHook";
import {useRecoilState, useRecoilValue} from "recoil";
import {
  searchHorsePaginationAtom,
  searchHorseRowAtom,
} from "../../atoms/searchHorse/searchHorse";

export default function HorseInfo() {
  //globla state
  const [currentPage, setCurrentPage] = useRecoilState(
    searchHorsePaginationAtom
  );
  const row = useRecoilValue(searchHorseRowAtom);
  //state
  const [endPages, setEndPages] = useState(1);
  const [totalPage, setTotalPage] = useState<number>();
  //custom hook
  const {data, isPending, mutate} = useHorseInfoHook();
  //useEffect
  useEffect(() => {
    setTotalPage(data?.response.body.totalCount);
    setEndPages(Math.floor(Number(data?.response.body.totalCount) / row));
  }, [data, endPages]);

  //pagination
  const [minPage, setMinPage] = useState(0);
  const [maxPage, setMaxPage] = useState(10);
  const paginationArray: number[] = [];
  if (totalPage) {
    for (let page = 0; page <= endPages; page++) {
      paginationArray.push(page + 1);
    }
  }
  const pagination = paginationArray.slice(minPage, maxPage);
  const handleClickPrev = () => {
    if (minPage === 0) {
      setMinPage(0);
      setMaxPage(10);
      setCurrentPage(1);
    } else {
      setMinPage((prev) => prev - 1);
      setMaxPage((prev) => prev - 1);
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleClickNext = () => {
    if (maxPage === endPages && currentPage === endPages) {
      setMinPage(endPages - 10);
      setMaxPage(endPages);
      setCurrentPage(endPages);
    } else {
      setMinPage((prev) => prev + 1);
      setMaxPage((prev) => prev + 1);
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handleFirstClick = () => {
    setMinPage(0);
    setMaxPage(10);
    setCurrentPage(1);
  };
  const handleLastClick = () => {
    setMinPage(endPages - 10);
    setMaxPage(endPages);
    setCurrentPage(Number(endPages));
  };

  return (
    <SharedSection className="flex justify-center items-center bg-horse_4 bg-cover h-dvh py-32 ">
      <div className="flex flex-col justify-center items-center backdrop-brightness-50 h-full w-full">
        <HorseInfoSearch mutateFn={mutate} />
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

        <ul className="flex justify-center">
          <button onClick={handleClickPrev} className="text-white">
            &larr;
          </button>
          {currentPage !== 1 && (
            <li
              className={`border-2   bg-white cursor-pointer text-center w-[50px]  mx-2 rounded-full ${
                Number(currentPage) === 1
                  ? `border-red-500  text-red-400`
                  : "border-blue-300  text-blue-400"
              }`}
              onClick={handleFirstClick}
            >
              First
            </li>
          )}
          {pagination.map((num) => (
            <li
              className={`border-2   bg-white cursor-pointer text-center w-[50px]  mx-2 rounded-full ${
                Number(currentPage) === num
                  ? `border-red-500  text-red-400`
                  : "border-blue-300  text-blue-400"
              }`}
              key={num}
              onClick={() => {
                setCurrentPage(num);
              }}
            >
              {num}
            </li>
          ))}
          {currentPage !== endPages && (
            <li
              className={`border-2   bg-white cursor-pointer text-center w-[50px]  mx-2 rounded-full ${
                Number(currentPage) === endPages
                  ? `border-red-500  text-red-400`
                  : "border-blue-300  text-blue-400"
              }`}
              onClick={handleLastClick}
            >
              Last
            </li>
          )}
          <button onClick={handleClickNext} className="text-white">
            &rarr;
          </button>
        </ul>
      </div>
    </SharedSection>
  );
}
