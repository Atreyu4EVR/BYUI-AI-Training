import React, { useState, useEffect } from "react";
import { InferenceClient } from "@huggingface/inference";
import ReactMarkdown from "react-markdown";

// Example prompts for users to try
const EXAMPLE_PROMPTS = [
  "Write an email about HVAC maintenance in Chapman Hall.",
  "Generate a lesson plan for a Biology class.",
  "Create a template for giving student feedback on their essays.",
  "Explain the concept of artificial intelligence to first-year students.",
  "Draft an announcement about new campus parking regulations.",
];

const PromptFeedbackActivity: React.FC = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [client, setClient] = useState<InferenceClient | null>(null);
  const [showExamples, setShowExamples] = useState(false);

  // Initialize the client when the component mounts
  useEffect(() => {
    try {
      const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;
      if (!apiKey) {
        setError(
          "API key is not configured. Please contact the administrator."
        );
        return;
      }

      setClient(new InferenceClient(apiKey));
    } catch (err) {
      console.error("Error initializing client:", err);
      setError("Failed to initialize client. Please try again later.");
    }
  }, []);

  // Get feedback on the user's prompt
  const handleGetFeedback = async () => {
    if (!userPrompt.trim()) {
      setError("Please enter a prompt to get feedback");
      return;
    }

    if (!client) {
      setError("Client is not initialized. Please try again later.");
      return;
    }

    setLoading(true);
    setError("");
    setFeedback("");

    try {
      // System prompt that instructs the LLM how to analyze the user's prompt
      const systemPrompt = `You are a helpful AI assistant for the AI engineers at BYU-Idaho. The engineers have created a course for university employees to learn about prompt engineering. Your task is to analyze the given prompt.

      Use the following feedback template to provide feedback and score the prompt:

      ---

      Context-Based Prompt Score: [X/10]

      Strengths:
      - [Identify 1-2 specific contextual elements the student included effectively]

      Areas for Improvement:
      - [Identify 1-2 specific contextual elements that could be enhanced]

      Revised Example:
      [Provide a brief example of how adding missing contextual elements would improve the prompt]

      ---

      Provide a balanced assessment highlighting both strengths and areas for improvement. Keep your feedback concise, constructive, and actionable.
    
    
      You MUST follow the template exactly. Use proper Markdown syntax with headings, bold text, and numbered lists. Do not add any HTML tags.`;

      // The message to send to the model
      const messages = [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `Please analyze this prompt and give feedback on how it could be improved based on the principles of effective prompt engineering:\n\n"${userPrompt}"`,
        },
      ];

      let out = "";

      // Stream the response from the LLM
      const stream = await client.chatCompletionStream({
        model: "meta-llama/Llama-3.3-70B-Instruct", // You can change this to a different model if needed
        messages,
        max_tokens: 600,
      });

      // Process the streaming response
      for await (const chunk of stream) {
        if (chunk.choices && chunk.choices.length > 0) {
          const newContent = chunk.choices[0].delta.content || "";
          out += newContent;
          setFeedback(out);
        }
      }
    } catch (err) {
      console.error("Error getting feedback:", err);
      setError("Failed to get feedback. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Select an example prompt
  const handleSelectExample = (prompt: string) => {
    setUserPrompt(prompt);
    setShowExamples(false);
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Instructions
        </h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Type a prompt you would use when interacting with an AI system. Our
          system will analyze it and provide feedback based on prompt
          engineering best practices.
        </p>

        <textarea
          className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-32 text-slate-800 dark:text-white dark:bg-slate-700"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="Enter your prompt here... (e.g., 'Write an email about HVAC maintenance in Chapman Hall')"
        />
        <div className="mt-4">
          <button
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleGetFeedback}
            disabled={loading || !userPrompt.trim() || !client}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Analyzing...
              </>
            ) : (
              "Get Feedback"
            )}
          </button>
        </div>
      </div>

      {feedback && (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
          <div className="prose prose-slate dark:prose-invert prose-headings:text-cyan-600 dark:prose-headings:text-cyan-400 prose-headings:font-bold prose-strong:font-semibold prose-strong:text-slate-800 dark:prose-strong:text-slate-200 prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-code:text-purple-600 dark:prose-code:text-purple-300 prose-ol:pl-6 prose-ul:pl-6 prose-li:my-1 max-w-none">
            <ReactMarkdown>{feedback}</ReactMarkdown>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400">
          {error}
        </div>
      )}
    </div>
  );
};

export default PromptFeedbackActivity;
