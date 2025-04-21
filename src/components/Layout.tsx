import React, { ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LessonNavigation from "./LessonNavigation";
import BackToTop from "./BackToTop";
import { useTheme } from "../context/ThemeContext";

// Define props interface with children
interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const location = useLocation();

  // Determine if the current route is a lesson page
  const isLessonPage = [
    // Lesson One
    "/history",
    "/capabilities",
    "/how-it-works",
    "/lesson-one",
    "/token-prediction",
    "/artificial-intelligence",
    "/ai-context",

    // Lesson Two
    "/lesson-two",
    "/context-is-everything",
    "/prompt-basics",
    "/advanced-prompting",
    "/prompt-feedback",

    // Temporarily hide Lesson Three
    /*
    "/lesson-three",
    "/lesson-three-topic-1",
    "/lesson-three-topic-2",
    "/lesson-three-topic-3",
    "/comprehensive",
    */
  ].includes(location.pathname);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-slate-900 text-slate-100"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      <Navbar />
      {isLessonPage && <LessonNavigation currentPath={location.pathname} />}
      <main className="flex-grow">{children || <Outlet />}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
