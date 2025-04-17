import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import Capabilities from "./components/Capabilities"; // Import the new Capabilities component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Capabilities />
    </Layout>
  </React.StrictMode>
);
