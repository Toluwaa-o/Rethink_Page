import React from "react";
import SideText from "../Side Text/SideText";
import DropDownMenu from "../Drop Down Menu/DropDownMenu";

export default function MainSection() {
  return (
    <div className="p-4 my-4 md:my-[unset] md:flex md:justify-between md:bg-myImageii md:bg-[#F1EDFD] md:bg-no-repeat md:bg-myPositionii md:bg-mySizeii md:rounded-3xl md:w-[95%] md:m-auto md:py-14">
      <span className="md:grid md:gap-2 md:self-center">
        <h1 className="font-morangaSubsitute text-[#4D4959] text-4xl tracking-wider font-semibold mb-2 md:text-5xl md:font-medium">
          Hey James!
        </h1>
        <p className="font-raleway md:text-lg md:tracking-wide">
          Lets create something awesome today ✨💫
        </p>
        <p className="hidden md:block md:border-2 border-[#754DE8] md:bg-white md:text-[#754DE8] md:w-fit md:py-2 md:px-10 md:rounded-2xl md:mt-8 md:font-medium hover:bg-[#754DE8] hover:text-white transition-all">
          Start Creating
        </p>
      </span>

      <span className="hidden md:flex md:flex-col md:gap-[2.2em]">
        <DropDownMenu />
        <SideText />
      </span>
    </div>
  );
}
