import React from "react";

export default function SideBarRight() {
  return (
    <nav className="absolute top-[3em] z-10 bg-white m-auto flex-col items-center justify-center py-4 shadow-myShadow rounded-md w-[11vw] border border-gray-300 hidden md:flex md:relative md:top-[unset] md:bg-[#EAE4FC] md:border-none md:m-[unset] md:shadow-none md:w-[55%] md:pl-4">
      <ul className="flex flex-col md:flex-row items-center justify-center gap-7 md:justify-between md:w-full">
        <li>
          <a href="/">
            <img src="/Images/Calendar.png" alt="my calendar" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="/Images/Alert.png" alt="alert" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
