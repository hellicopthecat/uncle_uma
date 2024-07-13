import {Link} from "react-router-dom";
import useUser from "../../hooks/useUser";
import SharedTxt from "../shared/sharedTxt";
import BeforeLogin from "./headerBtns/beforeLogin";
import AfterLogin from "./headerBtns/afterLogin";

export default function HeaderComp() {
  //hooks
  const {user} = useUser();
  return (
    <header className="absolute z-50 w-full flex justify-between items-center text-white p-5">
      <Link to="/">
        <SharedTxt txtType="h1" txt="말랑말랑 경마" />
      </Link>
      {!user ? <BeforeLogin /> : <AfterLogin />}
    </header>
  );
}
