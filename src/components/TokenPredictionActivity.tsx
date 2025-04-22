import React, { useState } from "react";

// Example sentences for users to try
const EXAMPLE_SENTENCES = [
  "Students at BYU-Idaho are encouraged to",
  "The mission of BYU-Idaho is to",
  "Effective administrators should always",
  "In today's digital workplace, employees need to",
  "When working with artificial intelligence, it's important to",
];

const API_BASE_URL = import.meta.env.PROD ? "" : "http://localhost:3001";

const TokenPredictionActivity: React.FC = () => {
  const [userSentence, setUserSentence] = useState("");
  const [predictions, setPredictions] = useState<
    { token: string; probability: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showExamples, setShowExamples] = useState(false);

  // Get token predictions for the user's sentence
  const handleGetPredictions = async () => {
    if (!userSentence.trim()) {
      setError("Please enter a sentence to get token predictions");
      return;
    }

    setLoading(true);
    setError("");
    setPredictions([]);

    try {
      // Call our backend API instead of HuggingFace directly
      const response = await fetch(`${API_BASE_URL}/api/token-prediction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.3-70B-Instruct",
          inputs: {
            messages: [
              {
                role: "system",
                content: `You are a helpful AI assistant that helps users understand how token prediction works in large language models. 

                When given a sentence fragment, you should:
                1. Analyze what the most likely next tokens (words or partial words) would be
                2. Provide the top 5-8 most likely next tokens with estimated probabilities
                3. Return ONLY a JSON array of objects with 'token' and 'probability' fields
                4. Make sure probabilities are reasonable (they don't need to sum to 100%)
                5. Focus on providing realistic predictions similar to how a language model would actually predict the next token
                
                Example format:
                [
                  {"token": "participate", "probability": 15},
                  {"token": "succeed", "probability": 12},
                  {"token": "develop", "probability": 10}
                ]
                
                Return ONLY the JSON array and nothing else. No explanations, no surrounding text.`,
              },
              {
                role: "user",
                content: `Predict the most likely next tokens for this sentence fragment: "${userSentence}"`,
              },
            ],
          },
          parameters: {
            max_tokens: 400,
            temperature: 0.7,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `API responded with status: ${response.status}`
        );
      }

      const data = await response.json();

      // Process the response
      if (data.choices && data.choices.length > 0) {
        const content = data.choices[0].message?.content || "";
        // Extract JSON from the response
        try {
          // Find anything that looks like JSON in the response
          const jsonMatch = content.match(/\[\s*\{.*\}\s*\]/s);

          if (jsonMatch) {
            const jsonStr = jsonMatch[0];
            const parsedData = JSON.parse(jsonStr);

            // Verify the parsed data is an array with the expected structure
            if (
              Array.isArray(parsedData) &&
              parsedData.length > 0 &&
              parsedData[0].token &&
              typeof parsedData[0].probability === "number"
            ) {
              setPredictions(parsedData);
            } else {
              throw new Error("Invalid data structure");
            }
          } else {
            throw new Error("No JSON found in response");
          }
        } catch (parseErr) {
          console.error("Error parsing prediction data:", parseErr);
          setError("Failed to parse prediction data. Please try again.");
        }
      } else {
        throw new Error("Invalid response format from API");
      }
    } catch (err) {
      console.error("Error getting predictions:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to get predictions. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  // Select an example sentence
  const handleSelectExample = (sentence: string) => {
    setUserSentence(sentence);
    setShowExamples(false);
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Instructions
        </h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Type an incomplete sentence below and click "
          <strong>Predict Next Tokens</strong>" to see how an AI system would
          predict the next tokens.
        </p>

        <textarea
          className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-24 text-slate-800 dark:text-white dark:bg-slate-700"
          value={userSentence}
          onChange={(e) => setUserSentence(e.target.value)}
          placeholder="Enter an incomplete sentence... (e.g., 'Students at BYU-Idaho are encouraged to')"
        />
        <div className="mt-4">
          <button
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleGetPredictions}
            disabled={loading || !userSentence.trim()}
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
                Predicting...
              </>
            ) : (
              "Predict Next Tokens"
            )}
          </button>

          <button
            className="ml-4 text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 text-sm font-medium"
            onClick={() => setShowExamples(!showExamples)}
          >
            {showExamples ? "Hide Examples" : "Show Examples"}
          </button>
        </div>

        {showExamples && (
          <div className="mt-4 bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Example Sentences:
            </h3>
            <div className="space-y-2">
              {EXAMPLE_SENTENCES.map((sentence, index) => (
                <button
                  key={index}
                  className="block w-full text-left p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded text-slate-700 dark:text-slate-300 text-sm transition-colors"
                  onClick={() => handleSelectExample(sentence)}
                >
                  {sentence}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {predictions.length > 0 && (
        <div className="mt-6 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Predicted Next Tokens:
          </h3>
          <div className="space-y-2">
            {predictions.map((prediction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border-b border-slate-100 dark:border-slate-700 last:border-0"
              >
                <span className="font-mono text-slate-800 dark:text-slate-200">
                  "{prediction.token}"
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  ({prediction.probability}%)
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic">
            Note: These predictions are based on statistical patterns the AI has
            learned from training data.
          </p>
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

export default TokenPredictionActivity;
