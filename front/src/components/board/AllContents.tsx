import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import {useEffect, useState} from "react";
import SharedTxt from "../shared/sharedTxt";
import {Link} from "react-router-dom";
import {
  IBoardDataType,
  IBoardTypes,
} from "../../type/apisTypes/boardTypes/board";
import {useDateMakerByNumber} from "../../hooks/\butilHook/useDateMakerByNumber";

export default function AllContents() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [allDocs, setAllDocs] = useState<IBoardDataType[] | null | undefined>();
  useEffect(() => {
    const db = getFirestore();
    const boardRef = collection(db, "board");
    const orderByQuery = query(boardRef, orderBy("createdAt", "desc"));
    const readBoadr = async () => {
      setIsLoading(false);
      const boardSnap = await getDocs(orderByQuery);
      if (!boardSnap.empty) {
        setAllDocs(
          boardSnap.docs.map((item) => item.data()) as IBoardDataType[]
        );
        setIsLoading(true);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    };
    readBoadr();
  }, []);

  return isLoading ? (
    <table className="w-full text-center">
      <thead className="bg-blue-300 h-10">
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {allDocs?.map((item: IBoardTypes, i) => (
          <tr key={item.id + i} className="h-10 border-b border-b-blue-600">
            <td>{allDocs.length - i}</td>
            <td>
              <Link
                to={`/board/${item.id}`}
                className="text-blue-600 hover:underline hover:underline-offset-4 active:text-fuchsia-600 visited:text-fuchsia-600"
              >
                {item.title}
              </Link>
            </td>
            <td>{item.writer}</td>
            <td className="font-medium">
              {useDateMakerByNumber(
                item.createdAt.seconds * 1000 +
                  item.createdAt.nanoseconds / 1000000,
                true
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div>
      {isError ? (
        <SharedTxt txtType="h3" txt="데이터를 불러오는데 에러가 났습니다." />
      ) : (
        <SharedTxt txtType="h3" txt="로딩중입니다." />
      )}
    </div>
  );
}
