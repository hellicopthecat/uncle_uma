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
    <div className="relative container mx-auto flex flex-col p-10 pb-36">
      <div className="bg-white pb-36  rounded-lg">
        <div className="flex mx-24 my-10">
          <span className="w-2 text-center bg-blue-400 text-blue-400 mr-3">
            *
          </span>
          <h2 className="text-2xl font-bold">자유 게시판</h2>
        </div>
        <div className="flex justify-center border border-blue-200 py-10 mx-24 rounded-md">
          <table className="border-separate border-spacing-y-5 w-11/12">
            <thead>
              <tr className="text-center border-blue-100">
                <th className="w-48">번호</th>
                <th className="w-56">제목</th>
                <th className="w-20">작성자</th>
                <th className="w-60">작성일</th>
              </tr>
            </thead>
            <tbody>
              {boardTxt.map((item, i) => (
                <tr
                  className="text-center hover:bg-blue-100 hover:transition hover:ease-in-out duration-300"
                  key={item.id}
                >
                  <td>
                    <h2>{boardTxt.length - i}</h2>
                  </td>
                  <td>
                    <Link
                      to={item.id}
                      state={{item}}
                      className="font-semibold text-blue-700 active:text-red-300 hover:text-red-300 "
                    >
                      <h2 className="truncate text-ellipsis overflow-hidden w-56 mx-auto">
                        {item.title}
                      </h2>
                    </Link>
                  </td>
                  <td>{item.writer}</td>
                  <td>
                    {item.d_date}
                    <br />
                    {item.hour}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {currentUser ? (
          <div className="flex absolute bottom-48 -right-48 w-96 my-5">
            <Link
              className="border border-blue-200 px-2 py-1 rounded-md"
              to="write"
            >
              글쓰기
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
