import React from "react";

export default function Card({ title, icon, description }) {
  return (
    <span className="flex flex-col shadow-myShadow p-2 md:p-4 md:rounded-lg md:bg-white md:hover:scale-105 transition-all">
      <span className="flex items-center justify-between mb-4">
        <img className="w-4 md:w-6" src={icon} alt={title} />
        <img src="/Images/up.png" alt="up" className="md:w-6" />
      </span>
      <h3 className="text-[#1D1437] font-bold md:text-lg md:mb-2">{title}</h3>
      <p className="text-[#77737F] text-xs tracking-normal md:text-base md:font-bold md:leading-5">
        {description}
      </p>
    </span>
  );
}
