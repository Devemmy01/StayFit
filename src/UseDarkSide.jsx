// Importing necessary modules from React
import { useState, useEffect } from "react";

// Defining UseDarkSide custom hook
const UseDarkSide = () => {
    // State variable for theme
    const [theme, setTheme] = useState(localStorage.theme);
    // Determining color theme based on current theme
    const colorTheme = theme === "dark" ? "light" : "dark";

    // Effect hook to update theme in localStorage and apply theme to document
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    // Returning color theme and setter function
    return [colorTheme, setTheme];
}

// Exporting UseDarkSide custom hook
export default UseDarkSide;
