// Importing necessary hooks and functions from React and utility file
import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

// Importing BodyPartCategory component
import BodyPartCategory from "./BodyPartCategory";

// Defining SearchExercises functional component with props
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // Setting up state variables using useState hook
  const [search, setSearch] = useState(''); // Search input value
  const [bodyParts, setBodyParts] = useState([]); // List of body parts

  // useEffect hook to fetch body parts data when component mounts
  useEffect(() => {
    // Function to fetch body parts data asynchronously
    const fetchExercisesData = async () => {
      // Fetching body parts data from API
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      // Setting body parts state with data from API
      setBodyParts(['all', ...bodyPartsData]);
    }

    // Calling the fetchExercisesData function
    fetchExercisesData();
  }, []);

  // Function to handle search input
  const handleSearch = async () => {
    try {
      // Checking if search input is not empty
      if (search) {
        // Fetching exercises data from API
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=250",
          exerciseOptions
        );

        // Filtering exercises based on search input
        const searchedExercises = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );

        // Resetting search input and setting exercises state with filtered data
        setSearch("");
        setExercises(searchedExercises);
      }
    } catch (error) {
      // Logging error if fetch fails
      console.error("Error fetching data:", error);
    }
  };

  // Rendering JSX elements
  return (
    <div className="flex flex-col w-full items-center justify-center mt-[37px] p-[20px]">
      <p className="font-[700] text-[30px] lg:text-[45px] text-center mb-[50px] font-Ojuju text-[#001219] dark:text-[#fefcfb]">
        Amazing Exercises To <br /> Try Out
      </p>

      <div className="relative mb-[72px]">
        {/* Search icon with onClick event */}
        <i
          className="bx bx-search text-gray-400 absolute top-[10px] md:top-[8px] left-3 text-3xl md:text-4xl"
          onClick={handleSearch}
        ></i>

        {/* Search input field */}
        <input
          type="text"
          className="h-[55px] w-[310px] md:w-[530px] p-3 px-10 outline-none rounded-full font-[700] pl-14 shadow-md font-Ojuju border-none"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearch()
            }
          }}
        />
      </div>

      {/* Rendering BodyPartCategory component */}
      <div className="relative w-full p-[20px]">
        <BodyPartCategory
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
};

// Exporting SearchExercises component
export default SearchExercises;
