import {
  getFirestore,
  addDoc,
  collection,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import useUser from "../../hooks/useUser";
import SharedSection from "../shared/sharedSection";
import SharedTxt from "../shared/sharedTxt";
import {useForm} from "react-hook-form";
export default function WriteBoard() {
  const {user} = useUser();
  const navigate = useNavigate();
  const db = getFirestore();
  const {register, handleSubmit, getValues} = useForm({
    defaultValues: {
      title: "",
      textContent: "",
    },
  });

  //fn
  const onSumbit = async () => {
    const {title, textContent} = getValues();
    const ok = confirm("게시물을 등록하시겠습니까?");
    if (ok) {
      try {
        const newDocRef = doc(collection(db, "board"));
        const newDocId = newDocRef.id;

        await setDoc(newDocRef, {
          id: newDocId,
          createdAt: new Date(),
          updateAt: new Date(),
          edit: false,
          writer: user?.email,
          title: title.trim(),
          textContent,
        });

        navigate("/board");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <SharedSection className="py-36 px-10 h-dvh">
      <div className="flex flex-col gap-10 bg-white p-10 rounded-lg h-full">
        <div className="flex items-center gap-5">
          <SharedTxt txtType="span" txt="" className="w-3 h-6 bg-blue-500" />
          <SharedTxt txtType="h5" txt="글쓰기" />
        </div>

        <form
          className="relative flex flex-col items-center gap-10"
          onSubmit={handleSubmit(onSumbit)}
        >
          <fieldset className="flex flex-col gap-10">
            <legend className="hidden">글쓰기</legend>
            <div className="flex items-baseline gap-10">
              <div className="flex items-center gap-5">
                <SharedTxt
                  txtType="span"
                  txt=""
                  className="w-3 h-6 bg-blue-500"
                />
                <label htmlFor="title">제목</label>
              </div>
              <input
                {...register("title")}
                id="title"
                type="text"
                name="title"
                placeholder="제목을 입력해주세요"
                className="border border-blue-200 rounded-lg p-5 w-full"
              />
            </div>

            <div className="flex items-baseline gap-10">
              <div className="flex items-center gap-5">
                <SharedTxt
                  txtType="span"
                  txt=""
                  className="w-3 h-6 bg-blue-500"
                />
                <label htmlFor="textContent">본문</label>
              </div>
              <textarea
                {...register("textContent")}
                id="textContent"
                name="textContent"
                rows={10}
                cols={100}
                placeholder="내용을 입력해주세요"
                className="border border-blue-200 rounded-lg p-5"
              ></textarea>
            </div>
            <div className="self-end flex items-center gap-10">
              <button
                type="submit"
                className="border border-blue-200 bg-indigo-100/75 rounded-lg px-3 py-1 "
              >
                확인
              </button>
              <button
                type="button"
                className="border border-blue-200 bg-indigo-100/75 rounded-lg px-3 py-1 "
                onClick={() => navigate("/board")}
              >
                취소
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </SharedSection>
  );
}
