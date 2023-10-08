import React from "react";
import SideBarRight from "../Side Bars/SideBarRight";

export default function Avatar() {
  return (
    <span className="relative md:flex items-center md:justify-between md:w-[25%] p-4">
      <SideBarRight />
      <img
        src="/Images/Round Rectangle - S.png"
        alt="avatar"
        className=""
      />
    </span>
  );
}
