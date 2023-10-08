import { useState } from "react";
import SideBarRight from "../Side Bars/SideBarRight";

export default function Avatar() {
  const [display, setDisplay] = useState(false);

  return (
    <span className="relative md:flex items-center md:justify-between md:w-[25%] md:p-4 md:bg-[#EBEAEF]">
      <SideBarRight display={display} />
      <img
        src="/Images/Round Rectangle - S.png"
        alt="avatar"
        className="md:hover:scale-105 transition-all"
        onClick={() => setDisplay(!display)}
      />
    </span>
  );
}
