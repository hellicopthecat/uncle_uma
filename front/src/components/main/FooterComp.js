import {Link} from "react-router-dom";

export default function FooterComp() {
  return (
    <div className="flex flex-col justify-around items-center bg-sky-950 w-full h-[400px] py-10">
      <ul className="flex justify-around items-center w-full">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">SITE MAP</Link>
        </li>
        <li>
          <Link to="/">CONTACT</Link>
        </li>
      </ul>

      <div className="text-center">
        <p className="">&copy; MALLANG MALLANG RACE</p>
      </div>
    </div>
  );
}
