import { Link } from "react-router-dom";
import ContentIcon from "./Icons/ContentIcon";
import Home from "./Icons/Home";
import Logout from "./Icons/Logout";
import Settings from "./Icons/Settings";

export default function SideBarLeft({ display }) {
  return (
    <nav
      className={`absolute top-[3em] z-10 bg-white m-auto md:flex flex-col items-center justify-center py-4 shadow-myShadow rounded-md w-[11vw] border border-gray-300 md:relative md:top-[unset] md:bg-[#EAE4FC] md:border-none md:p-4 md:m-[unset] md:justify-start ${
        !display ? "hidden" : "flex"
      }`}
    >
      <ul className="flex flex-col items-center gap-7 md:py-4 h-[90%] md:fixed md:justify-between">
        <span className="flex flex-col items-center justify-center gap-7 md:gap-[3em]">
          <li className="hidden md:block">
            <Link to="/rethink">
              <img
                src="/Images/Logo.png"
                alt="Logo"
                className="md:hover:scale-105 transition-all"
              />
            </Link>
          </li>
          <li>
            <Link to="/rethink">
              <Home />
            </Link>
          </li>
          <li>
            <Link to="/rethink">
              <ContentIcon />
            </Link>
          </li>
        </span>
        <span className="flex flex-col items-center justify-center gap-7 md:gap-[3em]">
          <li className="md:justify-self-end">
            <Link to="/rethink">
              <Settings />
            </Link>
          </li>
          <li className="md:justify-self-end">
            <Link to="/rethink">
              <Logout />
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  );
}
