import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card h-[445px] md:h-auto shadow-md">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        className="rounded-bl-[35px] rounded-tr-[35px]"
        loading="lazy"
      />

      <div className="flex gap-4 p-4 ">
        <button className="p-1 px-3 font-Marker text-1xl bg-[#ffd60a] text-[#5a5a5a] rounded-[25px]">
          {exercise.bodyPart}
        </button>
        <button className="p-1 px-3 font-Marker text-1xl bg-[#ffd60a8e] text-[#5a5a5a] rounded-[25px]">
          {exercise.target}
        </button>
      </div>
      <p className="text-[17px] md:text-[20px] font-Marker text-[#001219] ml-[20px]  capitalize ">
        {exercise.name}
      </p>
    </Link>
  );
};

export default ExerciseCard;
