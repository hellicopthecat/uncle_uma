import {FirebaseError} from "firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function useGoogleLoginHooks() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      navigate("/");
    } catch (error) {
      const {code} = error as FirebaseError;
      setError(code);
      console.log(code);
    }
  };
  return {handleGoogleLogin, error};
}
