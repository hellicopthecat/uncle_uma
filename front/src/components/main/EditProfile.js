import {getAuth, updateProfile} from "firebase/auth";
import {useEffect, useState} from "react";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {useLocation} from "react-router-dom";
export default function EditProfile() {
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser;
  const [dpName, setDisplayName] = useState("");
  const [pURL, setPhotoURL] = useState();
  const storage = getStorage();
  const imgRef = ref(storage, "image/" + pURL?.name);
  console.log(imgRef.fullPath);
  console.log(imgRef.name);
  console.log(imgRef.bucket);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await uploadBytes(imgRef, pURL);
      const response = await getDownloadURL(imgRef);
      await updateProfile(auth.currentUser, {
        displayName: dpName,
        photoURL: response,
      });
      alert("수정완료");
      window.location.href = location.pathname;
    } catch (error) {
      const errCode = error.code;
      const errMsg = error.message;
      console.log(errCode);
      console.log(errMsg);
    }
  };

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold text-center my-10">회원 정보 수정</h2>
      <div className="flex justify-center ">
        <form onSubmit={updateUser} className="border-2 p-5 rounded-md">
          <fieldset>
            <legend className="hidden">회원정보 수정</legend>
            <div className="flex flex-col mb-5">
              <label htmlFor="displayName" className="mb-3">
                회원 닉네임
              </label>
              <input
                id="displayName"
                type="text"
                name="displayName"
                placeholder={dpName}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
                className="border-2 border-blue-100 pl-5 h-10 rounded-md"
              />
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="photoURL" className="mb-3">
                프로필 사진
              </label>
              <input
                id="photoURL"
                type="file"
                name="photoURL"
                placeholder={pURL}
                onChange={(e) => {
                  setPhotoURL(e.target.files[0]);
                }}
                className=" file:bg-blue-100 file:border-0 file:rounded-md mb-5"
              />
            </div>

            <div className="flex justify-around my-5">
              <button type="submit" className="border-2 px-5 py-1 rounded-lg">
                확인
              </button>
              <button type="click" className="border-2 px-5 py-1 rounded-lg">
                취소
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
