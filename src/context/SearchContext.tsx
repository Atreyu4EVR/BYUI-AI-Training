import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import Fuse from "fuse.js";
import type { FuseResult } from "fuse.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Define the data structure for searchable content
export interface SearchableContent {
  id: string;
  title: string;
  content: string;
  path: string;
  section?: string;
}

// Define the search result type using Fuse's type directly
type SearchResult = FuseResult<SearchableContent>;

interface SearchContextType {
  isSearching: boolean;
  searchQuery: string;
  searchResults: SearchResult[];
  isSearchOpen: boolean;
  setSearchQuery: (query: string) => void;
  performSearch: () => void;
  toggleSearch: () => void;
  closeSearch: () => void;
  highlightMatches: (
    text: string,
    indices: readonly [number, number][] | undefined
  ) => JSX.Element;
  navigateToResult: (path: string) => void;
  addPageToIndex: (page: SearchableContent) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchableContent, setSearchableContent] = useState<
    SearchableContent[]
  >([]);
  const [fuseInstance, setFuseInstance] =
    useState<Fuse<SearchableContent> | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to add a page to the search index
  const addPageToIndex = (page: SearchableContent) => {
    setSearchableContent((prevContent) => {
      // Check if page with same ID already exists
      const existingIndex = prevContent.findIndex((p) => p.id === page.id);
      if (existingIndex !== -1) {
        // Replace existing page
        const newContent = [...prevContent];
        newContent[existingIndex] = page;
        return newContent;
      } else {
        // Add new page
        return [...prevContent, page];
      }
    });
  };

  // Load glossary content on initial load
  useEffect(() => {
    const loadGlossary = async () => {
      try {
        const response = await fetch("/GLOSSARY.md");
        if (!response.ok) {
          throw new Error("Failed to load GLOSSARY.md");
        }

        const text = await response.text();
        const lines = text.split("\n");
        const glossaryItems: SearchableContent[] = [];

        let currentTerm = "";
        let currentDefinition = "";

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();

          if (line.startsWith("### ")) {
            if (currentTerm && currentDefinition) {
              glossaryItems.push({
                id: `glossary-${currentTerm
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`,
                title: currentTerm,
                content: currentDefinition.trim(),
                path: "/glossary",
                section: "Glossary",
              });
            }

            currentTerm = line.substring(4).trim();
            currentDefinition = "";
          } else if (line.startsWith("# ")) {
            continue;
          } else if (currentTerm && line) {
            currentDefinition += line + " ";
          }
        }

        // Add the last term
        if (currentTerm && currentDefinition) {
          glossaryItems.push({
            id: `glossary-${currentTerm.toLowerCase().replace(/\s+/g, "-")}`,
            title: currentTerm,
            content: currentDefinition.trim(),
            path: "/glossary",
            section: "Glossary",
          });
        }

        // Add glossary items to index
        setSearchableContent(glossaryItems);
        console.log(`Loaded ${glossaryItems.length} glossary items`);
      } catch (error) {
        console.error("Error loading glossary:", error);
      }
    };

    loadGlossary();
  }, []);

  // Set up Fuse instance when searchable content changes
  useEffect(() => {
    const options = {
      includeMatches: true,
      threshold: 0.3,
      keys: [
        { name: "title", weight: 3 },
        { name: "content", weight: 1 },
        { name: "section", weight: 2 },
      ],
    };

    setFuseInstance(new Fuse(searchableContent, options));
  }, [searchableContent]);

  // Function to manually index all key pages
  const indexInitialPages = () => {
    const pages = [
      {
        path: "/",
        title: "Home",
        section: "Home",
        content:
          "Welcome to the AI Training site for BYUI administrators. This site provides resources and training on artificial intelligence technologies.",
      },
      {
        path: "/history",
        title: "History of AI",
        section: "History",
        content:
          "Artificial Intelligence has a rich history dating back to the 1950s. The field has evolved from simple rule-based systems to modern neural networks and deep learning approaches.",
      },
      {
        path: "/capabilities",
        title: "AI Capabilities",
        section: "Capabilities",
        content:
          "Modern AI systems can perform tasks like natural language processing, image recognition, sentiment analysis, and decision making. They have applications across many industries including education, healthcare, and business.",
      },
      {
        path: "/how-it-works",
        title: "How AI Works",
        section: "How It Works",
        content:
          "AI systems work by processing large amounts of data through mathematical models called neural networks. These networks learn patterns and make predictions based on the data they've been trained on.",
      },
      {
        path: "/getting-started",
        title: "Getting Started with AI",
        section: "Getting Started",
        content:
          "Getting started with AI involves understanding the basics of prompts, learning about available tools, and practicing with different systems to gain proficiency.",
      },
      {
        path: "/prerequisites",
        title: "Prerequisites",
        section: "Prerequisites",
        content:
          "Before diving into AI, it's helpful to understand basic computer operations and have some familiarity with technology concepts.",
      },
      {
        path: "/about",
        title: "About This Site",
        section: "About",
        content:
          "This site was created to help BYUI administrators learn about AI technologies and how to apply them in their work.",
      },
    ];

    pages.forEach((page) => {
      addPageToIndex({
        id: `static-${page.path.replace(/\//g, "-") || "home"}`,
        title: page.title,
        content: page.content,
        path: page.path,
        section: page.section,
      });
    });

    console.log("Added static pages to search index");
  };

  // Call initial indexing once on startup
  useEffect(() => {
    indexInitialPages();
  }, []);

  // Utility function to extract text content from a DOM element
  const getTextFromElement = (
    element: Element,
    depth = 0,
    maxDepth = 3
  ): string => {
    if (depth > maxDepth) return "";

    // Skip elements that are typically not visible or helpful for search
    if (
      element.tagName === "SCRIPT" ||
      element.tagName === "STYLE" ||
      element.tagName === "META" ||
      element.tagName === "NOSCRIPT" ||
      element.classList.contains("navbar") ||
      element.classList.contains("footer")
    ) {
      return "";
    }

    // Get text directly from this element
    let text = element.textContent?.trim() || "";

    // Look for header elements to get titles
    if (
      element.tagName === "H1" ||
      element.tagName === "H2" ||
      element.tagName === "H3"
    ) {
      text = element.textContent?.trim() || "";
    }

    return text;
  };

  // Auto-index the current page whenever the route changes
  useEffect(() => {
    // Wait a bit for the page to render
    const timeoutId = setTimeout(() => {
      // Skip indexing on the glossary page since we already have that data
      if (location.pathname === "/glossary") return;

      try {
        // Get the main content element - try different possible containers
        const mainElement =
          document.querySelector("main") ||
          document.querySelector(".content-container") ||
          document.querySelector(".page-content") ||
          document.body;

        if (!mainElement) return;

        // Get the main heading as title from various possible elements
        const h1 = mainElement.querySelector("h1");
        const h2 = mainElement.querySelector("h2");
        const pageTitle = document.title || "";
        const headingText =
          (h1 || h2)?.textContent?.trim() ||
          pageTitle.replace(" - Artificial Intelligence Training", "");

        // Get the content - improved to get more text
        let content = "";

        // Get text from paragraphs
        const paragraphs = mainElement.querySelectorAll(
          "p, li, blockquote, code, pre"
        );
        paragraphs.forEach((p) => {
          if (p.textContent?.trim()) {
            content += " " + p.textContent.trim();
          }
        });

        // Get text from div elements that might contain content
        const contentDivs = mainElement.querySelectorAll(".content div");
        contentDivs.forEach((div) => {
          // Skip navigation, headers, footers
          if (
            div.closest("nav") ||
            div.closest("header") ||
            div.closest("footer")
          )
            return;
          if (
            div.classList.contains("navbar") ||
            div.classList.contains("footer")
          )
            return;

          // If the div has direct text (not just from children elements), add it
          if (div.childNodes) {
            div.childNodes.forEach((node) => {
              if (
                node.nodeType === Node.TEXT_NODE &&
                node.textContent?.trim()
              ) {
                content += " " + node.textContent.trim();
              }
            });
          }
        });

        // If we still don't have content, get all text from the main element
        if (!content.trim() && mainElement.textContent) {
          content = mainElement.textContent.trim();
        }

        // Make path and section
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const section =
          pathSegments.length > 0
            ? pathSegments[0].charAt(0).toUpperCase() +
              pathSegments[0].slice(1).replace(/-/g, " ")
            : "Home";

        // If there's content to index
        if (headingText && content) {
          const pageId = `page-${
            location.pathname.replace(/\//g, "-") || "home"
          }`;

          console.log(
            `Indexing page: ${location.pathname} with title: ${headingText}`
          );

          addPageToIndex({
            id: pageId,
            title: headingText,
            content: content,
            path: location.pathname,
            section: section,
          });
        }
      } catch (error) {
        console.error("Error indexing page:", error);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  const performSearch = () => {
    if (!fuseInstance || !searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    try {
      const results = fuseInstance.search(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    }

    setIsSearching(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Reset search when opening
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const navigateToResult = (path: string) => {
    navigate(path);
    closeSearch();
  };

  // Function to highlight matched text in search results
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
      if (startIndex > lastIndex) {
        result.push(
          <span key={`text-${lastIndex}-${startIndex}`}>
            {text.substring(lastIndex, startIndex)}
          </span>
        );
      }

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

    if (lastIndex < text.length) {
      result.push(
        <span key={`text-${lastIndex}-end`}>{text.substring(lastIndex)}</span>
      );
    }

    return <>{result}</>;
  };

  // Auto-search when query changes
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      performSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, fuseInstance]);

  return (
    <SearchContext.Provider
      value={{
        isSearching,
        searchQuery,
        searchResults,
        isSearchOpen,
        setSearchQuery,
        performSearch,
        toggleSearch,
        closeSearch,
        highlightMatches,
        navigateToResult,
        addPageToIndex,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
