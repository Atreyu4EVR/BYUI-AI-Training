import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import ModerateContextExercise from "./components/moderate-context-activity";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <ModerateContextExercise />
    </Layout>
  </React.StrictMode>
);
