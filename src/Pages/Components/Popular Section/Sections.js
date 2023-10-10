import Cards from "../Cards/Cards";

export default function Sections() {
  return (
    <>
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
    </>
  );
}
