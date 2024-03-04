import React from "react";
import Heropic from "../assets/Hero.jpeg";

const HeroBanner = () => {
  return (
    <div className="flex relative p-[30px] mt-10 md:mt-16">
      <div className="w-full">
        <p className="text-2xl md:text-3xl font-Marker font-[500] text-[#001219]">
          Transform your body
        </p>
        <p className="font-[900] text-6xl md:text-8xl font-Ojuju text-[#001219]">
          Sweat, smile <br /> and repeat
        </p>
        <p className="font-Marker pt-4 text-xl text-[#001219]">
          Explore the most effective exercises
        </p>
        <button
          className="bg-[#ffd60a] shadow-md h-[43px] w-[140px] font-[600] font-Marker mt-6  rounded-[5px]"
          href="#exercises"
        >
          Click here
        </button>

        
          <p className="font-[700] hidden lg:block text-center text-[200px] font-Ojuju opacity-[0.2] text-[#ffd60a] mt-[-60px]">
            Exercise
          </p>

      </div>

      <img
        src={Heropic}
        alt="banner"
        className="absolute hidden lg:block right-[0px] top-[0px] mt-[-140px] h-screen w-auto"
      />
    </div>
  );
};

export default HeroBanner;
