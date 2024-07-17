import {Link, useLocation} from "react-router-dom";
import useUser from "../../../hooks/useUser";
import {getAuth, signOut} from "firebase/auth";
import Usersvg from "../../svg/Usersvg";
import SharedTxt from "../../shared/sharedTxt";

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
    <ul className="flex justify-end items-center gap-10 ">
      {!user?.photoURL ? (
        <li>
          <Usersvg />
        </li>
      ) : (
        <li>
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
      <li>
        {user?.displayName ? (
          <Link to={"editUser/" + user.uid}>
            <SharedTxt
              txtType="span"
              txt={user.displayName}
              className="text-white font-semibold text-xl"
            />
          </Link>
        ) : (
          <Link to={"editUser/" + user?.uid}>
            <SharedTxt
              txtType="span"
              txt={user?.uid + ""}
              className="text-white font-semibold text-xl"
            />
          </Link>
        )}
      </li>
      <li>
        <button type="button" onClick={handleLogOut}>
          <SharedTxt
            txtType="span"
            txt="로그아웃"
            className="text-white font-semibold text-xl"
          />
        </button>
      </li>
    </ul>
  );
}
