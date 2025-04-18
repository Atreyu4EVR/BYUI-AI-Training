// LessonNavigation component - provides navigation between lesson pages
import React from "react";
import { Link } from "react-router-dom";

interface LessonNavigationProps {
  currentPath: string;
}

const LessonNavigation: React.FC<LessonNavigationProps> = ({ currentPath }) => {
  // Define the lesson structure with separate lessons
  const lessonStructure = {
    lessonOne: [
      { path: "/getting-started", title: "Getting Started" },
      { path: "/history", title: "History of AI" },
      { path: "/capabilities", title: "AI Capabilities" },
      { path: "/how-it-works", title: "How Generative AI Works" },
      { path: "/prompting", title: "Introduction to Prompting" },
      // Activity - assuming this is currently /minimal since that seems to be part of the sequence
      { path: "/minimal", title: "Activity: Minimal Context" },
    ],
    lessonTwo: [
      { path: "/lesson-two", title: "Overview" },
      { path: "/context-is-everything", title: "Context is Everything" },
      { path: "/prompt-basics", title: "Prompt Basics" },
      { path: "/advanced-prompting", title: "Advanced Prompting" },
      { path: "/moderate", title: "Activity: Moderate Context" },
    ],
    lessonThree: [
      { path: "/lesson-three", title: "Overview" },
      { path: "/lesson-three-topic-1", title: "Placeholder 1" },
      { path: "/lesson-three-topic-2", title: "Placeholder 2" },
      { path: "/lesson-three-topic-3", title: "Placeholder 3" },
      { path: "/comprehensive", title: "Activity: Comprehensive Context" },
    ],
  };

  // Determine which lesson the current path belongs to
  const getCurrentLesson = () => {
    for (const [lessonKey, lessonPages] of Object.entries(lessonStructure)) {
      if (lessonPages.some((page) => page.path === currentPath)) {
        return lessonKey;
      }
    }
    return null;
  };

  const currentLesson = getCurrentLesson();

  // If we can't determine the lesson, return null
  if (!currentLesson) {
    return null;
  }

  // Get the pages for the current lesson
  const currentLessonPages =
    lessonStructure[currentLesson as keyof typeof lessonStructure];

  // Find the current page index
  const currentIndex = currentLessonPages.findIndex(
    (page) => page.path === currentPath
  );

  // Get the current page
  const currentPage = currentLessonPages[currentIndex];

  // Determine previous and next pages
  const previousPage =
    currentIndex > 0 ? currentLessonPages[currentIndex - 1] : null;
  const nextPage =
    currentIndex < currentLessonPages.length - 1
      ? currentLessonPages[currentIndex + 1]
      : null;

  // Get a friendly lesson name
  const getLessonName = (lessonKey: string) => {
    switch (lessonKey) {
      case "lessonOne":
        return "Lesson One";
      case "lessonTwo":
        return "Lesson Two";
      case "lessonThree":
        return "Lesson Three";
      default:
        return "Lesson";
    }
  };

  return (
    <div className="w-full mb-4 pt-12 pb-3">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Display which lesson we're in */}
        <div className="text-sm text-center mb-2 text-byui-light-text-secondary dark:text-byui-dark-text-secondary">
          {getLessonName(currentLesson)}
        </div>

        {/* Progress Indicator */}
        <div className="mb-3">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-byui-dark-blue dark:bg-byui-brand-blue-2 h-2.5 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentIndex + 1) / currentLessonPages.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-byui-light-text-secondary dark:text-byui-dark-text-secondary mt-1 text-center">
            {currentIndex + 1} of {currentLessonPages.length}
          </div>
        </div>

        <div className="flex justify-between items-center">
          {previousPage ? (
            <Link
              to={previousPage.path}
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
              <span>Previous: {previousPage.title}</span>
            </Link>
          ) : (
            <div></div> // Empty div to maintain layout
          )}

          {nextPage ? (
            <Link
              to={nextPage.path}
              className="btn-primary flex items-center group"
            >
              <span>Next: {nextPage.title}</span>
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
