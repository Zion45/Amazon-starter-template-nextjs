import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150} // Set the width of the image
            height={40} // Set the height of the image
            objectFit="contain"
            className="cursor-pointer"
            alt="Logo" // Always include an alt attribute for accessibility
          />
        </div>
      </div>
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
        <input
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md flex-grow flex-shrink"
          type="text"
        />
        <SearchIcon className="h-12 p-4 cursor-pointer bg-yellow-500 rounded-r-md" />
      </div>

      <div>{/* Bottom nav */}</div>
    </header>
  );
}

export default Header;
