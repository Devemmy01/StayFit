import React from "react";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div className="">
      <button
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
        className={`${
          bodyPart === item
            ? "bg-[#ffd60a] shadow-md text-[#fefcfb] dark:bg-[#fefcfb] dark:text-[#001219]"
            : "bg-[#ffd60a38] dark:bg-[#001219] dark:text-[#fefcfb] text-[#001219]"
        } p-2 rounded-full m-1 font-bold capitalize font-Ojuju`}
      >
        {item}
      </button>
    </div>
  );
};

export default BodyPart;
