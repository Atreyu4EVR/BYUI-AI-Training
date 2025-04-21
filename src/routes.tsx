import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import History from "./components/History";
import Capabilities from "./components/Capabilities";
import HowItWorks from "./components/HowItWorks";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import AIContext from "./components/AIContext";
// import LessonTwo from "./components/LessonTwo"; // Temporarily comment this out
import ContextIsEverything from "./components/ContextIsEverything";
import PromptBasics from "./components/PromptBasics";
import AdvancedPrompting from "./components/AdvancedPrompting";
import LessonTwoOverview from "./components/LessonTwoOverview";
import LessonOneOverview from "./components/LessonOneOverview";
import AboutPage from "./components/About";
import Minimal from "./components/Minimal";
import Moderate from "./components/Moderate";
import Comprehensive from "./components/Comprehensive";
import GettingStarted from "./components/GettingStarted";
import ToolComparison from "./components/ToolComparison";
import ProductRankings from "./components/ProductRankings";
import Glossary from "./components/Glossary";
import PromptFeedback from "./components/PromptFeedback";
import TokenPrediction from "./components/TokenPrediction";

// Placeholder component for pages not yet created
interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => (
  <div className="page-container">
    <div className="page-content">
      <header className="page-header">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">
          This page is under development and will be coming soon.
        </p>
      </header>
      <div className="content-section">
        <p className="text-primary">
          We're working on building this content. Please check back later!
        </p>
      </div>
    </div>
  </div>
);

// Component to handle 404 errors
const NotFound: React.FC = () => (
  <div className="container mx-auto mt-10 text-center">
    <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
    <p className="mb-4">Sorry, the page you are looking for doesn't exist.</p>
    <Link to="/" className="text-cyan-600 hover:underline dark:text-cyan-400">
      Return to Home
    </Link>
  </div>
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      {/* Lesson One Routes */}
      <Route path="lesson-one" element={<LessonOneOverview />} />
      <Route path="getting-started" element={<GettingStarted />} />
      <Route
        path="artificial-intelligence"
        element={<ArtificialIntelligence />}
      />
      <Route path="history" element={<History />} />
      <Route path="ai-context" element={<AIContext />} />
      <Route path="capabilities" element={<Capabilities />} />
      <Route path="how-it-works" element={<HowItWorks />} />
      <Route path="token-prediction" element={<TokenPrediction />} />
      <Route
        path="prompting"
        element={<PlaceholderPage title="Introduction to Prompting" />}
      />
      <Route path="minimal" element={<Minimal />} />

      {/* Lesson Two Routes */}
      <Route path="lesson-two" element={<LessonTwoOverview />} />
      <Route path="context-is-everything" element={<ContextIsEverything />} />
      <Route path="prompt-basics" element={<PromptBasics />} />
      <Route path="advanced-prompting" element={<AdvancedPrompting />} />
      <Route path="moderate" element={<Moderate />} />
      <Route path="prompt-feedback" element={<PromptFeedback />} />

      {/* Lesson Three Routes */}
      <Route
        path="lesson-three"
        element={<PlaceholderPage title="Lesson Three: Overview" />}
      />
      <Route
        path="lesson-three-topic-1"
        element={<PlaceholderPage title="Placeholder 1" />}
      />
      <Route
        path="lesson-three-topic-2"
        element={<PlaceholderPage title="Placeholder 2" />}
      />
      <Route
        path="lesson-three-topic-3"
        element={<PlaceholderPage title="Placeholder 3" />}
      />
      <Route path="comprehensive" element={<Comprehensive />} />

      {/* Resource Routes */}
      <Route path="tool-comparison" element={<ToolComparison />} />
      <Route path="product-rankings" element={<ProductRankings />} />
      <Route path="glossary" element={<Glossary />} />
      <Route path="about" element={<AboutPage />} />

      {/* Legacy URL support */}
      <Route path="index.html" element={<Navigate to="/" replace />} />
      <Route path="prerequisites.html" element={<Navigate to="/" replace />} />
      <Route path="history.html" element={<Navigate to="/history" replace />} />
      <Route
        path="capabilities.html"
        element={<Navigate to="/capabilities" replace />}
      />
      <Route
        path="how-it-works.html"
        element={<Navigate to="/how-it-works" replace />}
      />
      <Route
        path="prompting.html"
        element={<Navigate to="/prompting" replace />}
      />
      <Route
        path="lesson-two.html"
        element={<Navigate to="/lesson-two" replace />}
      />
      <Route
        path="getting-started.html"
        element={<Navigate to="/getting-started" replace />}
      />
      <Route
        path="tool-comparison.html"
        element={<Navigate to="/tool-comparison" replace />}
      />
      <Route
        path="product-rankings.html"
        element={<Navigate to="/product-rankings" replace />}
      />
      <Route
        path="glossary.html"
        element={<Navigate to="/glossary" replace />}
      />
      <Route path="about.html" element={<Navigate to="/about" replace />} />
      <Route path="minimal.html" element={<Navigate to="/minimal" replace />} />
      <Route
        path="moderate.html"
        element={<Navigate to="/moderate" replace />}
      />
      <Route
        path="comprehensive.html"
        element={<Navigate to="/comprehensive" replace />}
      />

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
