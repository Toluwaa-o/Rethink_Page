export default function SearchBar() {
  return (
    <div className="flex m-auto w-[90%] md:w-[35vw] md:m-[unset] bg-white p-3 rounded-md items-center gap-2 relative top-3 md:top-[unset] border border[#EBEAEF] hover:border-[#754DE8] hover:fill-[#754DE8] fill-gray-300 transition-all">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.0538 20.0462C21.3321 20.3244 21.3321 20.7756 21.0538 21.0538C20.7756 21.3321 20.3244 21.3321 20.0462 21.0538L16.6262 17.6338C16.3479 17.3556 16.3479 16.9044 16.6262 16.6262C16.9044 16.3479 17.3556 16.3479 17.6338 16.6262L21.0538 20.0462ZM10.29 17.8425C6.11886 17.8425 2.73749 14.4611 2.73749 10.29C2.73749 6.11886 6.11886 2.73749 10.29 2.73749C14.4611 2.73749 17.8425 6.11886 17.8425 10.29C17.8425 14.4611 14.4611 17.8425 10.29 17.8425ZM10.29 16.4175C13.6741 16.4175 16.4175 13.6741 16.4175 10.29C16.4175 6.90586 13.6741 4.16249 10.29 4.16249C6.90586 4.16249 4.16249 6.90586 4.16249 10.29C4.16249 13.6741 6.90586 16.4175 10.29 16.4175ZM6.77499 9.71999C6.77499 9.98232 6.56232 10.195 6.29999 10.195C6.03765 10.195 5.82499 9.98232 5.82499 9.71999C5.82499 7.56884 7.56884 5.82499 9.71999 5.82499C9.98232 5.82499 10.195 6.03765 10.195 6.29999C10.195 6.56232 9.98232 6.77499 9.71999 6.77499C8.09351 6.77499 6.77499 8.09351 6.77499 9.71999Z" />
      </svg>

      <input
        className="placeholder:text-[#463D61] placeholder:text-sm placeholder:tracking-wider w-[90%] outline-none"
        type="text"
        name="Search"
        aria-label="Search"
        placeholder="Search for templates, projects, etc"
      />
      <span className="hidden md:flex md:gap-4 md:items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5.00001C8.73478 5.00001 8.48043 5.10537 8.29289 5.2929C8.10536 5.48044 8 5.73479 8 6.00001C8 6.26523 8.10536 6.51958 8.29289 6.70712C8.48043 6.89465 8.73478 7.00001 9 7.00001C9.26522 7.00001 9.51957 6.89465 9.70711 6.70712C9.89464 6.51958 10 6.26523 10 6.00001C10 5.73479 9.89464 5.48044 9.70711 5.2929C9.51957 5.10537 9.26522 5.00001 9 5.00001ZM6.17 5.00001C6.3766 4.41448 6.75974 3.90744 7.2666 3.5488C7.77346 3.19015 8.37909 2.99756 9 2.99756C9.62091 2.99756 10.2265 3.19015 10.7334 3.5488C11.2403 3.90744 11.6234 4.41448 11.83 5.00001H19C19.2652 5.00001 19.5196 5.10537 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001C20 6.26523 19.8946 6.51958 19.7071 6.70712C19.5196 6.89465 19.2652 7.00001 19 7.00001H11.83C11.6234 7.58554 11.2403 8.09258 10.7334 8.45122C10.2265 8.80986 9.62091 9.00246 9 9.00246C8.37909 9.00246 7.77346 8.80986 7.2666 8.45122C6.75974 8.09258 6.3766 7.58554 6.17 7.00001H5C4.73478 7.00001 4.48043 6.89465 4.29289 6.70712C4.10536 6.51958 4 6.26523 4 6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10537 4.73478 5.00001 5 5.00001H6.17ZM15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8947 14.7348 13 15 13C15.2652 13 15.5196 12.8947 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12.17 11C12.3766 10.4145 12.7597 9.90744 13.2666 9.5488C13.7735 9.19015 14.3791 8.99756 15 8.99756C15.6209 8.99756 16.2265 9.19015 16.7334 9.5488C17.2403 9.90744 17.6234 10.4145 17.83 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8947 19.2652 13 19 13H17.83C17.6234 13.5855 17.2403 14.0926 16.7334 14.4512C16.2265 14.8099 15.6209 15.0025 15 15.0025C14.3791 15.0025 13.7735 14.8099 13.2666 14.4512C12.7597 14.0926 12.3766 13.5855 12.17 13H5C4.73478 13 4.48043 12.8947 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H12.17ZM9 17C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8947 8.73478 19 9 19C9.26522 19 9.51957 18.8947 9.70711 18.7071C9.89464 18.5196 10 18.2652 10 18C10 17.7348 9.89464 17.4804 9.70711 17.2929C9.51957 17.1054 9.26522 17 9 17ZM6.17 17C6.3766 16.4145 6.75974 15.9074 7.2666 15.5488C7.77346 15.1902 8.37909 14.9976 9 14.9976C9.62091 14.9976 10.2265 15.1902 10.7334 15.5488C11.2403 15.9074 11.6234 16.4145 11.83 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8947 19.2652 19 19 19H11.83C11.6234 19.5855 11.2403 20.0926 10.7334 20.4512C10.2265 20.8099 9.62091 21.0025 9 21.0025C8.37909 21.0025 7.77346 20.8099 7.2666 20.4512C6.75974 20.0926 6.3766 19.5855 6.17 19H5C4.73478 19 4.48043 18.8947 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H6.17Z" />
        </svg>

        <svg
          width="28"
          height="28"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 2C4.7 2 2 4.7 2 8C2 11.3 4.7 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2ZM10.625 9.575L9.575 10.625L8 9.05L6.425 10.625L5.375 9.575L6.95 8L5.375 6.425L6.425 5.375L8 6.95L9.575 5.375L10.625 6.425L9.05 8L10.625 9.575Z" />
        </svg>
      </span>
    </div>
  );
}
