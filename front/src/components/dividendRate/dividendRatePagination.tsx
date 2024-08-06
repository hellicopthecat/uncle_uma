import {useRecoilState, useRecoilValue} from "recoil";
import {
  dividendPage,
  dividendRows,
} from "../../atoms/dividendRate/dividendRateAtom";
import {useState} from "react";
import {ChevLeft, ChevRight} from "../svg/Chevron";

export default function DividendRatePagigation({length}: {length: number}) {
  const [currentPage, setCurrentPage] = useRecoilState(dividendPage);
  const [minPage, setMinPage] = useState(0);
  const [maxPage, setMaxPage] = useState(10);
  const rows = useRecoilValue(dividendRows);
  const totalPage = Math.ceil(length / rows);
  const paginationArray = [];
  for (let page = 1; page <= totalPage; page++) {
    paginationArray.push(page);
  }
  const pagination = paginationArray.slice(minPage, maxPage);

  //fn
  const handleLeft = () => {
    setCurrentPage((prev) => prev - 1);
    setMinPage((prev) => prev - 1);
    setMaxPage((prev) => prev - 1);
    if (minPage <= 0) {
      setMinPage(0);
      setMaxPage(10);
      setCurrentPage(1);
    }
  };
  const handleRight = () => {
    setCurrentPage((prev) => prev + 1);
    setMinPage((prev) => prev + 1);
    setMaxPage((prev) => prev + 1);
    if (maxPage >= totalPage || currentPage >= totalPage) {
      setMinPage(totalPage - 10);
      setMaxPage(totalPage);
      setCurrentPage(totalPage);
    }
  };
  const handleCurrnet = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ul className="flex justify-center items-center gap-5">
      <li>
        <button onClick={() => handleLeft()} className="flex items-center">
          <ChevLeft width={30} height={30} color="black" />
        </button>
      </li>
      {pagination.map((page) => (
        <li key={page} className={currentPage === page ? "text-red-500" : ""}>
          <button onClick={() => handleCurrnet(page)}>{page}</button>
        </li>
      ))}
      <li>
        <button onClick={() => handleRight()} className="flex items-center">
          <ChevRight width={30} height={30} color="black" />
        </button>
      </li>
    </ul>
  );
}
