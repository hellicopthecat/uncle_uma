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
    <div className="flex flex-col items-center relative ">
      <div>
        <h2 className="text-2xl font-bold my-5">자유 게시판</h2>
      </div>
      <div className="flex justify-center border border-blue-200 py-10 mx-24 rounded-md">
        <table className="border-separate border-spacing-x-36 border-spacing-y-5 w-11/12">
          <thead>
            <tr className="text-center border-blue-100">
              <th className="w-14">번호</th>
              <th className="w-60">제목</th>
              <th className="w-20">작성자</th>
              <th className="w-60">작성일</th>
            </tr>
          </thead>
          <tbody>
            {boardTxt.map((item, i) => (
              <tr className=" text-center" key={item.id}>
                <td>
                  <h2>{boardTxt.length - i}</h2>
                </td>
                <td>
                  <Link
                    to={item.id}
                    state={{item}}
                    className=" underline underline-offset-4 text-blue-700 active:text-red-300"
                  >
                    <h2>{item.title}</h2>
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
        <div className="flex absolute  -bottom-20 -right-56 w-96 my-5">
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
