import React, { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearch } from "../context/SearchContext";

const SearchBar: React.FC = () => {
  const {
    isSearchOpen,
    toggleSearch,
    closeSearch,
    searchQuery,
    setSearchQuery,
    searchResults,
    highlightMatches,
    navigateToResult,
    addPageToIndex,
  } = useSearch();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Focus input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Debug search results
  useEffect(() => {
    if (searchResults.length > 0) {
      console.log(`Search returned ${searchResults.length} results`);
      console.log("Sections found:", [
        ...new Set(searchResults.map((r) => r.item.section)),
      ]);
    }
  }, [searchResults]);

  // Force manual indexing of the current page content
  useEffect(() => {
    // Only run once on component mount
    if (typeof document !== "undefined") {
      const pageTitle = document.title.replace(
        " - Artificial Intelligence Training",
        ""
      );
      const path = window.location.hash.replace("#", "") || "/";
      const pathSegments = path.split("/").filter(Boolean);
      const section =
        pathSegments.length > 0
          ? pathSegments[0].charAt(0).toUpperCase() +
            pathSegments[0].slice(1).replace(/-/g, " ")
          : "Home";

      // Get content from document
      let content = "";
      document
        .querySelectorAll("p, li, h1, h2, h3, h4, h5, blockquote")
        .forEach((el) => {
          if (
            el.textContent &&
            !el.closest(".navbar") &&
            !el.closest("footer")
          ) {
            content += " " + el.textContent.trim();
          }
        });

      if (content && pageTitle) {
        console.log(
          `Manually indexing current page: ${path} with title: ${pageTitle}`
        );
        addPageToIndex({
          id: `manual-${path.replace(/\//g, "-") || "home"}`,
          title: pageTitle,
          content: content,
          path: path,
          section: section,
        });
      }

      // Add some hard-coded pages for testing
      const testPages = [
        {
          id: "test-history",
          title: "History of AI",
          content:
            'Artificial Intelligence has evolved significantly since its inception in the 1950s. The field has seen periods of excitement and funding followed by "AI winters" where progress slowed. Recent advances in machine learning and neural networks have led to a renaissance in AI development.',
          path: "/history",
          section: "History",
        },
        {
          id: "test-capabilities",
          title: "AI Capabilities",
          content:
            "Modern AI systems can process natural language, recognize images, generate creative content, and make complex decisions. These capabilities enable applications across education, healthcare, business, and many other domains.",
          path: "/capabilities",
          section: "Capabilities",
        },
        {
          id: "test-how-it-works",
          title: "How AI Works",
          content:
            "AI systems use neural networks to process data and identify patterns. These networks contain multiple layers that progressively extract higher-level features from the raw input, enabling complex tasks like language understanding and image recognition.",
          path: "/how-it-works",
          section: "How It Works",
        },
      ];

      testPages.forEach((page) => {
        console.log(`Adding test page: ${page.title}`);
        addPageToIndex(page);
      });
    }
  }, []);

  // Handle clicks outside the search component to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSearch]);

  // Handle escape key to close search
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [closeSearch]);

  return (
    <div className="relative">
      <button
        onClick={toggleSearch}
        className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-slate-700 dark:hover:bg-slate-600 focus:outline-none"
        aria-label="Search"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>

      {isSearchOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 md:w-96 bg-white dark:bg-slate-800 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-2 flex items-center border-b border-gray-200 dark:border-gray-700">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              className="w-full bg-transparent border-none focus:ring-0 text-gray-800 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500"
              aria-label="Search input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                aria-label="Clear search"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={closeSearch}
              className="ml-2 p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              aria-label="Close search"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {searchQuery.length >= 2 && (
            <div ref={resultsRef} className="max-h-96 overflow-y-auto">
              {searchResults.length > 0 ? (
                <ul className="py-1">
                  {searchResults.map((result) => (
                    <li key={result.item.id}>
                      <button
                        onClick={() => navigateToResult(result.item.path)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-150"
                      >
                        <div className="font-medium text-gray-900 dark:text-white">
                          {result.matches?.some(
                            (match) => match.key === "title"
                          )
                            ? highlightMatches(
                                result.item.title,
                                result.matches?.find((m) => m.key === "title")
                                  ?.indices
                              )
                            : result.item.title}
                        </div>
                        {result.matches?.some(
                          (match) => match.key === "content"
                        ) && (
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                            {highlightMatches(
                              result.item.content.substring(0, 150) +
                                (result.item.content.length > 150 ? "..." : ""),
                              result.matches?.find((m) => m.key === "content")
                                ?.indices
                            )}
                          </div>
                        )}
                        {result.item.section && (
                          <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mt-1">
                            {result.item.section === "Glossary" ? (
                              <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-0.5 rounded">
                                Glossary
                              </span>
                            ) : (
                              <span
                                className={`bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded`}
                              >
                                {result.item.section}
                              </span>
                            )}
                          </div>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
