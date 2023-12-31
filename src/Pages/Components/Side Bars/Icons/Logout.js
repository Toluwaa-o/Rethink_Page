import { useNavigate } from "react-router";

export default function Logout() {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      className="md:hover:fill-[#5E3EBA] fill-[#4D4959] md:hover:scale-105 transition-all"
      xmlns="http://www.w3.org/2000/svg"
      onClick={logOutHandler}
      role="button"
    >
      <path
        id="Vector"
        d="M12.9267 14.6853L15.9483 11.6637H4.66667V9.33034H15.9483L12.9267 6.30868L14.5833 4.66368L20.4167 10.497L14.5833 16.3303L12.9267 14.6853ZM18.6667 -0.00299072C19.2855 -0.00299072 19.879 0.242842 20.3166 0.680427C20.7542 1.11801 21 1.7115 21 2.33034V7.77868L18.6667 5.44534V2.33034H2.33333V18.6637H18.6667V15.5487L21 13.2153V18.6637C21 19.2825 20.7542 19.876 20.3166 20.3136C19.879 20.7512 19.2855 20.997 18.6667 20.997H2.33333C1.71449 20.997 1.121 20.7512 0.683417 20.3136C0.245833 19.876 0 19.2825 0 18.6637V2.33034C0 1.03534 1.03833 -0.00299072 2.33333 -0.00299072H18.6667Z"
      />
    </svg>
  );
}
