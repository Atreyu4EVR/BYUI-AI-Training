import React, { useState } from "react";
import { useSearch } from "../context/SearchContext";

const SearchTest: React.FC = () => {
  const { searchQuery, setSearchQuery, searchResults, performSearch } =
    useSearch();
  const [debugInfo, setDebugInfo] = useState<string>("");

  const handleSearch = () => {
    performSearch();

    // Collect debug info
    setDebugInfo(
      JSON.stringify(
        {
          query: searchQuery,
          resultsCount: searchResults.length,
          results: searchResults.slice(0, 3), // Just show first 3 for debugging
        },
        null,
        2
      )
    );
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 mt-4">
      <h2 className="text-lg font-bold mb-4">Search Test Panel</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query..."
          className="px-3 py-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <div className="mt-4">
        <h3 className="font-medium mb-2">Results ({searchResults.length}):</h3>
        {searchResults.length > 0 ? (
          <ul className="border rounded-md p-2 dark:border-slate-600">
            {searchResults.map((result) => (
              <li
                key={result.item.id}
                className="py-2 border-b last:border-b-0 dark:border-slate-600"
              >
                <div className="font-medium">{result.item.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {result.item.content.substring(0, 100)}...
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {result.item.section} • ID: {result.item.id}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-500 dark:text-gray-400">
            No results found
          </div>
        )}
      </div>

      {debugInfo && (
        <div className="mt-4">
          <h3 className="font-medium mb-2">Debug Info:</h3>
          <pre className="bg-gray-100 dark:bg-slate-700 p-2 rounded-md overflow-x-auto text-xs">
            {debugInfo}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SearchTest;
