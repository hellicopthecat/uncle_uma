import {Link} from "react-router-dom";

export default function FooterComp() {
  return (
    <div className="flex flex-col justify-around items-center bg-sky-950 w-full h-[400px] py-10">
      <ul className="flex justify-around w-full">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">CONTACT US</Link>
        </li>
        <li>
          <Link to="/">ABOUT</Link>
        </li>
      </ul>

      <div className="text-center">
        <p className="">&copy; TITLE</p>
      </div>
    </div>
  );
}
