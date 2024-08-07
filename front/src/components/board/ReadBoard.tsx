import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import SharedTxt from "../shared/sharedTxt";
import SharedSection from "../shared/sharedSection";
import useUser from "../../hooks/useUser";
import {IBoardDataType} from "../../type/apisTypes/boardTypes/board";
import {useDateMakerByNumber} from "../../hooks/\butilHook/useDateMakerByNumber";

export default function ReadBoard() {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItem] = useState<IBoardDataType | undefined>();
  const [notFound, setNotFound] = useState(false);
  const [editCont, setEditCont] = useState(false);
  const [editDesc, setEditDesc] = useState("");
  const {boardId} = useParams<{boardId: string}>();
  const navigate = useNavigate();
  const {user} = useUser();
  const db = getFirestore();
  const boardRef = doc(db, "board", `${boardId}`);
  useEffect(() => {
    const readDoc = async () => {
      setIsLoading(true);
      try {
        const targetDoc = await getDoc(boardRef);
        if (!targetDoc.exists()) {
          setIsLoading(false);
          setNotFound(true);
        } else {
          setItem(targetDoc.data() as IBoardDataType);
          setIsLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    readDoc();
  }, []);

  //fn
  const deleteContents = async () => {
    const ok = confirm("삭제하시겠습니까?");
    if (ok) {
      try {
        await deleteDoc(boardRef);
        navigate("/board");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const updateContents = async () => {
    const ok = confirm("수정하시겠습니까?");
    if (ok) {
      try {
        await updateDoc(boardRef, {
          textContent: editDesc,
          updateAt: Date.now(),
          edit: true,
        });
        setEditCont(false);
        navigate("/board");
      } catch (error) {
        console.log(error);
      }
    } else {
      setEditCont(false);
    }
  };

  return (
    <SharedSection className="px-10 py-36 h-dvh">
      <div className="flex flex-col gap-10 bg-white p-16 rounded-lg h-full relative">
        {isLoading && (
          <div className="flex items-center gap-5 ">
            <SharedTxt txtType="span" txt="" className="w-2 h-6 bg-blue-500" />
            <SharedTxt txtType="h3" txt="로딩중..." />
          </div>
        )}
        {items && (
          <>
            <div className="flex items-center gap-5 ">
              <SharedTxt
                txtType="span"
                txt=""
                className="w-2 h-6 bg-blue-500"
              />
              <SharedTxt txtType="h3" txt={items?.title + ""} />
            </div>

            <div className=" flex items-center  gap-10">
              <div className="flex items-center gap-5">
                <SharedTxt
                  txtType="span"
                  txt=""
                  className="w-2 h-5 bg-blue-500"
                />
                <SharedTxt txtType="h5" txt="작성자" />
              </div>
              <SharedTxt txtType="h5" txt={items?.writer + ""} />
            </div>

            <div className=" flex items-center gap-10">
              <div className="flex items-center gap-5">
                <SharedTxt
                  txtType="span"
                  txt=""
                  className="w-2 h-5 bg-blue-500"
                />
                <SharedTxt txtType="h5" txt="작성일" />
              </div>
              <SharedTxt
                txtType="h5"
                txt={useDateMakerByNumber(
                  Number(items?.createdAt.seconds) * 1000 +
                    Number(items?.createdAt.nanoseconds) / 1000000
                )}
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <SharedTxt
                  txtType="span"
                  txt=""
                  className="w-2 h-5 bg-blue-500"
                />
                <SharedTxt txtType="h5" txt="내용" />
              </div>
              {!editCont ? (
                <div>
                  <SharedTxt txtType="h5" txt={items?.textContent + ""} />
                </div>
              ) : (
                <textarea
                  className="border border-blue-100 p-5 pb-10 w-full"
                  rows={5}
                  defaultValue={items?.textContent}
                  onChange={(e) => {
                    setEditDesc(e.target.value);
                  }}
                ></textarea>
              )}
            </div>
            {items?.writer === user?.email && (
              <div className=" flex justify-end py-5 absolute bottom-5 right-12">
                {!editCont ? (
                  <button
                    type="button"
                    className="border border-blue-400 bg-indigo-100 rounded-lg px-3 py-1 ml-3"
                    onClick={() => setEditCont(true)}
                  >
                    수정
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={updateContents}
                      className="border border-blue-400 bg-indigo-100 rounded-lg px-3 py-1 ml-3"
                    >
                      확인
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditCont(false)}
                      className="border border-blue-400 bg-indigo-100 rounded-lg px-3 py-1 ml-3"
                    >
                      취소
                    </button>
                  </>
                )}
                <button
                  type="button"
                  className="border border-blue-400 bg-indigo-100 rounded-lg px-3 py-1 ml-3"
                  onClick={deleteContents}
                >
                  삭제
                </button>
              </div>
            )}
          </>
        )}
        {notFound && (
          <div className="flex items-center gap-5 ">
            <SharedTxt txtType="span" txt="" className="w-2 h-6 bg-blue-500" />
            <SharedTxt txtType="h3" txt="해당 게시물은 존재하지 않아요." />
          </div>
        )}
      </div>
    </SharedSection>
  );
}
