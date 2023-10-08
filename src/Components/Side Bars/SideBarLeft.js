export default function SideBarLeft() {
  return (
    <nav className="absolute top-[3em] z-10 bg-white m-auto md:flex flex-col items-center justify-center hidden py-4 shadow-myShadow rounded-md w-[11vw] border border-gray-300 md:relative md:top-[unset] md:bg-[#EAE4FC] md:border-none md:p-4 md:m-[unset] md:justify-start">
      <ul className="flex flex-col items-center gap-7 md:py-4 h-[90%] md:fixed md:justify-between">
        <span className="flex flex-col items-center justify-center gap-7 md:gap-[3em]">
          <li className="hidden md:block">
            <a href="#">
              <img
                src="/Images/Logo.png"
                alt="Logo"
                className="md:hover:scale-105 transition-all"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="md:bg-[#ffffff20] md:shadow-myShadow border border-gray-300 p-3 rounded-md flex fill-[#5E3EBA] md:hover:scale-105 md:hover:border-[#5E3EBA] transition-all">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Shape"
                    d="M8.59212 0.494897C9.41473 -0.164966 10.5853 -0.164966 11.4079 0.494897L19.1579 6.71164C19.6902 7.13868 20 7.78427 20 8.46675V19.747C20 20.9897 18.9926 21.997 17.75 21.997H15.25C14.0074 21.997 13 20.9897 13 19.747V13.247C13 12.8328 12.6642 12.497 12.25 12.497H7.75C7.33579 12.497 7 12.8328 7 13.247V19.747C7 20.9897 5.99264 21.997 4.75 21.997H2.25C1.00736 21.997 0 20.9897 0 19.747V8.46675C0 7.78427 0.309763 7.13868 0.842125 6.71164L8.59212 0.494897Z"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                className="md:hover:fill-[#5E3EBA] fill-[#4D4959] md:hover:scale-105 transition-all"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Content View Gallery">
                  <path
                    id="Shape"
                    d="M3 6.74701C3 4.67594 4.67893 2.99701 6.75 2.99701H21.25C23.3211 2.99701 25 4.67594 25 6.74701V21.247C25 23.3181 23.3211 24.997 21.25 24.997H6.75C4.67893 24.997 3 23.3181 3 21.247V6.74701ZM6.75 4.49701C5.50736 4.49701 4.5 5.50437 4.5 6.74701V21.247C4.5 22.4897 5.50736 23.497 6.75 23.497H16V4.49701H6.75ZM21.25 23.497C22.4926 23.497 23.5 22.4897 23.5 21.247V18.497H17.5V23.497H21.25ZM23.5 16.997V10.997H17.5V16.997H23.5ZM23.5 9.49701V6.74701C23.5 5.50437 22.4926 4.49701 21.25 4.49701H17.5V9.49701H23.5ZM7.75 7.49701C7.05964 7.49701 6.5 8.05665 6.5 8.74701V12.247C6.5 12.9374 7.05964 13.497 7.75 13.497H12.75C13.4404 13.497 14 12.9374 14 12.247V8.74701C14 8.05665 13.4404 7.49701 12.75 7.49701H7.75ZM8 11.997V8.99701H12.5V11.997H8ZM6.5 16.247C6.5 15.8328 6.83579 15.497 7.25 15.497H13.25C13.6642 15.497 14 15.8328 14 16.247C14 16.6612 13.6642 16.997 13.25 16.997H7.25C6.83579 16.997 6.5 16.6612 6.5 16.247ZM7.25 18.997C6.83579 18.997 6.5 19.3328 6.5 19.747C6.5 20.1612 6.83579 20.497 7.25 20.497H13.25C13.6642 20.497 14 20.1612 14 19.747C14 19.3328 13.6642 18.997 13.25 18.997H7.25Z"
                  />
                </g>
              </svg>
            </a>
          </li>
        </span>
        <span className="flex flex-col items-center justify-center gap-7 md:gap-[3em]">
          <li className="md:justify-self-end">
            <a href="#">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                className="md:hover:fill-[#5E3EBA] fill-[#4D4959] md:hover:scale-105 transition-all"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Settings">
                  <path
                    id="Shape"
                    d="M14 9.49707C11.5147 9.49707 9.5 11.5118 9.5 13.9971C9.5 16.4824 11.5147 18.4971 14 18.4971C15.3488 18.4971 16.559 17.9036 17.3838 16.9636C18.0787 16.1716 18.5 15.1335 18.5 13.9971C18.5 13.5371 18.431 13.0933 18.3028 12.6754C17.7382 10.8351 16.0253 9.49707 14 9.49707ZM11 13.9971C11 12.3402 12.3431 10.9971 14 10.9971C15.6569 10.9971 17 12.3402 17 13.9971C17 15.6539 15.6569 16.9971 14 16.9971C12.3431 16.9971 11 15.6539 11 13.9971ZM21.7093 22.3918L19.9818 21.6334C19.4876 21.4167 18.9071 21.4485 18.44 21.7189C17.9729 21.9894 17.675 22.4663 17.6157 23.0036L17.408 24.8826C17.3651 25.27 17.084 25.5887 16.7055 25.679C14.9263 26.1031 13.0725 26.1031 11.2933 25.679C10.9148 25.5887 10.6336 25.27 10.5908 24.8826L10.3834 23.0063C10.3225 22.4701 10.0112 21.9946 9.54452 21.7251C9.07783 21.4556 8.51117 21.4239 8.01859 21.6394L6.29071 22.3979C5.93281 22.555 5.51493 22.4688 5.24806 22.1829C4.00474 20.8506 3.07924 19.2532 2.54122 17.5107C2.42533 17.1354 2.55922 16.7277 2.8749 16.4947L4.40219 15.3673C4.83721 15.0471 5.09414 14.5385 5.09414 13.9977C5.09414 13.4568 4.83721 12.9482 4.40162 12.6276L2.87529 11.5021C2.55914 11.269 2.42513 10.8608 2.54142 10.4852C3.08038 8.74435 4.00637 7.14864 5.24971 5.81815C5.51684 5.53229 5.93492 5.44642 6.29276 5.60392L8.01296 6.36105C8.50793 6.57869 9.07696 6.54582 9.54617 6.27116C10.0133 5.99965 10.3244 5.52228 10.3844 4.98495L10.5933 3.10718C10.637 2.71504 10.9245 2.39404 11.3089 2.30838C12.19 2.11205 13.0891 2.00772 14.0131 1.99707C14.9147 2.00748 15.8128 2.11185 16.6928 2.3085C17.077 2.39435 17.3643 2.71524 17.4079 3.10718L17.617 4.98638C17.7116 5.84922 18.4387 6.50273 19.3055 6.50364C19.5385 6.50401 19.769 6.45539 19.9843 6.35995L21.7048 5.60269C22.0626 5.44519 22.4807 5.53106 22.7478 5.81691C23.9912 7.14741 24.9172 8.74312 25.4561 10.484C25.5723 10.8593 25.4386 11.2673 25.1228 11.5005L23.5978 12.6267C23.1628 12.947 22.9 13.4556 22.9 13.9964C22.9 14.5373 23.1628 15.0459 23.5988 15.3668L25.1251 16.4935C25.441 16.7266 25.5748 17.1346 25.4586 17.5101C24.9198 19.2506 23.9944 20.8462 22.7517 22.1769C22.4849 22.4627 22.0671 22.5488 21.7093 22.3918ZM16.263 22.1936C16.4982 21.4655 16.9889 20.8259 17.6884 20.4208C18.5702 19.9102 19.6536 19.8517 20.5841 20.2597L21.9281 20.8496C22.791 19.8508 23.4593 18.6983 23.8981 17.4522L22.7095 16.5748L22.7086 16.5741C21.898 15.977 21.4 15.0247 21.4 13.9964C21.4 12.9689 21.8974 12.0165 22.7073 11.4197L22.7085 11.4188L23.8957 10.542C23.4567 9.29581 22.7881 8.14337 21.9248 7.14471L20.5922 7.73126L20.5899 7.73228C20.1844 7.91164 19.7472 8.00423 19.3039 8.00364C17.6715 8.00154 16.3046 6.77132 16.1261 5.15166L16.1259 5.14992L15.9635 3.69005C15.3202 3.57029 14.6677 3.50573 14.013 3.49718C13.3389 3.50592 12.6821 3.57068 12.0377 3.69029L11.8751 5.15153C11.7625 6.15973 11.1793 7.0561 10.3019 7.56687C9.41937 8.08261 8.34453 8.14544 7.40869 7.73395L6.07273 7.14594C5.20949 8.14452 4.54092 9.29684 4.10196 10.5429L5.29181 11.4203C6.11115 12.0239 6.59414 12.9807 6.59414 13.9977C6.59414 15.0143 6.11142 15.9712 5.29237 16.5746L4.10161 17.4536C4.54002 18.7014 5.2085 19.8555 6.07205 20.8557L7.41742 20.2652C8.34745 19.8583 9.41573 19.9185 10.2947 20.4262C11.174 20.934 11.7593 21.829 11.8738 22.837L11.8744 22.8415L12.0362 24.3058C13.3326 24.5608 14.6662 24.5608 15.9626 24.3058L16.1247 22.8388C16.1491 22.6187 16.1955 22.4025 16.263 22.1936Z"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li className="md:justify-self-end">
            <a href="#">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                className="md:hover:fill-[#5E3EBA] fill-[#4D4959] md:hover:scale-105 transition-all"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M12.9267 14.6853L15.9483 11.6637H4.66667V9.33034H15.9483L12.9267 6.30868L14.5833 4.66368L20.4167 10.497L14.5833 16.3303L12.9267 14.6853ZM18.6667 -0.00299072C19.2855 -0.00299072 19.879 0.242842 20.3166 0.680427C20.7542 1.11801 21 1.7115 21 2.33034V7.77868L18.6667 5.44534V2.33034H2.33333V18.6637H18.6667V15.5487L21 13.2153V18.6637C21 19.2825 20.7542 19.876 20.3166 20.3136C19.879 20.7512 19.2855 20.997 18.6667 20.997H2.33333C1.71449 20.997 1.121 20.7512 0.683417 20.3136C0.245833 19.876 0 19.2825 0 18.6637V2.33034C0 1.03534 1.03833 -0.00299072 2.33333 -0.00299072H18.6667Z"
                />
              </svg>
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
}
