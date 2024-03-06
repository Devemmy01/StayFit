import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      if (search) {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back', exerciseOptions);
        
        console.log(exercisesData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="flex flex-col w-full items-center justify-center mt-[37px] p-[20px]">
      <p className="font-[700] text-[30px] lg:text-[45px] text-center mb-[50px] font-Ojuju text-[#001219]">
        Amazing Exercises To <br /> Try Out
      </p>

      <div className="relative mb-[72px]">
        <i className="bx bx-search text-gray-400 absolute top-[17px] md:top-4 left-3 text-3xl md:text-4xl" onClick={handleSearch}></i>

        <input
          type="text"
          className="h-[65px] w-[310px] md:w-[530px] p-3 px-10 outline-none rounded-full font-[700] pl-14 shadow-md font-Ojuju border-none"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
