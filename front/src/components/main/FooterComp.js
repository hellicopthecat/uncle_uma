import {Link} from "react-router-dom";

export default function FooterComp() {
  return (
    <div className="bg-sky-950 text-white mx-auto pb-14">
      <div className="">
        <div className="p-10">
          <h2>TITLE</h2>
          <ul className="flex justify-around">
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
        </div>
        <div className="text-center">
          <p className="">&copy; TITLE</p>
        </div>
      </div>
    </div>
  );
}
