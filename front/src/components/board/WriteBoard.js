import {getAuth} from "firebase/auth";
import {getFirestore, addDoc, collection} from "firebase/firestore";
import {useState} from "react";
export default function WriteBoard() {
  const db = getFirestore();
  const auth = getAuth();
  const cUser = auth.currentUser;
  const [bTitle, setBTitle] = useState();
  const [bContext, setBContext] = useState();
  const year = new Date().getFullYear();
  const month =
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  const date =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  const hour = new Date().getHours();
  const minutue = new Date().getMinutes();
  const sec =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();

  const addArticle = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "board"), {
        edit: false,
        d_date: `${year}-${month}-${date}`,
        hour: `${hour}:${minutue}:${sec}`,
        time: new Date(),
        writer: cUser.email,
        title: bTitle,
        textContent: bContext,
      });
      window.location.href = "/board";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto border">
      <div className="grid grid-cols-5 p-16">
        <h2 className="col-span-5 text-xl font-semibold border-2 border-x-0 border-t-0 border-blue-100 pb-3 mb-10">
          <span className="bg-blue-400 text-blue-400 mr-5">*</span>글쓰기
        </h2>
        <div className="col-span-5">
          <form className=" relative flex justify-center" onSubmit={addArticle}>
            <fieldset>
              <legend className="hidden">글쓰기</legend>
              <div className="flex flex-col">
                <label htmlFor="title" className="mb-5">
                  <span className="bg-blue-200 text-blue-200 mr-2">*</span>제목
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="제목을 입력해주세요"
                  onChange={(e) => {
                    setBTitle(e.target.value);
                  }}
                  className="border border-blue-200 rounded-lg p-2 pl-5"
                />
              </div>
              <div className="flex flex-col py-5">
                <label htmlFor="contentsText" className="mb-5">
                  <span className="bg-blue-200 text-blue-200 mr-2">*</span> 본문
                </label>
                <textarea
                  id="contentsText"
                  name="contentsText"
                  rows="10"
                  cols="100"
                  placeholder="내용을 입력해주세요"
                  onChange={(e) => {
                    setBContext(e.target.value);
                  }}
                  className="border border-blue-200 rounded-lg p-5"
                ></textarea>
              </div>
              <div className="absolute right-36">
                <button
                  type="submit"
                  className="border border-blue-200 bg-indigo-100/75 rounded-lg px-3 py-1 ml-5"
                >
                  확인
                </button>
                <button
                  type="click"
                  className="border border-blue-200 bg-indigo-100/75 rounded-lg px-3 py-1 ml-5"
                  onClick={() => {
                    window.location.pathname = "/board";
                  }}
                >
                  취소
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}