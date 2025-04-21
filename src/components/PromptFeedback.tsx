import React from "react";
import PromptFeedbackActivity from "./PromptFeedbackActivity";
import { BookOpen } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const PromptFeedback: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Activity: Prompt Engineering</h1>
          <p>powered by</p>
          <div className="flex justify-center items-center relative group">
            <img
              src={
                theme === "dark"
                  ? "src/assets/hf-logo-with-white-title.png"
                  : "src/assets/hf-logo-with-title.png"
              }
              alt="Hugging Face"
              className="w-32"
              title="Hugging Face - The collaboration platform for the machine learning community"
            />
            <div
              className="absolute bottom-full mb-2 w-80 bg-slate-800 text-white p-3 rounded-lg shadow-lg 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm"
            >
              <p className="mb-2">
                Hugging Face is the collaboration platform for the machine
                learning community.
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-slate-800 rotate-45"></div>
            </div>
          </div>
        </header>

        {/* Introduction Section */}
        <div className="mb-8">
          <p className="text-primary mb-4">
            This interactive activity allows you to practice the prompt
            engineering principles you've learned in Lesson 2. Submit a prompt
            and our AI system will analyze it for effectiveness, providing
            constructive feedback to help you craft better AI interactions.
          </p>
        </div>

        {/* Feedback Activity */}
        <div>
          <PromptFeedbackActivity />
        </div>
      </div>
    </div>
  );
};

export default PromptFeedback;
