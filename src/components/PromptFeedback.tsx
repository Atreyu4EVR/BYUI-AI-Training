import React from "react";
import PromptFeedbackActivity from "./PromptFeedbackActivity";
import { BookOpen } from "lucide-react";

const PromptFeedback: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Prompt Engineering Practice</h1>
          <p className="page-subtitle">
            Get feedback on your prompts to improve your AI communication skills
          </p>
        </header>

        {/* Introduction Section */}
        <div className="mb-8">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            About This Activity
          </h2>

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

        {/* Tips Section */}
        <div>
          <h2 className="section-header">
            <BookOpen className="mr-2 text-cyan-600 flex-shrink-0" />
            Tips for Improvement
          </h2>

          <p className="text-primary mb-4">
            As you practice with this tool, consider these strategies for
            improving your prompts:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                Add Key Context
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Include relevant information about audience, purpose, and
                constraints. The more context you provide, the more tailored the
                AI's response will be.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                Be Specific
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Rather than vague requests, specify exactly what you need.
                Include details about format, tone, length, or any other
                relevant parameters.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                Structure Your Prompt
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Organize your prompt into clear sections like background, task,
                format requirements, and constraints. This helps the AI
                understand your needs better.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                Iterate and Refine
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Prompt engineering is iterative. If you don't get the result you
                want, refine your prompt based on the feedback and try again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptFeedback;
