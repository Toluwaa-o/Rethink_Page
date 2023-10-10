import { useState } from "react";
import SideBarLeft from "../Side Bars/SideBarLeft";

export default function MenuIcon() {
  const [display, setDisplay] = useState(false);

  return (
    <span className="relative md:hidden">
      <div className="bg-[#ffffff80] w-fit p-1 rounded-lg" onClick={() => setDisplay(!display)}>
        <img src="/Images/ep_menu.svg" alt="menu" />
      </div>

      <SideBarLeft display={display} />
    </span>
  );
}
