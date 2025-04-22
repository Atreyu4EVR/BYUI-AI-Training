#!/bin/bash

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Testing BYU-Idaho AI Training API${NC}"
echo -e "${BLUE}======================================${NC}"

# Set the API base URL - change this if testing in production
API_URL="http://localhost:3001"

# Test health endpoint
echo -e "\n${BLUE}Testing health endpoint...${NC}"
HEALTH_RESPONSE=$(curl -s "${API_URL}/api/health")
if [[ $HEALTH_RESPONSE == *"\"status\":\"ok\""* ]]; then
  echo -e "${GREEN}✓ Health endpoint is working${NC}"
else
  echo -e "${RED}✗ Health endpoint failed: $HEALTH_RESPONSE${NC}"
fi

# Test token prediction endpoint
echo -e "\n${BLUE}Testing token prediction endpoint...${NC}"
TOKEN_RESPONSE=$(curl -s -X POST "${API_URL}/api/token-prediction" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/Llama-3.3-70B-Instruct",
    "inputs": {
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful AI assistant that helps users understand how token prediction works in large language models. When given a sentence fragment, you should: 1. Analyze what the most likely next tokens (words or partial words) would be 2. Provide the top 5-8 most likely next tokens with estimated probabilities 3. Return ONLY a JSON array of objects with token and probability fields 4. Make sure probabilities are reasonable (they don not need to sum to 100%) 5. Focus on providing realistic predictions similar to how a language model would actually predict the next token. Example format: [{\"token\": \"participate\", \"probability\": 15}, {\"token\": \"succeed\", \"probability\": 12}, {\"token\": \"develop\", \"probability\": 10}]. Return ONLY the JSON array and nothing else. No explanations, no surrounding text."
        },
        {
          "role": "user",
          "content": "Predict the most likely next tokens for this sentence fragment: \"Students at BYU-Idaho are encouraged to\""
        }
      ]
    },
    "parameters": {
      "max_tokens": 400,
      "temperature": 0.7
    }
  }')

if [[ $TOKEN_RESPONSE == *"token"* && $TOKEN_RESPONSE == *"probability"* ]]; then
  echo -e "${GREEN}✓ Token prediction endpoint is working${NC}"
  echo "Sample response: $TOKEN_RESPONSE"
else
  echo -e "${RED}✗ Token prediction endpoint failed: $TOKEN_RESPONSE${NC}"
fi

# Test general Hugging Face endpoint
echo -e "\n${BLUE}Testing generic Hugging Face endpoint...${NC}"
HF_RESPONSE=$(curl -s -X POST "${API_URL}/api/huggingface/meta-llama/Llama-3.3-70B-Instruct" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": {
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful AI assistant."
        },
        {
          "role": "user",
          "content": "Hello, what can you help me with?"
        }
      ]
    },
    "parameters": {
      "max_tokens": 100
    }
  }')

if [[ $HF_RESPONSE == *"assist"* || $HF_RESPONSE == *"help"* ]]; then
  echo -e "${GREEN}✓ Generic Hugging Face endpoint is working${NC}"
  echo "Sample response: ${HF_RESPONSE:0:100}..."
else
  echo -e "${RED}✗ Generic Hugging Face endpoint failed: $HF_RESPONSE${NC}"
fi

echo -e "\n${BLUE}API Testing Complete${NC}" 