export default function SideBarLeft() {
  return (
    <nav className="absolute top-[3em] z-10 bg-white m-auto md:flex flex-col items-center justify-center hidden py-4 shadow-myShadow rounded-md w-[11vw] border border-gray-300 md:relative md:top-[unset] md:bg-[#EAE4FC] md:border-none md:p-4 md:m-[unset] md:justify-start">
      <ul className="flex flex-col items-center gap-7 md:py-4 h-[90%] md:fixed md:justify-between">
        <span className="flex flex-col items-center justify-center gap-7 md:gap-[3em]">
          <li className="hidden md:block">
            <a href="/">
              <img src="/Images/Logo.png" alt="Logo" />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="/Images/Shape.png"
                alt="home"
                className="md:bg-[#ffffff20] md:shadow-myShadow border border-gray-300 p-3 rounded-md"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/Images/Content View Gallery.png" alt="my content" />
            </a>
          </li>
        </span>
        <span className="flex flex-col items-center justify-center gap-7 md:gap-[3em]">
          <li className="md:justify-self-end">
            <a href="/">
              <img src="/Images/Settings.png" alt="Settings" />
            </a>
          </li>
          <li className="md:justify-self-end">
            <a href="/">
              <img src="/Images/Vector.png" alt="Logout" />
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
}
