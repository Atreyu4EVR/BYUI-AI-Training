import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
    >
      <div className="w-8 h-8 relative">
        {/* Sun icon */}
        <Sun
          className={`absolute top-0 left-0 transition-all duration-300 ${
            isDark
              ? "opacity-0 scale-50 rotate-90"
              : "opacity-100 scale-100 rotate-0"
          } text-yellow-400`}
          size={24}
          strokeWidth={2}
        />

        {/* Moon icon */}
        <Moon
          className={`absolute top-0 left-0 transition-all duration-300 ${
            isDark
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 rotate-90"
          } text-slate-300`}
          size={24}
          strokeWidth={2}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
