import {useRecoilState, useRecoilValue} from "recoil";
import {
  searchHorseEndPageAtom,
  searchHorseMaxPageAtom,
  searchHorseMinPageAtom,
  searchHorsePaginationAtom,
  searchHorseTotalPageAtom,
} from "../../../atoms/searchHorse/searchHorse";
import {useEffect, useState} from "react";

export default function HorseInfoPageBtn() {
  const [currentPage, setCurrentPage] = useRecoilState(
    searchHorsePaginationAtom
  );
  const totalPage = useRecoilValue(searchHorseTotalPageAtom);
  const endPages = useRecoilValue(searchHorseEndPageAtom);
  //pagination
  const [minPage, setMinPage] = useRecoilState(searchHorseMinPageAtom);
  const [maxPage, setMaxPage] = useRecoilState(searchHorseMaxPageAtom);

  const paginationArray: number[] = [];
  if (totalPage) {
    for (let page = 1; page <= endPages; page++) {
      paginationArray.push(page);
    }
  }
  const pagination = paginationArray.slice(minPage, maxPage);
  const handleClickPrev = () => {
    if (minPage <= 0) {
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
    if (maxPage === endPages || currentPage >= endPages) {
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
    setMinPage(endPages <= 10 ? 0 : endPages - 10);
    setMaxPage(endPages);
    setCurrentPage(Number(endPages));
  };

  return (
    <ul className="flex justify-center">
      <button onClick={handleClickPrev} className="text-white">
        &larr;
      </button>
      {currentPage > 10 && (
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
      {currentPage !== endPages + 1 && (
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
  );
}
