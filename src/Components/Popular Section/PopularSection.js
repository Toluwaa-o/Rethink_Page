import React from "react";
import Cards from "../Cards/Cards";

export default function PopularSection() {
  return (
    <section className="p-4 grid gap-4 font-raleway md:gap-0">
      <span className="md:mb-4">
        <h2 className="text-[#4D4959] text-xl font-semibold mb-1 font-raleway">
          Most Popular Tools
        </h2>
        <p className="text-[#9893A3] text-sm">
          Explore the trending tools to create your copies fast
        </p>
      </span>
      <div className="md:bg-[#EAE4FC] md:p-2 md:rounded-t-lg">
        <h3 className="text-[#4D4959] font-semibold mb-2">Blog Writing</h3>
        <Cards />
      </div>
      <div className="md:bg-[#EAE4FC] md:p-2">
        <h3 className="text-[#4D4959] font-semibold mb-2">Social Media</h3>
        <Cards />
      </div>
      <div className="md:bg-[#EAE4FC] md:p-2">
        <h3 className="text-[#4D4959] font-semibold mb-2">Article Writing</h3>
        <Cards />
      </div>
    </section>
  );
}
