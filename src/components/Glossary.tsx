import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Fuse from "fuse.js";

interface GlossaryTerm {
  term: string;
  definition: string;
}

// Define the type for Fuse match
interface FuseMatch {
  indices: readonly [number, number][];
  key: string;
  value: string;
}

// Define the type for Fuse result
interface FuseResult {
  item: GlossaryTerm;
  refIndex: number;
  matches?: FuseMatch[];
  score?: number;
}

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [glossaryTerms, setGlossaryTerms] = useState<GlossaryTerm[]>([]);
  const [fuseInstance, setFuseInstance] = useState<Fuse<GlossaryTerm> | null>(
    null
  );
  const [searchResults, setSearchResults] = useState<FuseResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize glossary terms
  useEffect(() => {
    // Fetch the glossary markdown file
    fetch("/GLOSSARY.md")
      .then((response) => response.text())
      .then((text) => {
        // Parse the markdown file
        const terms: GlossaryTerm[] = [];
        const lines = text.split("\n");

        let currentTerm = "";
        let currentDefinition = "";

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();

          // Check if this is a term heading (starts with ###)
          if (line.startsWith("### ")) {
            // If we already have a term and definition, save it
            if (currentTerm && currentDefinition) {
              terms.push({
                term: currentTerm,
                definition: currentDefinition.trim(),
              });
            }

            // Start a new term
            currentTerm = line.substring(4).trim();
            currentDefinition = "";
          }
          // Skip the title line that starts with #
          else if (line.startsWith("# ")) {
            continue;
          }
          // Otherwise, add to the current definition if we have a term
          else if (currentTerm && line) {
            currentDefinition += line + " ";
          }
        }

        // Don't forget to add the last term
        if (currentTerm && currentDefinition) {
          terms.push({
            term: currentTerm,
            definition: currentDefinition.trim(),
          });
        }

        // Sort terms alphabetically
        terms.sort((a, b) => a.term.localeCompare(b.term));

        setGlossaryTerms(terms);
        setIsLoading(false);

        // Initialize Fuse.js with our terms
        const options = {
          includeMatches: true,
          threshold: 0.3, // Lower values = more strict matching (0 = exact match only)
          keys: [
            { name: "term", weight: 2 }, // Term is more important than definition
            { name: "definition", weight: 1 },
          ],
        };

        const fuse = new Fuse(terms, options);
        setFuseInstance(fuse);
      })
      .catch((error) => {
        console.error("Error loading glossary:", error);
        setIsLoading(false);
      });
  }, []);

  // Perform search when searchTerm changes
  useEffect(() => {
    if (!fuseInstance || !searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const results = fuseInstance.search(searchTerm);
    setSearchResults(results as FuseResult[]);
  }, [searchTerm, fuseInstance]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Create alphabetical index for non-search view
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const letterSections = alphabet
    .map((letter) => {
      const termsStartingWith = glossaryTerms.filter((term) =>
        term.term.toUpperCase().startsWith(letter)
      );

      if (termsStartingWith.length === 0) return null;

      return {
        letter,
        terms: termsStartingWith,
      };
    })
    .filter(Boolean);

  // Scroll to a specific letter section
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to highlight matched text
  const highlightMatches = (
    text: string,
    indices: readonly [number, number][] | undefined
  ) => {
    if (!indices || indices.length === 0) {
      return <span>{text}</span>;
    }

    const result: JSX.Element[] = [];
    let lastIndex = 0;

    indices.forEach(([startIndex, endIndex]) => {
      // Add text before the matched part
      if (startIndex > lastIndex) {
        result.push(
          <span key={`text-${lastIndex}-${startIndex}`}>
            {text.substring(lastIndex, startIndex)}
          </span>
        );
      }

      // Add the matched part with highlight
      result.push(
        <span
          key={`match-${startIndex}-${endIndex}`}
          className="bg-yellow-200 dark:bg-yellow-700 font-medium rounded px-1"
        >
          {text.substring(startIndex, endIndex + 1)}
        </span>
      );

      lastIndex = endIndex + 1;
    });

    // Add remaining text after the last match
    if (lastIndex < text.length) {
      result.push(
        <span key={`text-${lastIndex}-end`}>{text.substring(lastIndex)}</span>
      );
    }

    return <>{result}</>;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Glossary</h1>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-white"
            placeholder="Search glossary terms..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {searchTerm && (
          <div className="text-center text-sm mt-2 text-slate-500 dark:text-slate-400">
            Found {searchResults.length}{" "}
            {searchResults.length === 1 ? "term" : "terms"} matching "
            {searchTerm}"
          </div>
        )}
      </div>

      {/* Alphabet Navigation - only show when not searching */}
      {!searchTerm && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className="px-2 py-1 text-sm rounded hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {/* Glossary Content */}
      {isLoading ? (
        <div className="text-center py-8">Loading glossary terms...</div>
      ) : searchTerm && searchResults.length === 0 ? (
        <div className="text-center py-8">
          No terms found matching "{searchTerm}". Try a different search term or
          check your spelling.
        </div>
      ) : searchTerm ? (
        // Search results view with highlighted matches
        <div className="space-y-6">
          {searchResults.map((result, index) => {
            // Find term and definition matches
            const termMatch = result.matches?.find(
              (match) => match.key === "term"
            );
            const definitionMatch = result.matches?.find(
              (match) => match.key === "definition"
            );

            return (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm dark:bg-slate-800 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {termMatch
                    ? highlightMatches(result.item.term, termMatch.indices)
                    : result.item.term}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {definitionMatch
                    ? highlightMatches(
                        result.item.definition,
                        definitionMatch.indices
                      )
                    : result.item.definition}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        // Alphabetical view
        <div>
          {letterSections.map((section) => (
            <div
              key={section?.letter}
              id={`letter-${section?.letter}`}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-white dark:bg-slate-900 py-2 z-10 border-b">
                {section?.letter}
              </h2>
              <div className="space-y-6">
                {section?.terms.map((term, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg shadow-sm dark:bg-slate-800 dark:border-slate-700"
                  >
                    <h3 className="text-xl font-semibold mb-2">{term.term}</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      {term.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Glossary;
