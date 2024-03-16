// Importing necessary modules from React and React Router
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Importing Switcher component
import Switcher from "./Switcher";

// Defining Navbar functional component
const Navbar = () => {
  // Rendering JSX elements
  return (
    <div className=" flex justify-around lg:justify-normal md:gap-40 mt-5 md:mt-0">
      {/* Logo with link to homepage */}
      <Link to={"/"}>
        <h2 className="text-3xl font-[800] font-Ojuju md:m-[20px] text-[#001219] dark:text-[#fefcfb]">
          Stay-Fit
        </h2>
      </Link>

      {/* Navigation links */}
      <div className=" flex gap-5 items-center">
        <Link
          to={"/"}
          className="font-Ojuju font-[750] text-[17px] text-[#001219] dark:text-[#fefcfb] md:text-xl border-b-4 border-[#ffd60a]"
        >
          {" "}
          Home{" "}
        </Link>
        <a
          href="#exercises"
          className="font-Ojuju font-[750] text-[17px] md:text-xl text-[#001219] dark:text-[#fefcfb]"
        >
          Exercises
        </a>
      </div>

      {/* Dark mode switch */}
      <div className="flex items-center absolute right-5 mt-12 md:mt-6 z-10">
        <Switcher />
      </div>
    </div>
  );
};

// Exporting Navbar component
export default Navbar;
