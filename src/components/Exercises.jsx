import React from "react";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useMediaQuery } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";
import UseDarkSide from "../UseDarkSide";

const Exercises = ({ exercises, setExercises, bodyPart, theme }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 7; // Number

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1300, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=250",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=250`,
          exerciseOptions);
      };
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div id="exercises" className="p-[30px]">
      <h3 className="text-2xl md:text-4xl mt-[-2rem] md:mt-0 text-[#001219] dark:text-[#fefcfb] font-[700] font-Ojuju border-b-4 border-[#ffd60a] w-[175px] md:w-[270px]">
        Showing Results
      </h3>

      <div className="flex flex-row flex-wrap gap-14 mt-16 md:mt-28 justify-center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>

      <div className="mt-[100px] flex items-center justify-center">
        {exercises.length > 7 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            shape="rounded"
            variant="outlined"
            size={isSmallScreen ? "small" : "large"}
            // color="primary"
            className={`p-3 rounded-full ${
              theme === "light" ? "bg-white" : "bg-white "
            }`}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
