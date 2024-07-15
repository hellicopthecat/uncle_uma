import {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import SharedTxt from "../shared/sharedTxt";
import {useForm} from "react-hook-form";
import {ILoginInputTypes} from "../../type/inputTypes";
import useLoginHooks from "../../hooks/logins/useLoginHooks";
import useGoogleLoginHooks from "../../hooks/logins/useGoogleLoginHooks";

export default function LoginComp() {
  const emailRegExp =
    /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[a-zA-Z]*\.[a-zA-Z]{2,4}$/i;
  //hooks
  const navigate = useNavigate();
  const {handleLogin, error: loginErr} = useLoginHooks();
  const {handleGoogleLogin, error: googleLoginErr} = useGoogleLoginHooks();
  const {
    register,
    handleSubmit,
    getValues,
    formState: {errors},
    setError,
    watch,
  } = useForm<ILoginInputTypes>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //fn
  const onSubmitLogin = () => {
    const {email, password} = getValues();
    handleLogin({email, password});
  };

  //video
  const video1 = "/video/1.mp4";
  const video2 = "/video/2.mp4";
  const [videoSrc, setVideoSrc] = useState(video1);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.addEventListener("ended", () => {
      if (videoRef.current?.getAttribute("src") === video1) {
        setVideoSrc(video2);
      } else {
        setVideoSrc(video1);
      }
    });
  }, [videoSrc]);

  useEffect(() => {
    if (loginErr || googleLoginErr) {
      setError("root", {message: loginErr || googleLoginErr});
    }
  }, [loginErr]);
  return (
    <div className="flex w-full h-dvh">
      <div className="overflow-hidden w-full">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          width={1000}
          className="relative -top-36"
        ></video>
      </div>

      <form
        onSubmit={handleSubmit(onSubmitLogin)}
        className="flex flex-col justify-center items-center p-10 bg-white w-full"
      >
        {errors.root && (
          <small className="text-red-400/90 ml-1">{errors.root.message}</small>
        )}
        <legend>로그인</legend>
        <fieldset className="drop-shadow-sm">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-96 mb-5">
              <label htmlFor="email" className="mb-2">
                이메일
              </label>
              <input
                {...register("email", {
                  required: {value: true, message: "아이디를 입력해주세요"},
                  pattern: {
                    value: emailRegExp,
                    message: "이메일 양식이 아닙니다.",
                  },
                })}
                id="email"
                type="text"
                name="email"
                placeholder="이메일을 입력해주세요"
                className="border-2 border-blue-100 transition ease-in-out focus:border-indigo-300 duration-300 rounded-lg pl-2 h-14 w-96 mb-1"
              />
              {errors.email && (
                <small className="text-red-400/90 ml-1">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div className="flex flex-col w-96 mb-5">
              <label htmlFor="password" className="mb-2">
                비밀번호
              </label>
              <input
                {...register("password", {
                  required: {value: true, message: "비밀번호를 입력해주세요"},
                })}
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                className="border-2 border-blue-100 transition ease-in-out focus:border-indigo-300 duration-300 rounded-lg pl-2 h-14 w-96"
              />
              {errors.password && (
                <small className="text-red-400/90 ml-1">
                  {errors.password.message}
                </small>
              )}
            </div>
          </div>
        </fieldset>
        <div className="flex flex-col w-96 gap-3">
          <button
            type="submit"
            onSubmit={handleSubmit(onSubmitLogin)}
            className=" disabled:bg-gray-300 bg-blue-300  hover:bg-blue-200  py-3 rounded-lg transition ease-in-out duration-300"
          >
            로그인
          </button>
          <button
            type="button"
            className=" bg-blue-300  hover:bg-blue-200  py-3 rounded-lg transition ease-in-out duration-300"
            onClick={() => handleGoogleLogin()}
          >
            구글로그인
          </button>
          <Link
            to={"/join"}
            className="flex justify-center bg-blue-300  hover:bg-blue-200  py-3 rounded-lg transition ease-in-out duration-300"
          >
            <SharedTxt txtType="p" txt="회원가입" />
          </Link>
        </div>
      </form>
    </div>
  );
}
