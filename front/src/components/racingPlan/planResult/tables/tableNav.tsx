import {useRecoilState, useRecoilValue} from "recoil";
import {
  racingPlanCurrentPage,
  racingPlanMinPage,
  racingPlanMaxPage,
  racingPlanEndPage,
} from "../../../../atoms/racingPlan/racingPlanAtoms";
import {useEffect} from "react";
import {
  ChevLeft,
  ChevRight,
  DoubleChevLeft,
  DoubleChevRight,
} from "../../../svg/Chevron";

export default function TableNav({totalpage}: {totalpage: number}) {
  const [currentPage, setCurrentPage] = useRecoilState(racingPlanCurrentPage);
  const [minPage, setMinPage] = useRecoilState(racingPlanMinPage);
  const [maxPage, setMaxPage] = useRecoilState(racingPlanMaxPage);
  const endPage = useRecoilValue(racingPlanEndPage);
  //pagination
  const paginationArray: number[] = [];
  for (let page = 1; page <= endPage; page++) {
    paginationArray.push(page);
  }
  const pagination = paginationArray.slice(minPage, maxPage);

  //fn
  const handleLeft = () => {
    setCurrentPage((prev) => prev - 1);
    setMinPage((prev) => prev - 1);
    setMaxPage((prev) => prev - 1);
    if (currentPage <= 1) {
      setCurrentPage(1);
      setMinPage(0);
      setMaxPage(10);
    }
    if (minPage <= 0) {
      setMinPage(0);
    }
    if (maxPage >= 10) {
      setMaxPage(10);
    }
  };

  const handleRight = () => {
    setCurrentPage((prev) => prev + 1);
    setMinPage((prev) => prev + 1);
    setMaxPage((prev) => prev + 1);
    if (maxPage >= endPage && currentPage >= endPage) {
      setMinPage(endPage - 10);
      setMaxPage(endPage);
      setCurrentPage(endPage);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const goFirst = () => {
    setMinPage(0);
    setMaxPage(endPage > 10 ? 10 : endPage);
    setCurrentPage(1);
  };
  const goEnd = () => {
    setMinPage(endPage < 10 ? 0 : endPage - 10);
    setMaxPage(endPage);
    setCurrentPage(endPage);
  };

  return (
    <ul className="flex justify-center items-center gap-5">
      {currentPage !== 1 && (
        <li>
          <button className="flex items-center" onClick={() => goFirst()}>
            <DoubleChevLeft />
          </button>
        </li>
      )}
      <li>
        <button className="flex items-center" onClick={() => handleLeft()}>
          <ChevLeft />
        </button>
      </li>
      {pagination.map((page) => (
        <li
          key={page}
          className={`${currentPage === page ? "text-red-500" : "text-white"}`}
        >
          <button onClick={() => handlePageClick(page)}>{page}</button>
        </li>
      ))}
      <li>
        <button className="flex items-center" onClick={() => handleRight()}>
          <ChevRight />
        </button>
      </li>
      {currentPage !== endPage && (
        <li>
          <button className="flex items-center" onClick={() => goEnd()}>
            <DoubleChevRight />
          </button>
        </li>
      )}
    </ul>
  );
}
