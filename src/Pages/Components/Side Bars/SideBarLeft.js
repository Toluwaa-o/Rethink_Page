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
            <a href="/">
              <img
                src="/Images/Logo.png"
                alt="Logo"
                className="md:hover:scale-105 transition-all"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <Home />
            </a>
          </li>
          <li>
            <a href="/">
              <ContentIcon />
            </a>
          </li>
        </span>
        <span className="flex flex-col items-center justify-center gap-7 md:gap-[3em]">
          <li className="md:justify-self-end">
            <a href="/">
              <Settings />
            </a>
          </li>
          <li className="md:justify-self-end">
            <a href="/">
              <Logout />
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
}
