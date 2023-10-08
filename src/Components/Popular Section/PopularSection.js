import Sections from "./Sections";

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
      <Sections />
    </section>
  );
}
