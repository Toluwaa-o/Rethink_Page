import { useState } from "react";
import SideBarRight from "../Side Bars/SideBarRight";
import { useContext } from "react";
import { AuthenticationContext } from "../../../Context/AuthContext";

export default function Avatar() {
  const [display, setDisplay] = useState(false);
  const { photoURL } = useContext(AuthenticationContext);

  return (
    <span className="relative md:flex items-center md:justify-between md:w-[25%] md:p-4 md:bg-[#EBEAEF]">
      <SideBarRight display={display} />
      <img
        src={photoURL}
        alt="avatar"
        className="md:hover:scale-105 transition-all w-[35px] rounded-md"
        onClick={() => setDisplay(!display)}
        role="button"
      />
    </span>
  );
}
