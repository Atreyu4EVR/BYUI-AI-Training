import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout"; // Import Layout
import AboutPage from "./components/About";
import "./index.css"; // Import CSS

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Layout>
        <AboutPage />
      </Layout>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
