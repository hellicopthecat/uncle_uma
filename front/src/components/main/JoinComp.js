import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

export default function JoinComp() {
  const [email, setEmial] = useState("");
  const [nickNm, setNickNm] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [userNm, setUserNm] = useState("");

  const [errMsg, setErrMsg] = useState(0);
  const [errNm, setErrNm] = useState(0);
  const [errPw, setErrPw] = useState(0);
  const [errPwCk, setErrPwCk] = useState(0);
  const [errUnm, setErrUnm] = useState(0);
  const [confirm, setConfirm] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const emailRegExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[a-zA-Z]*\.[a-zA-Z]{2,3}$/i;
    if (email === "") {
      setErrMsg(0);
    } else if (emailRegExp.test(email)) {
      setErrMsg(1);
    } else {
      setErrMsg(2);
    }

    const nkNmRegExp = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z]){5,12}$/i;
    if (nickNm === "") {
      setErrNm(0);
    } else if (nkNmRegExp.test(nickNm)) {
      setErrNm(1);
    } else {
      setErrNm(2);
    }
    const pwRegExp =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$])[a-zA-z\d!@#$]{5,20}$/i;
    if (password === "") {
      setErrPw(0);
    } else if (pwRegExp.test(password)) {
      setErrPw(1);
    } else {
      setErrPw(2);
    }

    if (pwCheck === "") {
      setErrPwCk(0);
    } else if (password === pwCheck) {
      setErrPwCk(1);
    } else {
      setErrPwCk(2);
    }
    const userNmRegExp = /^(?=.*[a-z가-힣])[a-z가-힣]{2,30}$/i;
    if (userNm === "") {
      setErrUnm(0);
    } else if (userNmRegExp.test(userNm)) {
      setErrUnm(1);
    } else {
      setErrUnm(2);
    }

    if (
      errMsg === 1 &&
      errNm === 1 &&
      errPw === 1 &&
      errPwCk === 1 &&
      errUnm === 1
    ) {
      setConfirm(1);
    } else {
      setConfirm(0);
    }
  }, [
    email,
    nickNm,
    password,
    pwCheck,
    userNm,
    errMsg,
    errNm,
    errPw,
    errPwCk,
    errUnm,
  ]);

  const createUser = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = createUser.user;
      if (user) {
        alert("가입완료");
        navigate("/");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log(errorCode);
      console.log(errorMsg);
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold">회원가입</h2>
      <form className="p-10" onSubmit={createUser}>
        <legend className="hidden">회원가입</legend>
        <fieldset className="flex flex-col items-center drop-shadow-md">
          <div className="border-2 border-blue-200 p-10 rounded-md">
            <div className="flex flex-col mb-5 w-96">
              <label className="block w-30 mb-2" htmlFor="eamil">
                이메일
              </label>
              <input
                id="eamil"
                type="eamil"
                name="email"
                onChange={(e) => {
                  setEmial(e.target.value);
                }}
                className="border-2 border-blue-100 transition ease-in-out focus:border-blue-300 duration-300 bg-gray-200 rounded-md mb-2"
                required
              />{" "}
              {errMsg === 2 ? (
                <small className="text-red-500">이메일 양식이 아닙니다.</small>
              ) : errMsg === 1 ? (
                <small className="text-green-500">
                  이메일 양식을 확인했습니다.
                </small>
              ) : (
                <small className="text-gray-400">이메일을 입력해주세요.</small>
              )}
            </div>
            <div className="flex flex-col mb-5 w-96">
              <label className="block w-30 mb-2" htmlFor="id">
                닉네임
              </label>
              <input
                id="id"
                type="text"
                name="id"
                minLength={6}
                maxLength={12}
                onChange={(e) => {
                  setNickNm(e.target.value);
                }}
                className="border-2 border-blue-100 transition ease-in-out focus:border-blue-300 duration-300 bg-gray-200 rounded-md mb-2"
                required
              />
              {errNm === 2 ? (
                <small className="text-red-500">별명 양식이 아닙니다.</small>
              ) : errNm === 1 ? (
                <small className="text-green-500">양식을 확인했습니다.</small>
              ) : (
                <small className="text-gray-400">
                  별명을 입력해주세요. 최소 6자 최대 12자 특수문자는 "-"와 "_"
                  만 가능합니다.
                </small>
              )}
            </div>
            <div className="flex flex-col mb-5 w-96">
              <label className="block w-30 mb-2" htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                name="password"
                minLength={6}
                maxLength={20}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="border-2 border-blue-100 transition ease-in-out focus:border-blue-300 duration-300 bg-gray-200 rounded-md mb-2"
                required
              />
              {errPw === 2 ? (
                <small className="text-red-500">
                  비밀번호 요구사항이 아닙니다.
                </small>
              ) : errPw === 1 ? (
                <small className="text-green-500">
                  비밀번호를 양식과 맞게 작성하였습니다.
                </small>
              ) : (
                <small className="text-gray-400">
                  비밀번호를 입력해주세요. 대소문 영문,숫자 특수문자(!@#$만
                  가능) 포함 6~20자
                </small>
              )}
            </div>
            <div className="flex flex-col mb-5 w-96">
              <label className="block w-30 mb-2" htmlFor="checkPass">
                비밀번호 확인
              </label>
              <input
                id="checkPass"
                type="password"
                name="checkPass"
                onChange={(e) => {
                  setPwCheck(e.target.value);
                }}
                className="border-2 border-blue-100 transition ease-in-out focus:border-blue-300 duration-300 bg-gray-200 rounded-md mb-2"
                required
              />
              {errPwCk === 2 ? (
                <small className="text-red-500">
                  비밀번호와 일치하지 않습니다.
                </small>
              ) : errPwCk === 1 ? (
                <small className="text-green-500">
                  비밀번호와 일치 합니다.
                </small>
              ) : (
                <small className="text-gray-400">
                  비밀번호를 다시 입력해 확인해 주세요.
                </small>
              )}
            </div>

            <div className="flex flex-col mb-5 w-96">
              <label className="block w-30 mb-2" htmlFor="nickname">
                이름
                <span className="text-xs font-light text-gray-700">
                  {"("}영문은 소문자만 가능{")"}
                </span>
              </label>
              <input
                id="nickname"
                type="text"
                name="nickname"
                onChange={(e) => {
                  setUserNm(e.target.value);
                }}
                className="border-2 border-blue-100 transition ease-in-out focus:border-blue-300 duration-300 bg-gray-200 rounded-md mb-2"
                required
              />
              {errUnm === 2 ? (
                <small className="text-red-500">
                  이름은 영문소문자와 한글만 가능합니다.
                </small>
              ) : errUnm === 1 ? (
                <small className="text-green-500">이름 입력 완료.</small>
              ) : (
                <small className="text-gray-400">이름을 입력해주세요.</small>
              )}
            </div>

            <div className="flex justify-around">
              {confirm === 1 ? (
                <button
                  type="submit"
                  className="outline outline-1 outline-green-400 bg-green-200 rounded-xl px-3 py-2"
                >
                  회원가입
                </button>
              ) : (
                <button
                  className="outline outline-1 outline-gray-300 bg-gray-100 text-gray-400 rounded-xl px-3 py-2"
                  disabled
                >
                  회원가입
                </button>
              )}
              <button
                type="button"
                className="outline outline-1 outline-indigo-300 bg-blue-50 rounded-xl px-3 py-2"
              >
                취소
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
