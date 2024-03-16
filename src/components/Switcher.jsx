// Importing necessary modules from React and other libraries
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseDarkSide from "../UseDarkSide";
import { useState } from "react";

// Defining Switcher functional component
const Switcher = () => {
  // Using custom hook to manage theme
  const [colorTheme, setTheme] = UseDarkSide();
  // Using useState hook to manage dark mode state
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

  // Function to toggle dark mode
  const toggleDarkMode = (checked) => {
    // Setting theme based on checked state
    setTheme(colorTheme);
    // Setting dark mode state
    setDarkSide(checked);
  };

  // Rendering JSX element
  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
};

// Exporting Switcher component
export default Switcher;
