import {FirebaseError} from "firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function useLoginHooks() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    } catch (error) {
      const {code} = error as FirebaseError;
      console.log(code);
      if (code === "auth/user-not-found") {
        setError("등록된 유저가 존재하지 않습니다.");
        alert("등록된 유저가 존재하지 않습니다.");
      } else if (code === "auth/wrong-password") {
        setError("잘못된 비밀번호입니다.");
        alert("잘못된 비밀번호입니다.");
      } else if (code === "auth/too-many-requests") {
        setError("로그인 실패횟수 초과입니다.");
        alert("로그인 실패횟수 초과입니다.");
      }
    }
  };
  return {handleLogin, error};
}
