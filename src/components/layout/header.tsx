import React from "react";
import Image from "next/image";
import { MobileMenu } from "./mobileMenu";
import { SearchBar } from "./searchBar";

export const MyHeader = () => {
  return (
    <div className="w-lvw px-4 xl:px-[5vw] lg:self-center h-20 flex flex-row justify-between items-center sticky top-0 z-40 bg-gradient-to-b from-bgPrimary via-bgPrimary/80 to-bgPrimary/0">
      <div className="flex flex-row">
        <a className="flex flex-row items-end" href="/">
          <Image src={"logo.svg"} alt="EverBloom Logo" width={40} height={40} />
          <h1 className="text-2xl lg:text-3xl">EverBloom</h1>
        </a>
        <div className="hidden lg:flex flex-row justify-evenly items-end w-96 h-10">
          <a href="/shop"><h3>Shop</h3></a>
          <a href="/cart"><h3>Cart</h3></a>
          <a href="/about"><h3>About</h3></a>
        </div>
      </div>
      <div className="w-72 hidden lg:block">
        <SearchBar />
      </div>
      <MobileMenu />
    </div>
  );
};
