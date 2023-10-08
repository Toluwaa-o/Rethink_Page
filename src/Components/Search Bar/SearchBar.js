import Clear from "./Icons/Clear";
import Filter from "./Icons/Filter";
import Search from "./Icons/Search";
import InputField from "./InputField";

export default function SearchBar() {
  return (
    <div className="flex m-auto w-[90%] md:w-[35vw] md:m-[unset] bg-white p-3 rounded-md items-center gap-2 relative top-3 md:top-[unset] border border[#EBEAEF] hover:border-[#754DE8] hover:fill-[#754DE8] fill-gray-300 transition-all">
      <Search />
      <InputField />
      <span className="hidden md:flex md:gap-4 md:items-center">
        <Filter />
        <Clear />
      </span>
    </div>
  );
}
