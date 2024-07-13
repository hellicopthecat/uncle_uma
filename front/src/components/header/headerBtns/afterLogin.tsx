import {Link, useLocation} from "react-router-dom";
import useUser from "../../../hooks/useUser";
import {getAuth, signOut} from "firebase/auth";

export default function AfterLogin() {
  const {user} = useUser();
  const pathName = useLocation().pathname;
  //fn
  const handleLogOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      if (pathName !== "/") {
        window.location.replace("/");
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className="flex justify-end items-center">
      {!user?.photoURL ? (
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
          <Link to={"editUser/" + user.uid}>
            <img
              src={user.photoURL}
              alt="프로필이미지"
              width={30}
              height={30}
              className="border-2 border-indigo-300 rounded-full"
            />
          </Link>
        </li>
      )}
      <li className=" ml-10">
        {user?.displayName ? (
          <Link to={"editUser/" + user.uid}>
            <h1 className="text-sm">{user.displayName}</h1>
          </Link>
        ) : (
          <Link to={"editUser/" + user?.uid}>
            <h1 className="text-sm">{user?.uid}</h1>
          </Link>
        )}
      </li>
      <li className=" ml-10">
        <h1 onClick={handleLogOut}>로그아웃</h1>
      </li>
    </ul>
  );
}
