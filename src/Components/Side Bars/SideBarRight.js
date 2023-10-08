export default function SideBarRight() {
  return (
    <nav className="absolute top-[3em] z-10 bg-white m-auto flex-col items-center justify-center py-4 shadow-myShadow rounded-md w-[11vw] border border-gray-300 hidden md:flex md:relative md:top-[unset] md:bg-[#EAE4FC] md:border-none md:m-[unset] md:shadow-none md:w-[55%] md:pl-4">
      <ul className="flex flex-col md:flex-row items-center justify-center gap-7 md:justify-between md:w-full">
        <li>
          <a href="#">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="md:hover:fill-[#754DE8] fill-[#4D4959] md:hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Calendar">
                <path
                  id="Shape"
                  d="M21.75 3C23.5449 3 25 4.45507 25 6.25V21.75C25 23.5449 23.5449 25 21.75 25H6.25C4.45507 25 3 23.5449 3 21.75V6.25C3 4.45507 4.45507 3 6.25 3H21.75ZM23.5 9.503H4.5V21.75C4.5 22.7165 5.2835 23.5 6.25 23.5H21.75C22.7165 23.5 23.5 22.7165 23.5 21.75V9.503ZM8.74878 17.5014C9.43913 17.5014 9.99878 18.0611 9.99878 18.7514C9.99878 19.4418 9.43913 20.0014 8.74878 20.0014C8.05842 20.0014 7.49878 19.4418 7.49878 18.7514C7.49878 18.0611 8.05842 17.5014 8.74878 17.5014ZM14.0033 17.5014C14.6936 17.5014 15.2533 18.0611 15.2533 18.7514C15.2533 19.4418 14.6936 20.0014 14.0033 20.0014C13.3129 20.0014 12.7533 19.4418 12.7533 18.7514C12.7533 18.0611 13.3129 17.5014 14.0033 17.5014ZM8.74878 12.5014C9.43913 12.5014 9.99878 13.0611 9.99878 13.7514C9.99878 14.4418 9.43913 15.0014 8.74878 15.0014C8.05842 15.0014 7.49878 14.4418 7.49878 13.7514C7.49878 13.0611 8.05842 12.5014 8.74878 12.5014ZM14.0033 12.5014C14.6936 12.5014 15.2533 13.0611 15.2533 13.7514C15.2533 14.4418 14.6936 15.0014 14.0033 15.0014C13.3129 15.0014 12.7533 14.4418 12.7533 13.7514C12.7533 13.0611 13.3129 12.5014 14.0033 12.5014ZM19.2577 12.5014C19.9481 12.5014 20.5077 13.0611 20.5077 13.7514C20.5077 14.4418 19.9481 15.0014 19.2577 15.0014C18.5674 15.0014 18.0077 14.4418 18.0077 13.7514C18.0077 13.0611 18.5674 12.5014 19.2577 12.5014ZM21.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V8.003H23.5V6.25C23.5 5.2835 22.7165 4.5 21.75 4.5Z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="md:hover:fill-[#754DE8] fill-[#4D4959] md:hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Alert">
                <path
                  id="Shape"
                  d="M14 3C18.6097 3 22.3625 6.66899 22.4975 11.246L22.5012 11.5012L22.501 16.113L23.915 19.757C23.9532 19.8554 23.979 19.958 23.9919 20.0624L24.0017 20.22C24.0017 20.8827 23.498 21.4278 22.8526 21.4934L22.7217 21.5L17.5014 21.5011C17.5014 23.4348 15.9338 25.0025 14 25.0025C12.1307 25.0025 10.6035 23.5376 10.5038 21.6932L10.4984 21.499L5.27479 21.5C5.11608 21.5 4.95876 21.4705 4.81084 21.413C4.19317 21.1727 3.8677 20.5057 4.04055 19.8804L4.08183 19.7561L5.498 16.112L5.49876 11.5012C5.49876 6.80614 9.30489 3 14 3ZM15.9959 21.6504L16.0004 21.499L11.9986 21.5011C11.9986 22.6064 12.8946 23.5025 14 23.5025C15.0551 23.5025 15.9195 22.686 15.9959 21.6504ZM14 4.5C10.2139 4.5 7.12968 7.50532 7.00282 11.2606L6.99876 11.5012V16.2534C6.99876 16.3154 6.99107 16.377 6.97596 16.4369L6.94776 16.5252L5.596 19.999H22.4L21.052 16.5246C21.0297 16.467 21.0145 16.4069 21.007 16.3457L21.0012 16.2534V11.5012C21.0012 7.63456 17.8667 4.5 14 4.5Z"
                />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
