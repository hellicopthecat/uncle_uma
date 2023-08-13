import {Link} from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";
import {useEffect} from "react";

export default function HeaderComp({props}) {
  useEffect(() => {}, [props]);
  const handleLogOut = () => {
    const auth = getAuth();
    try {
      signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex justify-around items-center text-white">
      <div className="w-1/3 ml-10">
        <button type="click">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="w-1/3 text-center">
        <Link to="/">
          <h1 className="text-4xl font-extrabold p-5">말랑말랑 경마</h1>
        </Link>
      </div>
      <div className="w-1/3">
        {props === null ? (
          <ul className="flex justify-end mr-10">
            <li className=" cursor-pointer mr-5">
              <Link to="/login">로그인</Link>
            </li>
            <li className=" cursor-pointer mr-5">
              <Link to="/join">회원가입</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-end items-center mr-10">
            {props.photoURL === null ? (
              <li className=" mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </li>
            ) : (
              <li className=" mr-2">
                <img
                  src={props.photoURL}
                  alt="프로필이미지"
                  width={30}
                  height={30}
                  className="border-2 border-indigo-300 rounded-full"
                />
              </li>
            )}
            <li className=" cursor-pointer mr-5">
              {props.displayName === null ? (
                <Link to={"editUser/" + props.uid}>
                  <h1 className="text-sm">{props.email}님의 프로필</h1>
                </Link>
              ) : (
                <Link to={"editUser/" + props.uid}>
                  <h1 className="text-sm">{props.displayName}님의 프로필</h1>
                </Link>
              )}
            </li>
            <li className="cursor-pointer mr-5">
              <h1 onClick={handleLogOut}>로그아웃</h1>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
