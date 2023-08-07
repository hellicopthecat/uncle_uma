import {useEffect, useState} from "react";
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {useNavigate} from "react-router-dom";
export default function LoginComp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mailCk, setMailCk] = useState(0);
  const [pwCk, setPwCk] = useState(0);
  const [atvLogiBtn, setAtvLoginBtn] = useState(0);

  useEffect(() => {
    const emailRegExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[a-zA-Z]*\.[a-zA-Z]{2,3}$/i;
    if (email === "") {
      setMailCk(0);
    } else if (emailRegExp.test(email)) {
      setMailCk(1);
    } else {
      setMailCk(2);
    }
    if (password === "") {
      setPwCk(0);
    } else {
      setPwCk(1);
    }
  }, [email, password]);

  const atv_logIn = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = loggedInUser.user;

      if (user) {
        // store.dispatch({type: "LOGGEDIN", payload: user});
        navigate("/");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log(errorCode);
      console.log(errorMsg);
    }
  };

  const google_logIn = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log(errorCode);
      console.log(errorMsg);
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h2 className="text-2xl text-center font-bold my-10">로그인</h2>
      <form
        onSubmit={atv_logIn}
        className="flex justify-center items-center border-4 border-blue-200 rounded-lg  p-10"
      >
        <legend className="hidden">로그인</legend>
        <fieldset className="drop-shadow-md">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-96 mb-5">
              <label htmlFor="email" className="mb-2">
                이메일
              </label>
              <input
                id="email"
                type="text"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="이메일을 입력해주세요"
                className="border-2 border-blue-100 transition ease-in-out focus:border-indigo-300 duration-300 rounded-lg pl-2 h-14 w-96 mb-1"
              />
              {mailCk === 2 ? (
                <small className="text-red-400/90 ml-1">
                  이메일 양식이 아닙니다.
                </small>
              ) : mailCk === 1 ? (
                <small className="text-green-400/90 ml-1">
                  이메일양식이 확인되었습니다.
                </small>
              ) : (
                <small className="text-gray-400/90 ml-1">
                  이메일 양식 검사중..
                </small>
              )}
            </div>
            <div className="flex flex-col w-96 mb-5">
              <label htmlFor="password" className="mb-2">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="비밀번호를 입력해주세요"
                className="border-2 border-blue-100 transition ease-in-out focus:border-indigo-300 duration-300 rounded-lg pl-2 h-14 w-96"
              />
            </div>
            <div className="flex flex-col w-96 mb-5">
              {mailCk === 0 && pwCk === 0 ? (
                <button
                  type="submit"
                  className="border-2 border-indigo-100 bg-gray-200 text-gray-500/75 py-3 my-2 rounded-lg"
                  disabled
                >
                  로그인
                </button>
              ) : (
                <button
                  type="submit"
                  className="border-2 border-indigo-300 bg-blue-100 transition ease-in-out hover:bg-blue-200 duration-300 py-3 my-2 rounded-lg"
                >
                  로그인
                </button>
              )}
              <button
                type="click"
                className="border-2 border-indigo-300 bg-blue-100 transition ease-in-out hover:bg-blue-200 duration-300 py-3 my-2 rounded-lg"
                onClick={google_logIn}
              >
                구글로그인
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
