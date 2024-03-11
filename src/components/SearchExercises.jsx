import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

import BodyPartCategory from "./BodyPartCategory";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    try {
      if (search) {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=200",
          exerciseOptions
        );

        const searchedExercises = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch("");
        setExercises(searchedExercises);

      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center mt-[37px] p-[20px]">
      <p className="font-[700] text-[30px] lg:text-[45px] text-center mb-[50px] font-Ojuju text-[#001219] dark:text-[#fefcfb]">
        Amazing Exercises To <br /> Try Out
      </p>

      <div className="relative mb-[72px]">
        <i
          className="bx bx-search text-gray-400 absolute top-[10px] md:top-[8px] left-3 text-3xl md:text-4xl"
          onClick={handleSearch}
        ></i>

        <input
          type="text"
          className="h-[55px] w-[310px] md:w-[530px] p-3 px-10 outline-none rounded-full font-[700] pl-14 shadow-md font-Ojuju border-none"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

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

export default SearchExercises;
