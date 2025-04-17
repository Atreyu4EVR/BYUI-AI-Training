import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import ComprehensiveContextExercise from "./components/comprehensive-context-activity";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <ComprehensiveContextExercise />
    </Layout>
  </React.StrictMode>
);