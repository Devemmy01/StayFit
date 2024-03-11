import React from "react";
import { useEffect, useState } from "react";

import { fetchData, exerciseOptions } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);

  return (
    <div id="exercises" className="p-[30px]">
      <h3 className="text-2xl md:text-4xl mt-[-2rem] md:mt-0 text-[#001219] dark:text-[#fefcfb] font-[700] font-Ojuju border-b-4 border-[#ffd60a] w-[175px]">
        Showing Results
      </h3>

      <div className="flex flex-row flex-wrap justify-center">
        {exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
