import React from "react";
import { BookOpen } from "lucide-react";

const Prompting = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Introduction to Prompting</h1>
          <p className="page-subtitle">
            Learn the basics of crafting effective prompts for AI systems
          </p>
        </header>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            Introduction
          </h2>
          <p className="text-primary mb-4">
            This is a placeholder page for the Introduction to Prompting lesson.
            You'll find more detailed content about prompt engineering in Lesson
            Two.
          </p>
          <p className="text-primary mb-4">
            Please proceed to Lesson Two for comprehensive information about
            prompt engineering techniques and best practices.
          </p>
        </div>

        {/* Next Steps Button */}
        <div className="flex justify-center mt-8">
          <a href="/lesson-two" className="btn-primary">
            Continue to Lesson Two
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prompting;
