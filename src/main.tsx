import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Prerequisites from "./components/Prerequisites";
import History from "./components/History";
import Capabilities from "./components/Capabilities";
import HowItWorks from "./components/HowItWorks";
import AboutPage from "./components/About";
import Minimal from "./components/Minimal";
import Moderate from "./components/Moderate";
import Comprehensive from "./components/Comprehensive";
import GettingStarted from "./components/GettingStarted";
import ToolComparison from "./components/ToolComparison";
import ProductRankings from "./components/ProductRankings";
import Glossary from "./components/Glossary";
import "./index.css";

// Using HashRouter for GitHub Pages compatibility
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="prerequisites" element={<Prerequisites />} />
              <Route path="history" element={<History />} />
              <Route path="capabilities" element={<Capabilities />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="getting-started" element={<GettingStarted />} />
              <Route path="tool-comparison" element={<ToolComparison />} />
              <Route path="product-rankings" element={<ProductRankings />} />
              <Route path="glossary" element={<Glossary />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="minimal" element={<Minimal />} />
              <Route path="moderate" element={<Moderate />} />
              <Route path="comprehensive" element={<Comprehensive />} />

              {/* Legacy URL support */}
              <Route path="index.html" element={<Navigate to="/" replace />} />
              <Route
                path="prerequisites.html"
                element={<Navigate to="/prerequisites" replace />}
              />
              <Route
                path="history.html"
                element={<Navigate to="/history" replace />}
              />
              <Route
                path="capabilities.html"
                element={<Navigate to="/capabilities" replace />}
              />
              <Route
                path="how-it-works.html"
                element={<Navigate to="/how-it-works" replace />}
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
              <Route
                path="about.html"
                element={<Navigate to="/about" replace />}
              />
              <Route
                path="minimal.html"
                element={<Navigate to="/minimal" replace />}
              />
              <Route
                path="moderate.html"
                element={<Navigate to="/moderate" replace />}
              />
              <Route
                path="comprehensive.html"
                element={<Navigate to="/comprehensive" replace />}
              />

              {/* Catch-all route for 404 */}
              <Route
                path="*"
                element={
                  <div className="container mx-auto mt-10 text-center">
                    <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                    <p className="mb-4">
                      Sorry, the page you are looking for doesn't exist.
                    </p>
                    <a
                      href="#/"
                      className="text-cyan-600 hover:underline dark:text-cyan-400"
                    >
                      Return to Home
                    </a>
                  </div>
                }
              />
            </Route>
          </Routes>
        </SearchProvider>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
