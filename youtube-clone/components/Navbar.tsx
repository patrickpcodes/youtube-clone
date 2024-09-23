"use client";

import { useState, useEffect } from "react";
import clsx from "clsx"; // For conditional class names

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Toggle dark mode class on the root HTML element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar p-4 flex justify-between items-center">
      <h1 className={clsx("text-black dark:text-white")}>youtube-clone</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-black dark:bg-white text-white dark:text-black p-2 rounded"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
