
import SideBarLeft from "../Side Bars/SideBarLeft";

export default function MenuIcon() {
  return (
    <span className="relative md:hidden">
      <div className="bg-[#ffffff80] w-fit p-1 rounded-lg">
        <img src="/Images/ep_menu.svg" alt="menu" />
      </div>

      <SideBarLeft />
    </span>
  );
}
