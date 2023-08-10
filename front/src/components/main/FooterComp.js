import {Link} from "react-router-dom";

export default function FooterComp() {
  return (
    <footer className="relative bg-sky-950 text-white mx-auto w-full py-10 mt-10">
      <div className="p-10">
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
    </footer>
  );
}
