import { useState } from "react";
import Toggle from "./Toggle";

export default function DropDownMenu() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="bg-white md:self-end py-3 px-4 w-fit rounded-md border border-white md:hover:fill-[#754DE8] md:hover:text-[#754DE8] fill-black transition-all md:hover:scale-105 text-sm font-medium tracking-wide grid gap-2 relative z-10">
      <span className="flex items-center gap-2">
        <p>Zara Ventures</p>
        <Toggle showDropDown={showDropDown} setShowDropDown={() => setShowDropDown(!showDropDown)} />
      </span>

      {showDropDown && (
        <span className="grid gap-2 absolute top-[3em] bg-white left-0 right-0 px-4 pb-4">
          <p>Coming soon....</p>
          <p>Coming soon....</p>
          <p>Coming soon....</p>
        </span>
      )}
    </div>
  );
}
