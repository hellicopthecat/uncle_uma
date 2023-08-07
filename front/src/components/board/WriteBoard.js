import {getAuth} from "firebase/auth";
import {getFirestore, addDoc, collection} from "firebase/firestore";
import {useState} from "react";
export default function WriteBoard() {
  const db = getFirestore();
  const auth = getAuth();
  const cUser = auth.currentUser;
  console.log(cUser);
  const [bTitle, setBTitle] = useState();
  const [bContext, setBContext] = useState();
  const addArticle = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "board"), {
        edit: false,
        indexNum: 2,
        textContent: bContext,
        time: new Date(),
        title: bTitle,
        writer: cUser.email,
      });
      window.location.href = "/board";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto">
      <h1>글쓰기</h1>
      <form className="flex justify-center" onSubmit={addArticle}>
        <fieldset>
          <legend className="hidden">글쓰기</legend>
          <div className="flex flex-col">
            <label htmlFor="">제목</label>
            <input
              id=""
              type="text"
              name=""
              placeholder="제목을 입력해주세요"
              onChange={(e) => {
                setBTitle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">본문</label>
            <textarea
              id=""
              name=""
              rows=""
              cols=""
              placeholder="내용을 입력해주세요"
              onChange={(e) => {
                setBContext(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <button type="submit">확인</button>
            <button type="click">취소</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
