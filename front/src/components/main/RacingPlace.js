import {Link} from "react-router-dom";

export default function RacingPlace() {
  return (
    <ul className="flex justify-around lg:flex-row md:flex-row sm:flex-col sm:items-center flex-col">
      <li className=" flex flex-col items-center border border-blue-300 bg-white lg:w-80 md:w-72 sm:w-96 w-36 sm:m-2 m-2 mx-auto p-5 rounded-lg">
        <h2 className="lg:text-2xl md:text-base sm:text-sm text-xs lg:font-bold md:font-normal sm:font-light lg:my-5 md:my-3 sm:my-1 my-1">
          서울경마
        </h2>
        <div className="park-card lg:w-44 md:w-36 sm:w-28 w-20 overflow-hidden rounded-full lg:my-5 md:my-3 sm:my-1">
          <img src="/img/main/horse_1.png" alt="" />
        </div>
        <Link to="">
          <button
            type="click"
            className="text-lg border border-blue-200 px-2 py-1 my-5 rounded-md"
          >
            바로가기
          </button>
        </Link>
      </li>
      <li className=" flex flex-col items-center border border-blue-300 bg-white lg:w-80 md:w-72 sm:w-96 w-36 sm:m-2 m-2 mx-auto p-5 rounded-lg">
        <h2 className="lg:text-2xl md:text-base sm:text-sm text-xs lg:font-bold md:font-normal sm:font-light lg:my-5 md:my-3 sm:my-1 my-1">
          제주경마
        </h2>
        <div className="park-card lg:w-44 md:w-36 sm:w-28 w-20 overflow-hidden rounded-full lg:my-5 md:my-3 sm:my-1">
          <img src="/img/main/horse_2.png" alt="" />
        </div>
        <Link to="">
          <button
            type="click"
            className="text-lg border border-blue-200 px-2 py-1 my-5 rounded-md"
          >
            바로가기
          </button>
        </Link>
      </li>
      <li className=" flex flex-col items-center border border-blue-300 bg-white lg:w-80 md:w-72 sm:w-96 w-36 sm:m-2 m-2 mx-auto p-5 rounded-lg">
        <h2 className="lg:text-2xl md:text-base sm:text-sm text-xs lg:font-bold md:font-normal sm:font-light lg:my-5 md:my-3 sm:my-1 my-1">
          부산경남경마
        </h2>
        <div className="park-card lg:w-44 md:w-36 sm:w-28 w-20 overflow-hidden rounded-full lg:my-5 md:my-3 sm:my-1">
          <img src="/img/main/horse_3.png" alt="" />
        </div>
        <Link to="">
          <button
            type="click"
            className="text-lg border border-blue-200 px-2 py-1 my-5 rounded-md"
          >
            바로가기
          </button>
        </Link>
      </li>
    </ul>
  );
}
