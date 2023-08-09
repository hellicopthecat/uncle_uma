import {getAuth} from "firebase/auth";
import {deleteDoc, doc, getFirestore, updateDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export default function ReadBoard() {
  const location = useLocation();
  const param = useParams();
  const navigate = useNavigate();
  const items = location.state.item;

  const auth = getAuth();
  const db = getFirestore();
  const currentUser = auth.currentUser;
  const boardRef = doc(db, "board", param.id);

  const [editCont, setEditCont] = useState(false);
  const [editTitle, setEditTitle] = useState(items.title);
  const [editDesc, setEditDesc] = useState(items.textContent);

  const deleteContents = async () => {
    try {
      await deleteDoc(boardRef);
      navigate("/board");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContents = async () => {
    try {
      await updateDoc(boardRef, {
        title: editTitle,
        textContent: editDesc,
      });
      navigate("/board");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [auth, db, boardRef]);

  return (
    <div className="container mx-auto border">
      <div className="grid grid-cols-5 p-16">
        {!editCont ? (
          <h2 className="col-span-5 text-xl font-semibold border-2 border-x-0 border-t-0 border-blue-100 pb-3 mb-5">
            <span className="w-2 bg-blue-400 text-blue-400 mr-5">*</span>{" "}
            {items.title}
          </h2>
        ) : (
          <div className="flex items-center mb-5">
            <span className="w-2 h-6 bg-blue-400 text-blue-400 mr-5">*</span>
            <input
              type="text"
              name="title"
              placeholder={items.title}
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
              className="border border-blue-100 w-96"
            />
          </div>
        )}

        <div className="col-span-5 flex mb-5">
          <p className="mx-10 ">
            <span className="bg-blue-200 text-blue-200 mr-2">*</span>작성자
          </p>
          <span>{items.writer}</span>
        </div>
        <div className="col-span-5 flex mb-5">
          <p className="mx-10 ">
            <span className="bg-blue-200 text-blue-200 mr-2">*</span>작성일
          </p>
          <span>
            {items.d_date} {items.hour}
          </span>
        </div>
        <div className="col-span-5">
          <span className="block text-lg font-medium my-5">
            <span className="bg-blue-400 text-blue-400 mr-5">*</span>내용
          </span>
          {!editCont ? (
            <p className="border border-blue-200 p-5 pb-10">
              {items.textContent}
            </p>
          ) : (
            <textarea
              className="border border-blue-100 p-5 pb-10"
              cols={100}
              rows={5}
              value={editDesc}
              onChange={(e) => {
                setEditDesc(e.target.value);
              }}
            >
              {items.textContent}
            </textarea>
          )}
        </div>
        {currentUser && items.writer === currentUser.email ? (
          <div className="col-span-5 flex justify-end py-5">
            {!editCont ? (
              <button
                type="click"
                className="border border-blue-400 bg-indigo-100 rounded-lg px-3 py-1 ml-3"
                onClick={() => {
                  setEditCont(true);
                }}
              >
                수정
              </button>
            ) : (
              <>
                <button
                  type="click"
                  onClick={async () => {
                    await updateContents();
                    setEditCont(false);
                  }}
                  className="border border-blue-400 bg-indigo-100 rounded-lg px-3 py-1 ml-3"
                >
                  확인
                </button>
                <button
                  type="click"
                  onClick={() => {
                    setEditCont(false);
                  }}
                  className="border border-blue-400 bg-indigo-100 rounded-lg px-3 py-1 ml-3"
                >
                  취소
                </button>
              </>
            )}
            <button
              type="click"
              className="border border-blue-400 bg-indigo-100 rounded-lg px-3 py-1 ml-3"
              onClick={deleteContents}
            >
              삭제
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
