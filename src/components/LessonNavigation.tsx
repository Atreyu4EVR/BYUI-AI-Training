// LessonNavigation component - provides navigation between lesson pages
import React from "react";
import { Link } from "react-router-dom";

interface LessonNavigationProps {
  currentPath: string;
}

const LessonNavigation: React.FC<LessonNavigationProps> = ({ currentPath }) => {
  // Define the lesson order
  const lessonOrder = [
    { path: "/getting-started", title: "Getting Started" },
    { path: "/history", title: "History of AI" },
    { path: "/capabilities", title: "AI Capabilities" },
    { path: "/how-it-works", title: "How Generative AI Works" },
    { path: "/tool-comparison", title: "AI Tool Comparison" },
    { path: "/minimal", title: "Minimal Context" },
    { path: "/moderate", title: "Moderate Context" },
    { path: "/comprehensive", title: "Comprehensive Context" },
  ];

  // Find the current lesson index
  const currentIndex = lessonOrder.findIndex(
    (lesson) => lesson.path === currentPath
  );

  // Get current lesson
  const currentLesson = lessonOrder[currentIndex];

  // Determine previous and next lessons
  const previousLesson =
    currentIndex > 0 ? lessonOrder[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessonOrder.length - 1
      ? lessonOrder[currentIndex + 1]
      : null;

  return (
    <div className="w-full mb-4 pt-12 pb-3">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Progress Indicator */}
        <div className="mb-3">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-byui-dark-blue dark:bg-byui-brand-blue-2 h-2.5 rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / lessonOrder.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-byui-light-text-secondary dark:text-byui-dark-text-secondary mt-1 text-center">
            Lesson {currentIndex + 1} of {lessonOrder.length}
          </div>
        </div>

        <div className="flex justify-between items-center">
          {previousLesson ? (
            <Link
              to={previousLesson.path}
              className="flex items-center text-byui-dark-blue dark:text-byui-dark-accent-cyan hover:text-byui-brand-blue-2 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <span>Previous: {previousLesson.title}</span>
            </Link>
          ) : (
            <div></div> // Empty div to maintain layout
          )}

          {nextLesson ? (
            <Link
              to={nextLesson.path}
              className="btn-primary flex items-center group"
            >
              <span>Next: {nextLesson.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          ) : (
            <Link to="/" className="btn-primary flex items-center group">
              <span>Return to Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonNavigation;
