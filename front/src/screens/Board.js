import {getAuth} from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export default function Board() {
  const db = getFirestore();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [boardTxt, setBoardTxt] = useState([]);
  useEffect(() => {
    const readDoc = async () => {
      const boardRef = collection(db, "board");
      const docSnap = await getDocs(query(boardRef, orderBy("time", "desc")));
      setBoardTxt(docSnap.docs.map((item) => ({...item.data(), id: item.id})));
    };
    readDoc();
  }, [db]);

  return (
    <div className="relative container mx-auto flex flex-col bg-white  p-10 py-20 my-10 rounded-lg">
      <div className="flex mx-24 mb-10">
        <span className="w-2 text-center bg-blue-400 text-blue-400 mr-3">
          *
        </span>
        <h2 className="text-2xl font-bold">자유 게시판</h2>
      </div>
      <div className="flex justify-center border border-blue-200 py-10 mx-24 my-10 rounded-md ">
        <div className="grid grid-rows-1 w-full mx-10">
          <ul className="flex justify-around text-center bg-blue-200 py-4">
            <li className="whitespace-nowrap">번호</li>
            <li className="whitespace-nowrap">제목</li>
            <li className="whitespace-nowrap">작성자</li>
            <li className="whitespace-nowrap">작성일</li>
          </ul>

          {boardTxt.map((item, i) => (
            <div
              className="grid grid-cols-4 justify-around items-center text-center border border-x-0 border-t-0 border-b-blue-300 hover:bg-blue-100 hover:transition hover:ease-in-out duration-300 py-1"
              key={item.id}
            >
              <h2>{boardTxt.length - i}</h2>

              <Link
                to={item.id}
                state={{item}}
                className="font-semibold text-blue-700 active:text-red-300 hover:text-red-300 "
              >
                <h2 className="truncate text-ellipsis overflow-hidden  mx-auto">
                  {item.title}
                </h2>
              </Link>

              <p>{item.writer}</p>
              <p>
                {item.d_date}
                <br />
                {item.hour}
              </p>
            </div>
          ))}
        </div>
      </div>
      {currentUser ? (
        <div className="flex absolute bottom-0 -right-44 w-96 my-5">
          <Link
            className="border border-blue-200 px-2 py-1 rounded-md"
            to="write"
          >
            글쓰기
          </Link>
        </div>
      ) : null}
    </div>
  );
}
