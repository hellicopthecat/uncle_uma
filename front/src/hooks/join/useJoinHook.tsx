import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {IJoinInputTypes} from "../../type/inputTypes";
import {useState} from "react";
import {FirebaseError} from "firebase/app";

export default function useJoinHook() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const handleCreateUser = async ({
    email,
    password,
    nickNm,
  }: IJoinInputTypes) => {
    setLoading(true);
    const auth = getAuth();
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = createUser.user;
      await updateProfile(user, {displayName: nickNm});
      setLoading(undefined);
      if (user) {
        alert("가입완료");
        navigate("/");
      }
    } catch (error) {
      const {code} = error as FirebaseError;
      const emailExist = "auth/email-already-in-use";
      if (code === emailExist) {
        setError("이미 사용중인 이메일입니다.");
        alert("이미 사용중인 이메일입니다.");
      }
      setLoading(undefined);
      console.log(code);
    }
  };
  return {handleCreateUser, error, loading};
}
