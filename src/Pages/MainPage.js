import { useEffect, useState } from "react";
import AddArticle from "./Components/Add Article/AddArticle";
import Header from "./Components/Header/Header";
import MainSection from "./Components/Main Section/MainSection";
import PopularSection from "./Components/Popular Section/PopularSection";
import SearchBar from "./Components/Search Bar/SearchBar";
import SideBarLeft from "./Components/Side Bars/SideBarLeft";
import CircularProgress from "@mui/material/CircularProgress";

function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <span className="h-[100vh] w-[100vw] grid place-content-center">
          <CircularProgress color="secondary" />
        </span>
      ) : (
        <div className="md:grid md:grid-cols-myGrid md:grid-rows-myRows max-w-[100vw] overflow-x-hidden">
          <section className="hidden md:flex md:row-span-2">
            <SideBarLeft />
          </section>
          <section className="bg-[#F1EDFD] bg-myImage bg-no-repeat bg-myPosition bg-mySize font-raleway rounded-b-3xl mb-4 md:bg-resetBg md:bg-white">
            <Header />
            <span className="md:p-4">
              <MainSection />
            </span>
            <span className="md:hidden">
              <SearchBar />
            </span>
          </section>
          <PopularSection />
          <span className="md:hidden">
            <AddArticle />
          </span>
        </div>
      )}
    </>
  );
}

export default MainPage;
