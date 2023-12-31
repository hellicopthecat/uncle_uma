import {Link, useNavigate, useLocation} from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";
import {useEffect} from "react";

export default function HeaderComp({props}) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {}, [props]);
  const handleLogOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      if (location.pathname !== "/") {
        navigate("/");
        window.location.reload("/");
      } else {
        window.location.reload("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex justify-around items-center text-white">
      <div className="w-1/3 md:ml-10 ml-5">
        <button type="button">
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
      <div className="w-1/3 min-w-max text-center">
        <Link to="/">
          <h1 className="text-4xl font-extrabold p-5">말랑말랑 레이스</h1>
        </Link>
      </div>
      <div className="w-1/3 min-w-max md:mr-10 mr-5">
        {props === null ? (
          <ul className="flex justify-end items-center">
            <li className=" cursor-pointer ml-10">
              <Link to="/login">로그인</Link>
            </li>
            <li className=" cursor-pointer ml-10">
              <Link to="/join">회원가입</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-end items-center">
            {props.photoURL === null ? (
              <li className=" ml-10">
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
              <li className=" ml-10">
                <Link to={"editUser/" + props.uid}>
                  <img
                    src={props.photoURL}
                    alt="프로필이미지"
                    width={30}
                    height={30}
                    className="border-2 border-indigo-300 rounded-full"
                  />
                </Link>
              </li>
            )}
            <li className=" cursor-pointer ml-10">
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
            <li className="cursor-pointer ml-10">
              <h1 onClick={handleLogOut}>로그아웃</h1>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
