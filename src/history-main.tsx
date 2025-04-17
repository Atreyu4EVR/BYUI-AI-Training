import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import History from "./components/History"; // Import the new History component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <History />
    </Layout>
  </React.StrictMode>
);
