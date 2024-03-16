// Importing React module and useState hook
import React from "react";
import { useState } from "react";

// Importing components
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

// Defining Home functional component
const Home = () => {
  // State variables
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  // Logging bodyPart state
  console.log(bodyPart, "bodyPart")

  // Rendering JSX elements
  return (
    <div>
      {/* Hero banner */}
      <HeroBanner />
      {/* Search exercises component */}
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      {/* Exercises component */}
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

// Exporting Home component
export default Home;
