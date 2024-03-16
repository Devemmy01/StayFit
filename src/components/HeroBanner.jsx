// Importing React module and Hero image
import React from "react";
import Heropic from "../assets/Hero.jpeg";

// Defining HeroBanner functional component
const HeroBanner = () => {
  // Rendering JSX elements
  return (
    <div className="flex relative p-[30px] mt-10 md:mt-16">
      <div className="w-full">
        {/* Title */}
        <p className="text-2xl md:text-3xl font-Marker font-[500] text-[#001219] dark:text-[#fefcfbb7]">
          Transform your body
        </p>
        {/* Subtitle */}
        <p className="font-[900] text-6xl md:text-8xl font-Ojuju text-[#001219] dark:text-[#fefcfb]">
          Sweat, smile <br /> and repeat
        </p>
        {/* Description */}
        <p className="font-Marker pt-4 text-xl text-[#001219] dark:text-[#fefcfbb7]">
          Explore the most effective exercises
        </p>
        {/* Button */}
        <a href="#exercises" className="cursor-pointer">
          <button className="bg-[#ffd60a] shadow-md h-[43px] w-[140px] font-[600] font-Marker mt-6  rounded-[5px]">
            Click here
          </button>
        </a>
        {/* Hidden text */}
        <p className="font-[700] hidden lg:block p-0 text-center text-[250px] font-Ojuju opacity-[0.2] text-[#ffd60a] mt-[50px]">
          Exercise
        </p>
      </div>
      {/* Hero image */}
      <img
        src={Heropic}
        alt="banner"
        className="absolute hidden lg:block right-[0px] top-[0px] mt-[-140px] h-screen w-auto rounded-bl-[80px] rounded-tl-[80px]"
      />
    </div>
  );
};

// Exporting HeroBanner component
export default HeroBanner;
