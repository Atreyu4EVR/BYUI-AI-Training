import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import Home from "./components/Home";
import "./index.css";

// Basic setup for the home page
// Currently, content is static in index.html
// This ensures CSS is loaded and provides a place for future React components if needed.
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Layout>
        <Home />
      </Layout>
    </React.StrictMode>
  );
} else {
  console.warn("Could not find root element to mount React app");
}
