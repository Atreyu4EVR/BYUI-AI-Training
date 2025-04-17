import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import MinimalContextExercise from "./components/minimal-context-activity";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <MinimalContextExercise />
    </Layout>
  </React.StrictMode>
);
