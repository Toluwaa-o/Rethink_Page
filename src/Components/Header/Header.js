import React from "react";
import MenuIcon from "../Menu Icon/MenuIcon";
import DropDownMenu from "../Drop Down Menu/DropDownMenu";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../Search Bar/SearchBar";
import AddArticle from "../Add Article/AddArticle";
import Coins from "../Coins/Coins";

export default function Header() {
  return (
    <section className="flex justify-between items-center md:bg-white md:shadow-myShadow">
      <MenuIcon />
      <span className="md:hidden">
        <DropDownMenu />
      </span>
      <span className="md:bg-white md:flex md:gap-4 md:p-4 md:items-center md:w-[75%]">
      <span className="md:block hidden">
        <SearchBar />
        </span>
        <AddArticle />
        <span className="md:block hidden">
        <Coins />
        </span>
      </span>
      <Avatar />
    </section>
  );
}
