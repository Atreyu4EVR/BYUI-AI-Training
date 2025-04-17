import React from "react";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center p-1 rounded-full focus:outline-none"
    >
      <div className="relative w-12 h-6 transition-colors duration-300 bg-slate-700 dark:bg-slate-600 rounded-full shadow-inner overflow-hidden">
        {/* Track */}
        <div className="absolute inset-0 flex items-center justify-between px-1">
          {/* Sun icon - light mode */}
          <SunIcon className="h-4 w-4 text-yellow-300" />

          {/* Moon icon - dark mode */}
          <MoonIcon className="h-4 w-4 text-slate-200" />
        </div>

        {/* Thumb/Handle */}
        <div
          className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-300 ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
