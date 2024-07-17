import {useEffect, useState} from "react";
import {set, useForm} from "react-hook-form";
import {IJoinInputTypes} from "../../type/inputTypes";
import JoinInput from "./JoinInput";
import SharedTxt from "../shared/sharedTxt";
import {Link} from "react-router-dom";
import useJoinHook from "../../hooks/join/useJoinHook";

export default function JoinComp() {
  const emailRegExp =
    /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[a-zA-Z]*\.[a-zA-Z]{2,3}$/i;
  const nkNmRegExp = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z]){5,12}$/i;
  const pwRegExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$])[a-zA-z\d!@#$]{5,20}$/i;
  const [confirm, setConfirm] = useState(true);
  const {handleCreateUser, error: createUserError, loading} = useJoinHook();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    watch,
    formState: {errors},
  } = useForm<IJoinInputTypes>({
    defaultValues: {
      email: "",
      nickNm: "",
      password: "",
      pwCheck: "",
    },
  });

  const onSubmit = () => {
    const {email, nickNm, password} = getValues();
    handleCreateUser({email, password, nickNm});
  };

  const {email, nickNm, password, pwCheck} = watch();
  useEffect(() => {
    const emailMatch = email.match(emailRegExp);
    const nickMatch = nickNm.match(nkNmRegExp);
    const pwMatch = password.match(pwRegExp);
    if (password !== pwCheck) {
      setError("password", {message: "비밀번호가 일치하지 않습니다."});
      setError("pwCheck", {message: "비밀번호가 일치하지 않습니다."});
    }
    if (password === pwCheck) {
      setError("password", {message: undefined});
      setError("pwCheck", {message: undefined});
    }
    if (emailMatch && nickMatch && pwMatch && password === pwCheck) {
      setConfirm(false);
    }
  }, [confirm, email, nickNm, password, pwCheck]);
  useEffect(() => {
    setError("root", {message: createUserError});
  }, [createUserError, errors]);
  return (
    <div className="relative flex items-center">
      <div className="w-dvw h-dvh bg-main_1 bg-cover filter blur-sm brightness-50" />
      <div className="flex flex-col justify-center items-center h-dvh bg-white absolute right-52">
        <SharedTxt txtType="h2" txt="회원가입" className="text-center" />
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 ">
          <legend className="hidden">회원가입</legend>
          <fieldset className="flex flex-col gap-5 items-center drop-shadow-md ">
            <JoinInput
              register={register}
              registVal="email"
              labelTxt="이메일"
              inputType="email"
              registRule={{
                required: {value: true, message: "이메일을 입력해주세요"},
                pattern: {
                  value: emailRegExp,
                  message: "이메일 양식이 아닙니다.",
                },
              }}
              placeHolder="이메일을 입력해주세요"
              error={errors.email}
            />
            <JoinInput
              register={register}
              registVal="nickNm"
              labelTxt="닉네임"
              registRule={{
                required: {value: true, message: "닉네임을 입력해주세요."},
                pattern: {
                  value: nkNmRegExp,
                  message: "닉네임 양식이 아닙니다.",
                },
              }}
              minLength={6}
              maxLength={12}
              placeHolder="닉네임을 입력해주세요"
              error={errors.nickNm}
            />
            <JoinInput
              register={register}
              registVal="password"
              labelTxt="비밀번호"
              inputType="password"
              minLength={6}
              maxLength={20}
              registRule={{
                required: {value: true, message: "비밀번호를 입력해주세요"},
                pattern: {
                  value: pwRegExp,
                  message: "비밀번호양식이 아닙니다.",
                },
              }}
              placeHolder="비밀번호를 입력해주세요"
              error={errors.password}
            />
            <JoinInput
              register={register}
              registVal="pwCheck"
              labelTxt="비밀번호 확인"
              inputType="password"
              registRule={{
                required: {
                  value: true,
                  message: "2차확인 비밀번호를 입력해주세요.",
                },
                pattern: {
                  value: pwRegExp,
                  message: "비밀번호양식이 아닙니다.",
                },
              }}
              placeHolder="2차확인 비밀번호를 입력해주세요"
              error={errors.pwCheck}
            />
            {errors.root && (
              <small className="text-red-500">{errors.root.message}</small>
            )}
            <div className="flex flex-col gap-5 w-96 mt-10 text-center">
              <button
                type="submit"
                onSubmit={handleSubmit(onSubmit)}
                className=" disabled:bg-gray-200 bg-blue-300 shadow-md rounded-xl w-full h-10"
                disabled={confirm || loading}
              >
                회원가입
              </button>
              <Link
                to={"/"}
                className="flex items-center justify-center  bg-blue-50 shadow-md rounded-xl w-full h-10"
              >
                취소
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
