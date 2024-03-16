// Importing React module

import React from "react";

// Defining BodyPart functional component with props
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  // Rendering JSX elements
  return (
    <div className="">
      {/* Button to select body part */}
      <button
        onClick={() => {
          // Setting selected body part and scrolling to exercises section
          setBodyPart(item);
          window.scrollTo({top: 1800, left: 100, behavior: "smooth"});
        }}
        // Conditional styling based on selected body part
        className={`${
          bodyPart === item
            ? "bg-[#ffd60a] shadow-md dark:bg-[#fefcfb] dark:text-[#001219]"
            : "bg-[#ffd60a38] dark:bg-[#001219] dark:text-[#fefcfb] text-[#001219]"
        } p-2 rounded-full m-1 font-bold capitalize font-Ojuju`}
      >
        {item}
      </button>
    </div>
  );
};

// Exporting BodyPart component
export default BodyPart;
