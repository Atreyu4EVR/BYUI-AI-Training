require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Proxy endpoint for token prediction
app.post("/api/token-prediction", async (req, res) => {
  try {
    const { model, inputs, parameters } = req.body;

    if (!model || !inputs) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const apiKey = process.env.HUGGINGFACE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      inputs,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        params: parameters,
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error calling HuggingFace API:", error);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || "Internal server error",
    });
  }
});

// Proxy endpoint for prompt feedback
app.post("/api/prompt-feedback", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt parameter" });
    }

    const apiKey = process.env.HUGGINGFACE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    // Call to HuggingFace API for prompt evaluation
    // Adjust the endpoint and parameters based on your specific needs
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/deepset/deberta-v3-base-injection",
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error calling HuggingFace API:", error);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || "Internal server error",
    });
  }
});

// Generic proxy for any HuggingFace model
app.post("/api/huggingface/:model", async (req, res) => {
  try {
    const { model } = req.params;
    const { inputs, parameters } = req.body;

    if (!inputs) {
      return res.status(400).json({ error: "Missing inputs parameter" });
    }

    const apiKey = process.env.HUGGINGFACE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      inputs,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        params: parameters,
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error calling HuggingFace API:", error);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
