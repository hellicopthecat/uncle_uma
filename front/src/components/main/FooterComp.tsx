import {Link} from "react-router-dom";
import SharedTxt from "../shared/sharedTxt";

export default function FooterComp() {
  return (
    <footer className="flex flex-col justify-center items-center gap-5 bg-sky-950 h-32">
      <ul className="flex justify-around items-center w-96">
        <li>
          <Link to="/">
            <SharedTxt txtType="h6" txt="HOME" className="text-white" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <SharedTxt txtType="h6" txt="SITE MAP" className="text-white" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <SharedTxt txtType="h6" txt="CONTACT" className="text-white" />
          </Link>
        </li>
      </ul>

      <div className="">
        <SharedTxt
          txtType="p"
          txt="&copy; MALLANG MALLANG RACE"
          className="text-white"
        />
      </div>
    </footer>
  );
}
