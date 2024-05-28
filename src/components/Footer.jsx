import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-32 mb-6">
      <h4 className="font-Marker text-xl text-[#001219] dark:text-[#fff]">
        devemmy
      </h4>
      <div className="flex gap-5 mt-3">
        <a href="https://github.com/Devemmy01" target="_blank">
          <i className="text-4xl text-[#001219] dark:text-[#fff] bx bxl-github cursor-pointer"></i>
        </a>
        <a href="https://twitter.com/Devemmy25" target="_blank">
          <i className="text-4xl text-[#001219] dark:text-[#fff] bx bxl-twitter cursor-pointer"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
