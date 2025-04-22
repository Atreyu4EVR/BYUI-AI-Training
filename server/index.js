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

    // Use the correct API endpoint for chat models
    console.log(`Calling HuggingFace API for model: ${model}`);
    const url = `https://router.huggingface.co/hf-inference/models/${model}/v1/chat/completions`;
    console.log("Request URL:", url);

    try {
      console.log("Making request to HuggingFace with headers:", {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey.substring(0, 5)}...`,
      });

      // Format the request according to the chat completions API
      const response = await axios.post(
        url,
        {
          messages: inputs.messages,
          max_tokens: parameters?.max_tokens || 400,
          temperature: parameters?.temperature || 0.7,
          model: model,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("HuggingFace API response status:", response.status);
      console.log("Response data:", JSON.stringify(response.data, null, 2));
      res.json(response.data);
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

    // Model to use for prompt feedback
    const model = "meta-llama/Llama-3.3-70B-Instruct";
    const url = `https://router.huggingface.co/hf-inference/models/${model}/v1/chat/completions`;
    console.log(`Calling HuggingFace API for model: ${model}`);
    console.log("Request URL:", url);

    // Call to HuggingFace API for prompt evaluation
    const response = await axios.post(
      url,
      {
        messages: [
          {
            role: "system",
            content: `You are a helpful AI assistant for the AI engineers at BYU-Idaho. The engineers have created a course for university employees to learn about prompt engineering. Your task is to analyze the given prompt.

            Use the following feedback template to provide feedback and score the prompt:
            
            ---
            
            Context-Based Prompt Score: [X/10]
            
            Strengths:
            - [Identify 1-2 specific contextual elements the student included effectively]
            
            Areas for Improvement:
            - [Identify 1-2 specific contextual elements that could be enhanced]
            
            Revised Example:
            [Provide a brief example of how adding missing contextual elements would improve the prompt]
            
            ---
            
            Provide a balanced assessment highlighting both strengths and areas for improvement. Keep your feedback concise, constructive, and actionable.
            
            You MUST follow the template exactly. Use proper Markdown syntax with headings, bold text, and numbered lists. Do not add any HTML tags.`,
          },
          {
            role: "user",
            content: `Please analyze this prompt and give feedback on how it could be improved based on the principles of effective prompt engineering:\n\n"${prompt}"`,
          },
        ],
        max_tokens: 600,
        temperature: 0.7,
        model: model,
      },
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
    console.log(
      "API Key first few chars:",
      apiKey ? apiKey.substring(0, 5) + "..." : "undefined"
    );

    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    // Use the correct API endpoint for chat models
    const url = `https://router.huggingface.co/hf-inference/models/${model}/v1/chat/completions`;
    console.log(`Calling HuggingFace API for model: ${model}`);
    console.log("Request URL:", url);

    // Check if streaming is requested
    if (parameters && parameters.stream === true) {
      // Set appropriate headers
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      try {
        const response = await axios.post(
          url,
          {
            messages: inputs.messages,
            max_tokens: parameters?.max_tokens || 400,
            temperature: parameters?.temperature || 0.7,
            model: model,
            stream: true,
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            responseType: "stream",
          }
        );

        // Forward the stream from HuggingFace to client
        response.data.on("data", (chunk) => {
          res.write(chunk);
        });

        response.data.on("end", () => {
          res.end();
        });

        response.data.on("error", (err) => {
          console.error("Stream error:", err);
          res.end(JSON.stringify({ error: "Stream error occurred" }));
        });
      } catch (error) {
        console.error("Error setting up stream:", error);
        res.status(500).json({ error: "Failed to set up streaming response" });
      }
    } else {
      // Regular non-streaming request
      const response = await axios.post(
        url,
        {
          messages: inputs.messages,
          max_tokens: parameters?.max_tokens || 400,
          temperature: parameters?.temperature || 0.7,
          model: model,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      res.json(response.data);
    }
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
