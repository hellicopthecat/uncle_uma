import {useState, useEffect} from "react";

export default function DividendRate() {
  const year = new Date().getFullYear();
  const month =
    new Date().getMonth() < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  const date =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  const DATE = `${year}${month}${date}`;

  const [pNum, set_pNum] = useState(1);
  const [pRows, set_pRows] = useState("10");
  const [poolData, setPoolData] = useState("");
  const [rcDate, setRcDate] = useState(DATE);
  const [rcNum, setRcNum] = useState(1);
  const [localNum, setLocationNum] = useState(1);
  const [rateData, setRateData] = useState(null);
  const [isLoad, setIsLoad] = useState(true);
  const [totalCount, setTotalCount] = useState(null);

  const BASE_URL =
    "https://apis.data.go.kr/B551015/API160_1/integratedInfo_1?serviceKey=";
  const API_KEY = process.env.REACT_APP_OPEN_API_ENCODING_KEY;
  const query = `&pageNo=${pNum}&numOfRows=${pRows}&pool=${poolData}&rc_date=${rcDate}&rc_no=${rcNum}&meet=${localNum}&_type=json`;
  const URL = BASE_URL + API_KEY + query;

  const rcNumList = [];
  for (let i = 0; i < 16; i++) {
    rcNumList.push(
      <option defaultValue={i} key={i}>
        {i}
      </option>
    );
  }
  //블럭당 페이지 수
  const pBlock = 10;
  //전체 페이지 수
  let tPage = Math.ceil(totalCount / pRows);
  // 전체 블록수
  let tBlock = Math.ceil(tPage / pRows);
  //현재 블록번호
  let cBlock = Math.ceil(pNum / pBlock);
  //블럭당 시작페이지번호
  let s_pageNum = (cBlock - 1) * pBlock + 1;
  if (s_pageNum <= 0) {
    s_pageNum = 1;
  }
  // 블럭당 마지막 페이지번호
  let e_pageNum = cBlock * pBlock;
  if (e_pageNum > tPage) {
    e_pageNum = tPage;
  }
  //해당 페이지 글 시작 번호
  let d_start = (pNum - 1) * pRows;
  //해당 페이지 글 마지막 번호
  let d_end = (pNum - 1) * pRows;
  if (d_end > totalCount) {
    d_end = totalCount;
  }
  const pageNation = [];

  for (let print_num = s_pageNum; print_num <= e_pageNum; print_num++) {
    pageNation.push(
      <button
        type=""
        className={`border border-blue-300 border-x-0 p-1 mx-5 cursor-pointer ${
          pNum === print_num ? `text-red-500` : `text-black`
        }`}
        onClick={(e) => {
          set_pNum(print_num);
        }}
        key={print_num}
      >
        {print_num > e_pageNum ? e_pageNum : print_num}
      </button>
    );
  }

  const searchData = async (e) => {
    e.preventDefault();
    try {
      const response = await (await fetch(URL)).json();
      if (pNum > e_pageNum) {
        set_pNum(e_pageNum);
      }
      setTotalCount(response.response.body.totalCount);
      setRateData(response.response.body.items.item);
    } catch (error) {
      console.log(error);
      setRateData(null);
      setIsLoad(false);
    }
  };
  useEffect(() => {
    const searchData = async (e) => {
      try {
        const response = await (await fetch(URL)).json();
        if (pNum > e_pageNum) {
          set_pNum(e_pageNum);
        }
        setTotalCount(response.response.body.totalCount);
        setRateData(response.response.body.items.item);
      } catch (error) {
        console.log(error);
        setRateData(null);
        setIsLoad(false);
      }
    };
    searchData();
  }, [
    URL,
    pNum,
    poolData,
    rcDate,
    rcNum,
    localNum,
    pRows,
    totalCount,
    tBlock,
    e_pageNum,
  ]);
  console.log(poolData);
  return (
    <div className="container mx-auto bg-white p-10 my-20 rounded-lg">
      <div className="flex mx-24 my-10">
        <span className="w-2 h-8 bg-blue-200  text-blue-200 mr-3">*</span>
        <h2 className="text-2xl font-semibold mb-5">배당률 검색</h2>
      </div>
      <div className="flex lg:justify-center border border-x-0 border-t-0 border-blue-200 pb-2 mx-24 mb-5 ">
        <form onSubmit={searchData}>
          <fieldset className="flex lg:items-center lg:flex-row md:flex-col md:items-start sm:flex-col justify-between ">
            <legend className="hidden">배당률 검색</legend>

            <div className="flex items-center mx-3 md:my-2 sm:my-1">
              <label htmlFor="d_date" className=" whitespace-nowrap mr-5">
                날짜
              </label>
              <input
                id="d_date"
                type="date"
                name="d_date"
                min={`${year - 1}-${month}-${date}`}
                max={`${year}-${month}-${date}`}
                onChange={(e) => {
                  set_pNum(1);
                  setRcDate(e.target.value.replace(/-/gi, ""));
                }}
                className="border border-blue-400"
              />
            </div>
            <div className="flex items-center mx-3 md:my-2 sm:my-1">
              <label htmlFor="pool" className=" whitespace-nowrap mr-5">
                승식구분
              </label>
              <select
                id="pool"
                name="pool"
                defaultValue=""
                onChange={(e) => {
                  set_pNum(1);
                  setPoolData(e.target.value);
                }}
                className="border border-blue-400"
              >
                <option value={""}>선택</option>
                <option value={"WIN"}>단승식</option>
                <option value={"PLC"}>연승식</option>
                <option value={"QNL"}>복승식</option>
                <option value={"EXA"}>쌍승식</option>
                <option value={"QPL"}>복연승식</option>
                <option value={"TLA"}>삼복승식</option>
                <option value={"TRI"}>삼쌍승식</option>
              </select>
            </div>
            <div className="flex items-center mx-3 md:my-2 sm:my-1">
              <label htmlFor="rcNum" className=" whitespace-nowrap mr-5">
                경주번호
              </label>
              <select
                id="rcNum"
                name="rcNum"
                defaultValue={rcNum}
                onChange={(e) => {
                  set_pNum(1);
                  setRcNum(e.target.value);
                }}
                className="border border-blue-400"
              >
                {rcNumList}
              </select>
            </div>
            <div className="flex items-center mx-3 md:my-2 sm:my-1">
              <label htmlFor="rcLocal" className=" whitespace-nowrap mr-5">
                경기 지역
              </label>
              <select
                id="rcLocal"
                name="rcLocal"
                defaultValue={1}
                onChange={(e) => {
                  set_pNum(1);
                  setLocationNum(e.target.value);
                }}
                className="border border-blue-400"
              >
                <option value="1">서울</option>
                <option value="2">제주</option>
                <option value="3">부산</option>
              </select>
            </div>
            <div className="flex items-center mx-3 md:my-2 sm:my-1">
              <label htmlFor="pRow" className=" whitespace-nowrap mr-5">
                개수
              </label>
              <select
                id="pRow"
                name="pRow"
                defaultValue={10}
                onChange={(e) => {
                  set_pRows(e.target.value);
                }}
                className="border border-blue-400"
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-200 rounded-lg px-3 py-1 whitespace-nowrap"
            >
              검색
            </button>
          </fieldset>
        </form>
      </div>

      {rateData === undefined || poolData === "" ? (
        <p className="mx-24">
          날짜 및 기타 사항을 입력해주세요.
          <br />
          평일에는 경기가 없습니다. 최근 경기 데이터는 아직 업로드가 되지 않을
          수 있습니다.
        </p>
      ) : !isLoad || rateData === null ? (
        <p className="mx-24">
          데이터를 불러오는데 오류가 발생했습니다.
          <br />
          새로고침 버튼을 눌러주세요.
        </p>
      ) : (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5 p-5 mx-24">
          {poolData === "WIN" ? (
            <div className="lg:col-span-5 md:col-span-2 flex">
              <span className="w-2 h-8 bg-indigo-300  text-indigo-300 mr-3">
                *
              </span>
              <h2 className=" lg:text-2xl lg:font-semibold  md:text-md md:font-medium">
                단승식
              </h2>
            </div>
          ) : poolData === "PLC" ? (
            <div className="lg:col-span-5 md:col-span-2 flex">
              <span className="w-2 h-8 bg-indigo-300  text-indigo-300 mr-3">
                *
              </span>
              <h2 className=" lg:text-2xl lg:font-semibold  md:text-md md:font-medium">
                연승식
              </h2>
            </div>
          ) : poolData === "QNL" ? (
            <div className="lg:col-span-5 md:col-span-2 flex">
              <span className="w-2 h-8 bg-indigo-300  text-indigo-300 mr-3">
                *
              </span>
              <h2 className=" lg:text-2xl lg:font-semibold  md:text-md md:font-medium">
                복승식
              </h2>
            </div>
          ) : poolData === "EXA" ? (
            <div className="lg:col-span-5 md:col-span-2 flex">
              <span className="w-2 h-8 bg-indigo-300  text-indigo-300 mr-3">
                *
              </span>
              <h2 className=" lg:text-2xl lg:font-semibold  md:text-md md:font-medium">
                쌍승식
              </h2>
            </div>
          ) : poolData === "QPL" ? (
            <div className="lg:col-span-5 md:col-span-2 flex">
              <span className="w-2 h-8 bg-indigo-300  text-indigo-300 mr-3">
                *
              </span>
              <h2 className=" lg:text-2xl lg:font-semibold  md:text-md md:font-medium">
                복연승식
              </h2>
            </div>
          ) : poolData === "TLA" ? (
            <div className="lg:col-span-5 md:col-span-2 flex">
              <span className="w-2 h-8 bg-indigo-300  text-indigo-300 mr-3">
                *
              </span>
              <h2 className=" lg:text-2xl lg:font-semibold  md:text-md md:font-medium">
                삼복승식
              </h2>
            </div>
          ) : poolData === "TRI" ? (
            <div className="lg:col-span-5 md:col-span-2 flex">
              <span className="w-2 h-8 bg-indigo-300  text-indigo-300 mr-3">
                *
              </span>
              <h2 className=" lg:text-2xl lg:font-semibold  md:text-md md:font-medium">
                삼쌍승식
              </h2>
            </div>
          ) : (
            <h2>예상치못한 오류가 발생했습니다 새로고침 해주세요.</h2>
          )}
          {rateData
            .sort((a, b) => {
              return b.odds - a.odds;
            })
            .map((item, i) => (
              <div
                className="grid grid-cols-6 border border-blue-100 text-center shadow-lg rounded-lg p-3"
                key={i}
              >
                <div className="col-span-6 border border-indigo-200 border-x-0 py-3">
                  <h2>승식구분</h2>
                  <p>{item.pool}</p>
                </div>
                <div className="col-span-2 border border-indigo-200 border-x-0 py-3">
                  <h2>경기일자</h2>
                  <p className="lg:text-sm md:text-md">{item.rcDate}</p>
                </div>
                <div className="col-span-2 border border-indigo-200 border-x-0 py-3">
                  <h2>경마장</h2>
                  <p className="lg:text-sm md:text-md">{item.meet}</p>
                </div>
                <div className="col-span-2 border border-indigo-200 border-x-0 py-3">
                  <h2>경기번호</h2>
                  <p className="lg:text-sm md:text-md">제 {item.rcNo} 경기</p>
                </div>
                <div className="col-span-2 border border-indigo-200 border-x-0 py-3">
                  <h2>1착번호</h2>
                  {item.chulNo < 5 ? (
                    <span className="block border-2 border-blue-500 text-blue-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo} 번
                    </span>
                  ) : item.chulNo < 10 ? (
                    <span className="block border-2 border-red-500 text-red-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo} 번
                    </span>
                  ) : item.chulNo < 15 ? (
                    <span className="block border-2 border-green-500 text-green-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo} 번
                    </span>
                  ) : item.chulNO < 21 ? (
                    <span className="block border-2 border-yellow-500 text-yellow-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo} 번
                    </span>
                  ) : item.chulNo === 0 ? (
                    <span className="block border-2 border-gray-500 text-gray-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo} 번
                    </span>
                  ) : (
                    <span className="block border-2 border-fuchsia-500 text-fuchsia-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo} 번
                    </span>
                  )}
                </div>
                <div className="col-span-2 border border-indigo-200 border-x-0 py-3">
                  <h2>2착번호</h2>
                  {item.chulNo2 < 6 ? (
                    <span className="block border-2 border-blue-500 text-blue-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo2} 번
                    </span>
                  ) : item.chulNo2 < 11 ? (
                    <span className="block border-2 border-red-500 text-red-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo2} 번
                    </span>
                  ) : item.chulNo2 < 16 ? (
                    <span className="block border-2 border-green-500 text-green-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo2} 번
                    </span>
                  ) : item.chulNO2 < 21 ? (
                    <span className="block border-2 border-yellow-500 text-yellow-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo2} 번
                    </span>
                  ) : item.chulNo2 === 0 ? (
                    <span className="block border-2 border-gray-500 text-gray-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo2} 번
                    </span>
                  ) : (
                    <span className="block border-2 border-fuchsia-500 text-fuchsia-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo2} 번
                    </span>
                  )}
                </div>
                <div className="col-span-2 border border-indigo-200 border-x-0 py-3">
                  <h2>3착번호</h2>
                  {item.chulNo3 < 5 ? (
                    <span className="block border-2 border-blue-500 text-blue-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo3} 번
                    </span>
                  ) : item.chulNo3 < 10 ? (
                    <span className="block border-2 border-red-500 text-red-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo3} 번
                    </span>
                  ) : item.chulNo3 < 15 ? (
                    <span className="block border-2 border-green-500 text-green-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo3} 번
                    </span>
                  ) : item.chulNO3 < 21 ? (
                    <span className="block border-2 border-yellow-500 text-yellow-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo3} 번
                    </span>
                  ) : item.chulNo3 === 0 ? (
                    <span className="block border-2 border-gray-500 text-gray-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo3} 번
                    </span>
                  ) : (
                    <span className="block border-2 border-fuchsia-500 text-fuchsia-500 text-sm rounded-full p-2 m-2">
                      {item.chulNo3} 번
                    </span>
                  )}
                </div>
                <div className="col-span-6 border border-indigo-200 border-x-0 py-3">
                  <h2>배당률</h2>
                  <h2>{item.odds}</h2>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button
          type="click"
          onClick={() => set_pNum(pNum - 1)}
          disabled={pNum === 1}
          className="border border-blue-300 border-x-0 p-1 mx-5 cursor-pointer"
        >
          &lt;
        </button>
        {pageNation}
        <button
          type="click"
          onClick={() => set_pNum(pNum + 1)}
          disabled={pNum === tPage}
          className="border border-blue-300 border-x-0 p-1 mx-5 cursor-pointer"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
