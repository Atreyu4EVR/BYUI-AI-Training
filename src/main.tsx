import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import AppRoutes from "./routes";
import "./index.css";

// Main application entry point
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <SearchProvider>
          <AppRoutes />
        </SearchProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
