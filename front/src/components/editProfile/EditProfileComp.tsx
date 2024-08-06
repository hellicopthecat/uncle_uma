import {getAuth, updateProfile} from "firebase/auth";
import {useEffect} from "react";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {useNavigate, useParams} from "react-router-dom";
import useUser from "../../hooks/useUser";
import {useForm} from "react-hook-form";
import SharedTxt from "../shared/sharedTxt";
import Usersvg from "../svg/Usersvg";
export default function EditProfileComp() {
  const {uid} = useParams<{uid: string}>();
  const navigate = useNavigate();
  const {user} = useUser();
  const {register, handleSubmit, getValues, setValue} = useForm<{
    displayName: string;
    photoURL: FileList;
  }>({
    defaultValues: {
      displayName: "",
      photoURL: undefined,
    },
  });
  const auth = getAuth();
  const storage = getStorage();
  //fn
  const fileNameForm = (name: string) => {
    const extension = name.split(".").pop();
    return `avatar.${extension}`;
  };

  const onSubmit = async () => {
    const {displayName, photoURL} = getValues();
    const imgRef = ref(
      storage,
      `image/${uid}/avatar/${fileNameForm(photoURL[0].name)}`
    );
    try {
      if (photoURL && photoURL.length > 0 && auth.currentUser && displayName) {
        await uploadBytes(imgRef, photoURL[0]);
        const getPhotoURL = await getDownloadURL(imgRef);
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL: getPhotoURL,
        });
        navigate(0);
      }
      if (auth.currentUser && displayName) {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        navigate(0);
      }
      if (photoURL && photoURL.length > 0 && auth.currentUser) {
        await uploadBytes(imgRef, photoURL[0]);
        const getPhotoURL = await getDownloadURL(imgRef);
        await updateProfile(auth.currentUser, {
          photoURL: getPhotoURL,
        });
        navigate(0);
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    if (user) {
      setValue("displayName", user.displayName ? user.displayName : "");
    }
  }, [user]);
  return (
    <div className="flex flex-col gap-10 bg-white h-full rounded-md p-10">
      <div className="flex items-center gap-5">
        <SharedTxt txtType="span" txt="" className="w-3 h-10 bg-blue-500" />
        <SharedTxt txtType="h3" txt="회원정보수정" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col gap-10">
          <legend className="hidden">회원정보수정</legend>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="displayName"
              className="flex items-center gap-5 text-nowrap"
            >
              <SharedTxt
                txtType="span"
                txt=""
                className="w-3 h-7 bg-blue-400"
              />
              <SharedTxt txtType="h4" txt="닉네임" />
            </label>
            <input
              {...register("displayName")}
              id="displayName"
              type="text"
              name="displayName"
              defaultValue={user?.displayName || ""}
              placeholder={user?.displayName || "별명을 입력해주세요."}
              className="border-2 border-blue-100 pl-5 h-10 rounded-md w-96"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="photoURL"
                className="flex items-center gap-5 text-nowrap"
              >
                <SharedTxt
                  txtType="span"
                  txt=""
                  className="w-3 h-7 bg-blue-400"
                />
                <SharedTxt txtType="h4" txt="프로필사진" />
              </label>
              <input
                {...register("photoURL")}
                id="photoURL"
                type="file"
                name="photoURL"
                className="file:bg-blue-400 file:border-0 file:rounded-md file:py-2 file:px-3"
                multiple={false}
              />
            </div>
            {user?.photoURL ? (
              <div>
                <img
                  src={user.photoURL}
                  alt="아바타이미지"
                  width={50}
                  height={50}
                />
              </div>
            ) : (
              <div className="size-[50px]">
                <Usersvg color="black" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-5 *:transition *:ease-in-out *:duration-300">
            <button
              type="submit"
              className="px-5 py-1 rounded-lg  bg-blue-500 hover:bg-blue-300 "
            >
              확인
            </button>
            <button
              type="button"
              className="px-5 py-1 rounded-lg  bg-blue-500 hover:bg-blue-300 "
              onClick={() => navigate("/")}
            >
              취소
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
