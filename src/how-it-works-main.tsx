import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import HowItWorks from "./components/HowItWorks"; // Import the new HowItWorks component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <HowItWorks />
    </Layout>
  </React.StrictMode>
);
