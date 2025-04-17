import { Link } from "react-router-dom";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const aiProducts = [
  {
    name: "Copilot",
    provider: "Microsoft",
    license: true,
    type: "Multimodal (Code, Text, UI)",
    status: "Conditionally Approved",
    description:
      "AI assistance for coding, content creation, and productivity tasks across Microsoft products.",
    features: [
      "Integrated into Microsoft 365 apps",
      "Code completion and generation",
      "Content creation assistance",
      "Document summarization",
      "Meeting transcription and summaries",
    ],
    featured: true,
  },
  {
    name: "Gemini",
    provider: "Google",
    license: true,
    type: "Multimodal (Text, Vision, Code)",
    status: "Conditionally Approved",
    description:
      "Google's advanced AI assistant capable of understanding text, images, and code.",
    features: [
      "Available in Google Workspace",
      "Multimodal understanding",
      "Content generation across formats",
      "Integrated with Google search",
      "Document and spreadsheet assistance",
    ],
    featured: true,
  },
  {
    name: "NotebookLM",
    provider: "Google",
    license: true,
    type: "Retrieval-Augmented Generation (RAG)",
    status: "Conditionally Approved",
    description:
      "AI tool for organizing, summarizing, and exploring information from multiple sources.",
    features: [
      "Source-grounded responses",
      "Custom knowledge bases",
      "Citation tracking",
      "Interactive exploration",
    ],
    featured: false,
  },
  {
    name: "AI Companion",
    provider: "Zoom",
    license: true,
    type: "Text Generation (Meetings, Summarization)",
    status: "Conditionally Approved",
    description:
      "AI assistant that helps capture, summarize, and organize information from Zoom meetings.",
    features: [
      "Meeting summarization",
      "Action item extraction",
      "Searchable meeting content",
      "Real-time assistance during calls",
    ],
    featured: false,
  },
  {
    name: "Ace",
    provider: "TopHat",
    license: true,
    type: "Text Generation (Education-specific)",
    status: "Conditionally Approved",
    description:
      "Education-specific AI designed to support teaching and learning in higher education.",
    features: [
      "Course content creation",
      "Quiz and assessment generation",
      "Personalized feedback for students",
      "Learning materials adaptation",
    ],
    featured: false,
  },
  {
    name: "Firefly",
    provider: "Adobe Photoshop Express",
    license: true,
    type: "Vision (Image Generation & Editing)",
    status: "Conditionally Approved",
    description:
      "Creative AI tools for generating and editing images, graphics, and designs.",
    features: [
      "Text-to-image generation",
      "Image editing and enhancement",
      "Design variation creation",
      "Creative asset generation",
    ],
    featured: false,
  },
  {
    name: "ChatGPT",
    provider: "OpenAI",
    license: false,
    type: "Multimodal (Text, Vision, Code, Voice)",
    status: "To Be Evaluated",
    description:
      "Versatile AI assistant capable of text generation, image analysis, and voice interaction.",
    features: [
      "Conversational text generation",
      "Code writing and debugging",
      "Image understanding and generation",
      "Voice interaction capabilities",
      "Custom GPT creation",
    ],
    featured: false,
  },
  {
    name: "Claude",
    provider: "Anthropic",
    license: false,
    type: "Text Generation & Document QA (File-Aware)",
    status: "To Be Evaluated",
    description:
      "AI assistant designed for safety and helpfulness with strong document analysis capabilities.",
    features: [
      "Long context understanding",
      "Document analysis and summarization",
      "Nuanced reasoning",
      "PDF and file processing",
    ],
    featured: false,
  },
  {
    name: "Midjourney",
    provider: "Midjourney",
    license: false,
    type: "Vision (Image Generation)",
    status: "To Be Evaluated",
    description:
      "Advanced AI system for generating highly detailed and artistic images from text descriptions.",
    features: [
      "High-quality image generation",
      "Fine-grained style control",
      "Artistic and realistic rendering",
      "Detailed prompt customization",
    ],
    featured: false,
  },
  {
    name: "LLaMA",
    provider: "Meta",
    license: false,
    type: "Text Generation (Foundation Model)",
    status: "To Be Evaluated",
    description:
      "Open foundation model that can be fine-tuned for various text generation applications.",
    features: [
      "Customizable foundation model",
      "Open source framework",
      "Multiple size variations",
      "Text generation capabilities",
    ],
    featured: false,
  },
  {
    name: "Grok",
    provider: "X (Twitter)",
    license: false,
    type: "Multimodal (Text, Trending Context)",
    status: "To Be Evaluated",
    description:
      "AI assistant with access to real-time information and a distinctive personality.",
    features: [
      "Real-time information access",
      "Internet search capabilities",
      "Conversational interaction",
      "Trending topic awareness",
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ToolComparison = () => {
  // Group products by licensing status
  const licensedProducts = aiProducts.filter((product) => product.license);
  const unlicensedProducts = aiProducts.filter((product) => !product.license);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-sm">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            AI Tool Comparison
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            This comparison provides an overview of AI tools and their status at
            BYU-Idaho. Tools with a license are available for eligible faculty
            and staff within specified usage guidelines.
          </p>
        </header>

        {/* Legend */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-green-200 border border-green-600 mr-2"></span>
            <span className="text-slate-700 dark:text-slate-200">
              Conditionally Approved
            </span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-amber-200 border border-amber-600 mr-2"></span>
            <span className="text-slate-700 dark:text-slate-200">
              To Be Evaluated
            </span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-slate-200 border border-slate-500 mr-2"></span>
            <span className="text-slate-700 dark:text-slate-200">
              Available Features
            </span>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
            BYUI Licensed Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {licensedProducts.map((product) => (
              <div
                key={product.name}
                className={classNames(
                  "rounded-xl p-6 shadow-sm",
                  product.status === "Conditionally Approved"
                    ? "bg-white dark:bg-slate-700 border-2 border-green-200 dark:border-green-600"
                    : "bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600"
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {product.provider}
                    </p>
                  </div>
                  <span
                    className={classNames(
                      "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                      product.status === "Conditionally Approved"
                        ? "bg-green-200 text-green-900 border border-green-600"
                        : "bg-amber-200 text-amber-900 border border-amber-600"
                    )}
                  >
                    {product.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {product.description}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Type
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {product.type}
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
            Non-Licensed Tools (Under Evaluation)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unlicensedProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-amber-200 dark:border-amber-700 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {product.provider}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-amber-200 text-amber-900 border border-amber-600">
                    {product.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {product.description}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Type
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {product.type}
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-slate-400 dark:text-slate-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-start">
            <QuestionMarkCircleIcon
              className="h-6 w-6 text-slate-500 dark:text-slate-400 flex-shrink-0"
              aria-hidden="true"
            />
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Understanding AI Tool Status
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <strong>Conditionally Approved:</strong> These tools are
                available for use by BYU-Idaho faculty and staff with
                appropriate licensing, but must be used in accordance with
                university data guidelines. Do not input sensitive or protected
                information.
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <strong>To Be Evaluated:</strong> These tools are currently
                under review by the university. They may require individual
                licensing or may be considered for institutional licensing in
                the future based on evaluation results and campus needs.
              </p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                For more information about BYU-Idaho's AI guidelines, please
                visit the{" "}
                <a
                  href="https://www.byui.edu/genai/"
                  className="text-cyan-700 hover:underline dark:text-cyan-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BYU-Idaho GenAI website (opens in a new tab)"
                >
                  BYU-Idaho GenAI website
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolComparison;
