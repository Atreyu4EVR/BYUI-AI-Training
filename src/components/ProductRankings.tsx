import { useState, useMemo } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

// Products data from CSV
const productRankings = [
  {
    rank: 5,
    name: "Cursor",
    provider: "Cursor",
    license: "No",
    type: "Text Generation",
    status: "Not Evaluated",
    apis: "No",
    demographic: "Enterprise, Developers",
    comment:
      "The most powerful AI product currently available utilizing advanced AI coding agents. Cursor remains the gold standard for AI-assisted coding, offering unmatched extensibility, flexible workflows, and powerful MCP servers that developers consistently rate above competitors.",
  },
  {
    rank: 4.75,
    name: "ChatGPT",
    provider: "OpenAI",
    license: "No",
    type: "Multimodal",
    status: "Conditionally Approved",
    apis: "Yes",
    demographic: "Enterprise, Developers, Consumers",
    comment:
      "Best general-purpose conversational AI application. Continues to lead the general-purpose conversational AI market with cutting-edge reasoning capabilities that make it invaluable across diverse use cases.",
  },
  {
    rank: 4.75,
    name: "Claude",
    provider: "Anthropic",
    license: "No",
    type: "Text Generation (Limited vision)",
    status: "To Be Evaluated",
    apis: "Yes",
    demographic: "Enterprise, Developers, Consumers",
    comment:
      "Terrific general purpose conversational AI application. Excels at productivity, data analysis, in-app tool building, and projects. Claude particularly shines when handling complex information in long documents, turning them into clear, easy-to-understand summaries while retaining all the important details.",
  },
  {
    rank: 4.75,
    name: "Midjourney",
    provider: "Midjourney",
    license: "No",
    type: "Vision",
    status: "To Be Evaluated",
    apis: "No",
    demographic: "Enterprise, Consumers",
    comment:
      "Midjourney is favored by artistic professionals and stands as the premier image generation platform, consistently delivering stunning visual outputs that set industry standards for artistic quality. Reviews consistently highlight its distinctive artistic style with particular attention to lighting and texture, producing results that are often stunning rather than merely good",
  },
  {
    rank: 4.5,
    name: "Grok",
    provider: "X (Twitter)",
    license: "No",
    type: "Multimodal",
    status: "To Be Evaluated",
    apis: "Yes",
    demographic: "Enterprise, Developers, Consumers",
    comment:
      "Grok offers impressive AI capabilities but remains limited by its tight integration with the X (formerly Twitter) platform. While the model demonstrates strong reasoning skills and a distinctive personality that appeals to many users, its restricted accessibility outside the X ecosystem significantly limits its broader application. For X users, however, Grok provides valuable real-time information analysis and conversational AI features that enhance the platform experience.",
  },
  {
    rank: 4.5,
    name: "AI Companion",
    provider: "Zoom",
    license: "Yes",
    type: "Text Generation",
    status: "Conditionally Approved",
    apis: "No",
    demographic: "Enterprise, Consumers",
    comment:
      "Zoom's AI Companion represents an impressive integration of AI capabilities within the meeting platform ecosystem. The tool excels at automating meeting-related tasks like transcription, summarization, and action item extraction, significantly enhancing productivity for remote and hybrid teams. Its real-time assistance during calls, including providing relevant information and suggesting responses, demonstrates practical AI application in professional communication. The tight integration with Zoom's core platform ensures seamless functionality without workflow disruption.",
  },
  {
    rank: 4.5,
    name: "Perplexity",
    provider: "Perplexity AI",
    license: "No",
    type: "Multimodal",
    status: "Not Evaluated",
    apis: "Yes",
    demographic: "Enterprise, Developers, Consumers",
    comment:
      "Exceptional AI-powered search and research tool. Combines the best of search engines with conversational AI to deliver cited, accurate information. Particularly strong for in-depth research tasks and fact-finding missions. Perplexity offers accessibility while providing advanced features for power users. The real-time information retrieval capabilities and intuitive interface have earned praise from academic researchers, business professionals, and casual users alike. For those who prioritize information accuracy and source transparency in their AI interactions, Perplexity represents one of the most trustworthy options available.",
  },
  {
    rank: 4.25,
    name: "Copilot",
    provider: "Microsoft",
    license: "Yes",
    type: "Multimodal",
    status: "Conditionally Approved",
    apis: "Yes",
    demographic: "Enterprise, Developers, Consumers",
    comment:
      "Microsoft Copilot has successfully leveraged its deep integration with Microsoft's ecosystem to become a highly effective productivity tool. Its ability to work across Microsoft 365 applications provides seamless assistance for document creation, data analysis, and presentation development. The enterprise-ready security features and compliance tools make it particularly attractive for large organizations with strict governance requirements. While Copilot occasionally struggles with complex or highly specialized tasks, its performance for everyday productivity functions is consistently strong.",
  },
  {
    rank: 4,
    name: "Otter",
    provider: "Otter",
    license: "No",
    type: "Multimodal",
    status: "Not Evaluated",
    apis: "No",
    demographic: "Consumers",
    comment:
      "Exceptional transcription and meeting assistant. Delivers real-time transcription with high accuracy. Includes AI-powered meeting summaries, action items, and automated note-taking functionality. Particularly valuable for professionals who attend numerous meetings. Otter has established itself as an exceptional transcription and meeting assistant, delivering high-accuracy real-time transcription services that significantly enhance meeting productivity. Its AI-powered meeting summaries, action item extraction, and automated note-taking functionality eliminate much of the manual documentation work traditionally associated with meetings.",
  },
  {
    rank: 4,
    name: "LLaMA",
    provider: "Meta",
    license: "No",
    type: "Multimodal",
    status: "To Be Evaluated",
    apis: "Yes",
    demographic: "Enterprise, Developers, Consumers",
    comment:
      "Meta's LLaMA stands out for its open weights approach, providing significant flexibility for private hosting and customization that appeals to organizations requiring local deployment. This open-source nature allows for transparent evaluation and adaptation to specific enterprise needs, making it especially valuable for companies with privacy concerns or specialized applications.",
  },
  {
    rank: 3.75,
    name: "NotebookLM",
    provider: "Google",
    license: "Yes",
    type: "Multimodal",
    status: "Conditionally Approved",
    apis: "No",
    demographic: "Consumers",
    comment:
      "Google's NotebookLM excels specifically at internal document summarization and knowledge management. The platform allows users to upload their own documents and create an AI-powered interactive knowledge base from their content. Its strength lies in contextual understanding of uploaded materials, enabling more accurate responses based on documents. The interface effectively combines document exploration with AI assistance, making it particularly valuable for researchers, students, and professionals managing large volumes of text-based information. For users primarily seeking to extract insights from their own document collections, NotebookLM offers specialized capabilities that more general AI tools cannot match. As a Google product, it carries the typical data privacy concerns that are assumed in using their products.",
  },
  {
    rank: 3,
    name: "Gemini",
    provider: "Google",
    license: "Yes",
    type: "Multimodal",
    status: "Conditionally Approved",
    apis: "Yes",
    demographic: "Enterprise, Developers, Consumers",
    comment:
      "Google's Gemini offers technically impressive multimodal capabilities, demonstrating strong performance in reasoning and problem-solving across text, image, and code domains. The model shows particular strengths in scientific and technical reasoning, leveraging Google's deep expertise in these areas. However, concerns about data privacy practices have limited enterprise adoption, with some organizations hesitating to fully integrate Gemini into their workflows. Google's overall market position remains challenged by privacy concerns and user experience limitations that have slowed broader adoption.",
  },
  {
    rank: 3,
    name: "Le Chat",
    provider: "Mistral AI",
    license: "No",
    type: "Text Generation",
    status: "Not Evaluated",
    apis: "Yes",
    demographic: "Enterprise, Developers, Consumers",
    comment:
      "Solid open-source alternative with competitive performance. Offers good reasoning capabilities and multilingual support. Works well for organizations seeking European-based AI providers with stronger data privacy commitments. The open approach and transparent development process create confidence among technical users while allowing for community contributions and improvements. For organizations seeking to reduce dependence on U.S.-based AI providers or requiring deployment options aligned with European data protection standards, Le Chat provides a capable alternative with growing capabilities and a clear focus on responsible AI development that respects user privacy and regional regulatory frameworks.",
  },
  {
    rank: 1,
    name: "DeepSeek",
    provider: "DeepSeek",
    license: "No",
    type: "Text Generation",
    status: "Not Evaluated",
    apis: "Yes",
    demographic: "Developers, Consumers",
    comment:
      "DeepSeek offers impressive capabilities, but due to it's suspicious ties to the government of China, there is serious concern not only about data privacy, but also security. We strongly recommend avoid using products from DeepSeek. As a result, it is highly unlikely to recieve approval for use at BYU-Idaho.",
  },
];

// Helper function for classifying status
const getStatusClass = (status: string) => {
  switch (status) {
    case "Conditionally Approved":
      return "bg-green-200 text-green-900 dark:bg-green-900 dark:text-green-200 border border-green-600";
    case "To Be Evaluated":
      return "bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200 border border-amber-600";
    case "Not Evaluated":
      return "bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-200 border border-red-600";
    default:
      return "bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-200 border border-slate-600";
  }
};

// Helper function for classifying license
const getLicenseClass = (license: string) => {
  return license === "Yes"
    ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
    : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100";
};

// Helper for displaying stars
const RatingStars = ({ rating }: { rating: number }) => {
  // Convert rating to stars (out of 5)
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating % 1 > 0;
  const emptyStars = 5 - fullStars - (hasPartialStar ? 1 : 0);
  const partialStarPercent = (rating % 1) * 100;

  return (
    <div className="flex items-center">
      <div className="flex">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon
            key={`full-${i}`}
            className="h-5 w-5 text-yellow-400 flex-shrink-0"
            aria-hidden="true"
          />
        ))}

        {/* Partial star with better positioning */}
        {hasPartialStar && (
          <span className="relative inline-block h-5 w-5 flex-shrink-0">
            <StarIconOutline
              className="absolute inset-0 h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${partialStarPercent}%` }}
            >
              <StarIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
          </span>
        )}

        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIconOutline
            key={`empty-${i}`}
            className="h-5 w-5 text-yellow-400 flex-shrink-0"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Numeric rating with consistent spacing */}
      <span className="ml-2 font-medium text-sm text-slate-900 dark:text-slate-100 tabular-nums">
        {rating.toFixed(2)}
      </span>
    </div>
  );
};

type SortField = "rank" | "name" | "provider" | "license" | "type" | "status";
type SortDirection = "asc" | "desc";

const ProductRankings = () => {
  const [sortField, setSortField] = useState<SortField>("rank");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [filterText, setFilterText] = useState("");
  const [showOnlyLicensed, setShowOnlyLicensed] = useState(false);
  const [showOnlyApproved, setShowOnlyApproved] = useState(false);

  // Toggle sort direction or set new sort field
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc"); // Default to descending for new field
    }
  };

  // Filtered and sorted products
  const filteredAndSortedProducts = useMemo(() => {
    return productRankings
      .filter((product) => {
        // Apply text filter across multiple fields
        const searchText = filterText.toLowerCase();
        const matchesText =
          !filterText ||
          product.name.toLowerCase().includes(searchText) ||
          product.provider.toLowerCase().includes(searchText) ||
          product.type.toLowerCase().includes(searchText) ||
          product.comment.toLowerCase().includes(searchText);

        // Apply license filter
        const matchesLicense = !showOnlyLicensed || product.license === "Yes";

        // Apply status filter
        const matchesStatus =
          !showOnlyApproved || product.status === "Conditionally Approved";

        return matchesText && matchesLicense && matchesStatus;
      })
      .sort((a, b) => {
        // Handle sorting
        let comparison = 0;

        if (sortField === "rank") {
          comparison = a.rank - b.rank;
        } else if (
          sortField === "name" ||
          sortField === "provider" ||
          sortField === "type" ||
          sortField === "status"
        ) {
          comparison = a[sortField].localeCompare(b[sortField]);
        } else if (sortField === "license") {
          comparison = a.license === "Yes" ? -1 : 1;
        }

        // Invert comparison if sort direction is ascending
        return sortDirection === "asc" ? comparison : -comparison;
      });
  }, [
    productRankings,
    sortField,
    sortDirection,
    filterText,
    showOnlyLicensed,
    showOnlyApproved,
  ]);

  const toggleExpand = (productName: string) => {
    if (expandedProduct === productName) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productName);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-sm">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            AI Product Rankings
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Personal evaluation of AI products based on capabilities, features,
            and overall performance.
            <span className="text-red-600 dark:text-red-400 font-medium ml-2">
              For internal use only.
            </span>
          </p>
        </header>

        {/* Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full sm:w-80 pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 dark:bg-slate-700 dark:text-white"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 dark:text-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <input
                  id="licensed-only"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 dark:border-slate-600 dark:bg-slate-700"
                  checked={showOnlyLicensed}
                  onChange={() => setShowOnlyLicensed(!showOnlyLicensed)}
                />
                <label
                  htmlFor="licensed-only"
                  className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  BYUI Licensed Only
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="approved-only"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 dark:border-slate-600 dark:bg-slate-700"
                  checked={showOnlyApproved}
                  onChange={() => setShowOnlyApproved(!showOnlyApproved)}
                />
                <label
                  htmlFor="approved-only"
                  className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Approved Only
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            {/* Table Header */}
            <div className="bg-slate-50 dark:bg-slate-900">
              <div className="grid grid-cols-12 gap-2 px-4 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200">
                <div
                  className="col-span-2 flex items-center cursor-pointer"
                  onClick={() => handleSort("rank")}
                >
                  <span>Rating</span>
                  {sortField === "rank" &&
                    (sortDirection === "desc" ? (
                      <ArrowDownIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowUpIcon className="ml-1 h-4 w-4" />
                    ))}
                </div>
                <div
                  className="col-span-2 flex items-center cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  <span>Product</span>
                  {sortField === "name" &&
                    (sortDirection === "desc" ? (
                      <ArrowDownIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowUpIcon className="ml-1 h-4 w-4" />
                    ))}
                </div>
                <div
                  className="col-span-2 flex items-center cursor-pointer"
                  onClick={() => handleSort("provider")}
                >
                  <span>Provider</span>
                  {sortField === "provider" &&
                    (sortDirection === "desc" ? (
                      <ArrowDownIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowUpIcon className="ml-1 h-4 w-4" />
                    ))}
                </div>
                <div
                  className="col-span-2 flex items-center cursor-pointer"
                  onClick={() => handleSort("type")}
                >
                  <span>Type</span>
                  {sortField === "type" &&
                    (sortDirection === "desc" ? (
                      <ArrowDownIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowUpIcon className="ml-1 h-4 w-4" />
                    ))}
                </div>
                <div
                  className="col-span-2 flex items-center cursor-pointer"
                  onClick={() => handleSort("status")}
                >
                  <span>Status</span>
                  {sortField === "status" &&
                    (sortDirection === "desc" ? (
                      <ArrowDownIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowUpIcon className="ml-1 h-4 w-4" />
                    ))}
                </div>
                <div
                  className="col-span-1 flex items-center cursor-pointer"
                  onClick={() => handleSort("license")}
                >
                  <span>Licensed</span>
                  {sortField === "license" &&
                    (sortDirection === "desc" ? (
                      <ArrowDownIcon className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowUpIcon className="ml-1 h-4 w-4" />
                    ))}
                </div>
                <div className="col-span-1 flex items-center">
                  <span>APIs</span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
              {filteredAndSortedProducts.length === 0 ? (
                <div className="px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                  No products match your search criteria
                </div>
              ) : (
                filteredAndSortedProducts.map((product) => (
                  <div key={product.name} className="group">
                    <div
                      className={`grid grid-cols-12 gap-3 px-4 py-4 text-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 ${
                        expandedProduct === product.name
                          ? "bg-slate-50 dark:bg-slate-700"
                          : ""
                      }`}
                      onClick={() => toggleExpand(product.name)}
                    >
                      <div className="col-span-2 text-slate-900 dark:text-slate-200">
                        <RatingStars rating={product.rank} />
                      </div>
                      <div className="col-span-2 font-medium text-slate-900 dark:text-white">
                        {product.name}
                      </div>
                      <div className="col-span-2 text-slate-600 dark:text-slate-300">
                        {product.provider}
                      </div>
                      <div className="col-span-2 text-slate-600 dark:text-slate-300">
                        {product.type}
                      </div>
                      <div className="col-span-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(
                            product.status
                          )}`}
                        >
                          {product.status}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getLicenseClass(
                            product.license
                          )}`}
                        >
                          {product.license}
                        </span>
                      </div>
                      <div className="col-span-1 text-slate-600 dark:text-slate-300">
                        {product.apis}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedProduct === product.name && (
                      <div className="px-4 py-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                              Target Demographic
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {product.demographic}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                              Rating Details
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {product.rank}/5 -{" "}
                              {product.rank >= 4.5
                                ? "Exceptional"
                                : product.rank >= 4
                                ? "Excellent"
                                : product.rank >= 3.5
                                ? "Very Good"
                                : product.rank >= 3
                                ? "Good"
                                : product.rank >= 2
                                ? "Acceptable"
                                : "Not Recommended"}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Personal Assessment
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {product.comment}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-red-50 dark:bg-slate-700 border border-red-200 dark:border-red-900 rounded-lg p-4">
          <div className="flex items-start">
            <QuestionMarkCircleIcon
              className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-sm font-medium text-red-800 dark:text-red-300">
                Important Notice
              </h3>
              <p className="mt-1 text-sm text-red-700 dark:text-red-200">
                These rankings represent personal assessments and are not
                official BYUI recommendations. Always refer to the{" "}
                <a
                  href="https://www.byui.edu/genai/"
                  className="font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BYUI GenAI policy
                </a>{" "}
                for guidance on approved tools and usage guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRankings;
