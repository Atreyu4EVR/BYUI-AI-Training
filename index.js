require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Request body:", JSON.stringify(req.body, null, 2));
  }
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  console.log("Health check endpoint called");
  console.log("API Key exists:", !!process.env.HUGGINGFACE_API_KEY);
  res.status(200).json({ status: "ok" });
});

// Proxy endpoint for token prediction
app.post("/api/token-prediction", async (req, res) => {
  try {
    const { model, inputs, parameters } = req.body;
    console.log("Token prediction request:", { model, parameters });
    console.log("Inputs:", JSON.stringify(inputs));

    if (!model || !inputs) {
      console.log("Missing required parameters", { model, inputs });
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const apiKey = process.env.HUGGINGFACE_API_KEY;
    console.log(
      "API Key first few chars:",
      apiKey ? apiKey.substring(0, 5) + "..." : "undefined"
    );

    if (!apiKey) {
      console.log("API key not configured");
      return res.status(500).json({ error: "API key not configured" });
    }

    console.log(`Calling HuggingFace API for model: ${model}`);
    const url = `https://api-inference.huggingface.co/models/${model}`;
    console.log("Request URL:", url);

    try {
      console.log("Making request to HuggingFace with headers:", {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey.substring(0, 5)}...`,
      });

      // Use a testable response to ensure we're not having API issues
      const mockResponse = {
        choices: [
          {
            message: {
              content:
                '[{"token": "be", "probability": 25}, {"token": "study", "probability": 20}, {"token": "work", "probability": 15}]',
            },
          },
        ],
      };

      console.log("Mock response data:", mockResponse);

      // For testing, always use the mock response
      res.json(mockResponse);

      // Uncomment these lines to use the real API
      /*
      const response = await axios.post(
        url,
        inputs,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          params: parameters,
        }
      );

      console.log("HuggingFace API response status:", response.status);
      console.log("Response data:", JSON.stringify(response.data, null, 2));
      res.json(response.data);
      */
    } catch (apiError) {
      console.error("HuggingFace API error:", apiError.message);
      console.error("Error response data:", apiError.response?.data);
      console.error("Error status:", apiError.response?.status);
      throw apiError;
    }
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
    console.log(
      "API Key first few chars:",
      apiKey ? apiKey.substring(0, 5) + "..." : "undefined"
    );

    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    // For testing, use mock data
    const mockResponse = {
      choices: [
        {
          delta: { content: "This is a mock response for prompt feedback" },
        },
      ],
    };

    res.json(mockResponse);

    // Uncomment to use real API
    /*
    // Call to HuggingFace API for prompt evaluation
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
    */
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
    console.log(
      "API Key first few chars:",
      apiKey ? apiKey.substring(0, 5) + "..." : "undefined"
    );

    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    console.log(`Calling HuggingFace API for model: ${model}`);

    // For testing, return mock streaming response
    res.setHeader("Content-Type", "application/json");

    // Send a mock streaming response with JSON chunks
    const streamResponse = (chunk) => {
      res.write(JSON.stringify(chunk));
    };

    // Send mock data in chunks
    streamResponse({
      choices: [{ delta: { content: "This " } }],
    });

    setTimeout(() => {
      streamResponse({
        choices: [{ delta: { content: "is " } }],
      });
    }, 100);

    setTimeout(() => {
      streamResponse({
        choices: [{ delta: { content: "mock data." } }],
      });
      res.end();
    }, 200);

    /*
    try {
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

      console.log("HuggingFace API response status:", response.status);
      res.json(response.data);
    } catch (apiError) {
      console.error("HuggingFace API error:", apiError.message);
      console.error("Error response data:", apiError.response?.data);
      console.error("Error status:", apiError.response?.status);
      throw apiError;
    }
    */
  } catch (error) {
    console.error("Error calling HuggingFace API:", error);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
  console.log(
    "Environment variables loaded, API Key exists:",
    !!process.env.HUGGINGFACE_API_KEY
  );
  if (process.env.HUGGINGFACE_API_KEY) {
    console.log(
      "API Key starts with:",
      process.env.HUGGINGFACE_API_KEY.substring(0, 5)
    );
  }
});
