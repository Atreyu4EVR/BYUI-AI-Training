import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";

const Layout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-slate-900 text-slate-100"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* Optional: Add a footer here */}
    </div>
  );
};

export default Layout;
