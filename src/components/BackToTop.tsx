import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } fixed bottom-6 right-6 p-3 bg-byui-dark-blue dark:bg-byui-brand-blue-2 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-byui-brand-blue-2 dark:hover:bg-byui-dark-accent-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-byui-brand-blue-2 z-50 group`}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUp className="h-6 w-6 group-hover:animate-bounce" />
      <span className="sr-only">Back to top</span>
    </button>
  );
};

export default BackToTop;
