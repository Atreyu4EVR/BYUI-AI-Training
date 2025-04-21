import React from "react";
import TokenPredictionActivity from "./TokenPredictionActivity";
import { BookOpen, BarChart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const TokenPrediction: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="page-container">
      <div className="page-content">
        <header className="page-header">
          <h1 className="page-title">Activity: Token Prediction</h1>
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
        <section className="mb-8">
          <p className="text-primary mb-4">
            This activity demonstrates how AI language models predict the next
            token (word or part of a word) based on the context provided. At
            their core, these models are simply predicting what text is most
            likely to come next, based on patterns learned from massive amounts
            of training data. The percentages represent the model's confidence
            level for each prediction.
          </p>
        </section>

        {/* Token Prediction Activity */}
        <section className="mb-8">
          <TokenPredictionActivity />
        </section>

        {/* How It Works Section */}
        <section className="mb-8">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-green-600 flex-shrink-0" />
            How Token Prediction Works
          </h2>

          <p className="text-primary mb-4">
            When you enter a sentence fragment, here's what happens:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                Statistical Analysis
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                The AI analyzes patterns in the text it was trained on to
                determine which words commonly follow your entered phrase.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                Context Matters
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                The AI considers the entire context of your sentence, not just
                the last few words. This helps it make more relevant
                predictions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                Probability Distribution
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Each possible next token is assigned a probability. Higher
                percentages indicate the AI is more confident in that
                prediction.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                Repeated Process
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                In a complete AI system, once a token is selected, it becomes
                part of the context for predicting the next token, and the
                process repeats.
              </p>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="mb-4">
          <h2 className="section-header">
            <BookOpen className="mr-2 text-indigo-600 flex-shrink-0" />
            Administrative Applications
          </h2>

          <p className="text-primary mb-4">
            Understanding token prediction helps you:
          </p>

          <ul className="list-disc ml-6 space-y-2 text-primary">
            <li>
              <strong>Create better AI prompts</strong> - By understanding how
              AI predicts text, you can write prompts that guide it more
              effectively.
            </li>
            <li>
              <strong>Interpret AI responses</strong> - Recognize when an AI
              might be following common patterns rather than providing factual
              information.
            </li>
            <li>
              <strong>Use AI more efficiently</strong> - Knowing how prediction
              works helps you frame your requests in ways the AI will understand
              better.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TokenPrediction;
