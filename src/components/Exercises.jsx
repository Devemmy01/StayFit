// Importing necessary modules from React and Material-UI
import React from "react";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useMediaQuery } from "@mui/material";

// Importing utility functions
import { fetchData, exerciseOptions } from "../utils/fetchData";

// Importing ExerciseCard component
import ExerciseCard from "./ExerciseCard";
import UseDarkSide from "../UseDarkSide";

// Defining Exercises functional component with props
const Exercises = ({ exercises, setExercises, bodyPart, theme }) => {
  // State variables
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 7; // Number of exercises per page

  // Calculating indexes of exercises to be displayed on current page
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  // Checking for small screen size
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  // Function to handle pagination
  const paginate = (event, value) => {
    setCurrentPage(value);

    // Smooth scrolling to top of exercises section
    window.scrollTo({ top: 1300, behavior: "smooth" });
  };

  // Effect hook to fetch exercises data based on body part selected
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
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  // Rendering JSX elements
  return (
    <div id="exercises" className="p-[30px]">
      {/* Heading */}
      <h3 className="text-2xl md:text-4xl mt-[-2rem] md:mt-0 text-[#001219] dark:text-[#fefcfb] font-[700] font-Ojuju border-b-4 border-[#ffd60a] w-[175px] md:w-[270px]">
        Showing Results
      </h3>

      {/* Displaying exercise cards */}
      <div className="flex flex-row flex-wrap gap-14 mt-16 md:mt-28 justify-center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-[100px] flex items-center justify-center">
        {/* Rendering pagination component if number of exercises is greater than 7 */}
        {exercises.length > 7 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            shape="rounded"
            variant="outlined"
            size={isSmallScreen ? "small" : "large"}
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

// Exporting Exercises component
export default Exercises;
