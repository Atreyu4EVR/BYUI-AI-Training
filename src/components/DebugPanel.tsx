import React, { useState, useEffect } from "react";
import { useSearch } from "../context/SearchContext";

const DebugPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  // Try to access search context
  const searchContextExists = (() => {
    try {
      // Just check if useSearch returns something
      const context = useSearch();
      return context !== undefined;
    } catch (e) {
      return false;
    }
  })();

  useEffect(() => {
    // Add the initial debug message about search context
    setMessages((prev) => [
      ...prev,
      `Search Context Exists: ${searchContextExists ? "Yes" : "No"}`,
    ]);

    // Override console.log to capture messages
    const originalLog = console.log;
    console.log = (...args) => {
      const message = args
        .map((arg) =>
          typeof arg === "object" ? JSON.stringify(arg) : String(arg)
        )
        .join(" ");

      setMessages((prev) => [message, ...prev.slice(0, 19)]); // Keep only last 20 messages
      originalLog(...args);
    };

    // Restore original console.log on cleanup
    return () => {
      console.log = originalLog;
    };
  }, [searchContextExists]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg z-50"
      >
        Debug
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 max-h-96 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-300 dark:border-slate-600 z-50 overflow-hidden">
      <div className="flex justify-between items-center p-2 bg-blue-500 text-white">
        <h3 className="font-medium">Debug Panel</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
      <div className="p-3 overflow-y-auto max-h-80">
        <div className="mb-2 p-1 bg-blue-100 dark:bg-blue-900 rounded">
          <strong>SearchContext Status:</strong>{" "}
          {searchContextExists ? "Available" : "Not Available"}
        </div>
        <div className="text-xs overflow-y-auto max-h-60">
          {messages.map((msg, i) => (
            <div
              key={i}
              className="p-1 border-b border-slate-200 dark:border-slate-700"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DebugPanel;
