import { memo, useState } from "react";
import Clear from "./Icons/Clear";
import Filter from "./Icons/Filter";
import Search from "./Icons/Search";
import InputField from "./InputField";

function SearchBar() {
  const [searchData, setSearchData] = useState("");

  return (
    <div className="flex m-auto w-[90%] md:w-[35vw] md:m-[unset] bg-white p-3 rounded-md items-center gap-2 relative top-3 md:top-[unset] border border[#EBEAEF] hover:border-[#754DE8] hover:fill-[#754DE8] fill-gray-300 transition-all">
      <Search />
      <InputField data={searchData} clickHandler={setSearchData} />
      <span className="hidden md:flex md:gap-4 md:items-center">
        <Filter />
        <Clear clickHandler={() => setSearchData("")} />
      </span>
    </div>
  );
}

export default memo(SearchBar);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDoI2LpaZP4xkXmkvqWVppee5cpDyktzBs",
//   authDomain: "rethink-page-ec91c.firebaseapp.com",
//   projectId: "rethink-page-ec91c",
//   storageBucket: "rethink-page-ec91c.appspot.com",
//   messagingSenderId: "750678763949",
//   appId: "1:750678763949:web:a8418a3bedffdd6f27d924",
//   measurementId: "G-9Z5HTBYPJT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);