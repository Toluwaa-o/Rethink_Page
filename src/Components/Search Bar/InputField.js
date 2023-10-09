export default function InputField({ data, clickHandler }) {
  return (
    <input
      className="placeholder:text-[#463D61] placeholder:text-sm placeholder:tracking-wider w-[90%] outline-none"
      type="text"
      name="Search"
      aria-label="Search"
      placeholder="Search for templates, projects, etc"
      value={data}
      onChange={(e) => clickHandler(e.target.value)}
    />
  );
}
