import React from "react";

export default function SideText() {
  return (
    <div className="hidden md:flex md:flex-col md:bg-sideTextBg md:backdrop-blur-myBlur md:shadow-myShadow md:p-4 md:w-[42vw] md:gap-7 md:text-sm md:tracking-wide">
      <p>You should have more engagement by 6pm today, try posting then. 📆</p>
      <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
    </div>
  );
}

// background: rgba(255, 255, 255, 0.10);
// backdrop-filter: blur(10px);