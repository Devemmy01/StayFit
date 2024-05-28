// Importing necessary modules from React and React Router
import React from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseDarkSide from "../UseDarkSide";
import { useState } from "react";

import logo from "../assets/sflog.png";
import logoo from "../assets/sflogd.png";

// Importing Switcher component
// import Switcher from "./Switcher";

// Defining Navbar functional component
const Navbar = () => {
  const [colorTheme, setTheme] = UseDarkSide();
  // Using useState hook to manage dark mode state
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  // Function to toggle dark mode
  const toggleDarkMode = (checked) => {
    // Setting theme based on checked state
    setTheme(colorTheme);
    // Setting dark mode state
    setDarkSide(checked);
  };

  // Rendering JSX elements
  return (
    <div className="flex justify-around lg:justify-normal md:gap-40">
      {/* Logo with link to homepage */}
      <Link to={"/"}>
        <img src={darkSide ? logo : logoo} className="h-[70px] mt-2 md:pl-5" alt="" />
      </Link>

      {/* Navigation links */}
      <div className="flex gap-5 items-center">
        <Link
          to={"/"}
          className="font-Ojuju font-[750] text-[17px] text-[#001219] dark:text-[#fefcfb] md:text-xl border-b-4 border-[#ffd60a]"
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="font-Ojuju font-[750] text-[17px] md:text-xl text-[#001219] dark:text-[#fefcfb]"
        >
          Exercises
        </a>
      </div>

      {/* Dark mode switch */}
      <div className="flex items-center absolute right-5 mt-16 md:mt-6 z-10">
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={30}
        />
      </div>
    </div>
  );
};

// Exporting Navbar component
export default Navbar;
