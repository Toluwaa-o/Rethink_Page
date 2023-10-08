export default function SearchBar() {
  return (
    <div className="flex m-auto w-[90%] md:w-[35vw] md:m-[unset] bg-white p-3 rounded-md items-center gap-2 relative top-3 md:top-[unset] border border[#EBEAEF]">
      <img src="/Images/Search.png" alt="Search" />
      <input
        className="placeholder:text-[#463D61] placeholder:text-sm placeholder:tracking-wider w-[90%] outline-none"
        type="text"
        name="Search"
        aria-label="Search"
        placeholder="Search for templates, projects, etc"
      />
      <span className="hidden md:flex md:gap-4 md:items-center">
        <img src="/Images/filter-svgrepo-com 1.png" alt="filter" />
        <img src="/Images/Remove Round.png" alt="clear search bar" />
      </span>
    </div>
  );
}
