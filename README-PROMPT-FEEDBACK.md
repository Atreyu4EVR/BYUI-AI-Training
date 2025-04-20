# Prompt Feedback Activity

This activity provides feedback on user prompts to help them improve their AI interaction skills. It uses the HuggingFace Inference API to analyze prompts based on the principles taught in Lesson 2.

## Setup Instructions

### HuggingFace API Key

The activity requires a HuggingFace API key to interact with their LLM services. Follow these steps to set up the key:

1. Create a `.env` file in the root of the project (if it doesn't already exist)
2. Add your HuggingFace API key to the `.env` file:
   ```
   VITE_HUGGINGFACE_API_KEY=your_api_key_here
   ```
3. Replace `your_api_key_here` with your actual HuggingFace API key

If you don't have a HuggingFace API key, you can get one by:

1. Creating an account at [HuggingFace](https://huggingface.co)
2. Go to your profile settings → Access Tokens
3. Create a new token with read access

### Model Configuration

The activity is currently configured to use the `meta-llama/Llama-3.3-70B-Instruct` model through the `novita` provider. You can modify the model in the `PromptFeedbackActivity.tsx` file if needed.

## Implementation Details

The prompt feedback activity consists of two main components:

1. `PromptFeedbackActivity.tsx` - The core component that handles the API interaction and feedback display
2. `PromptFeedback.tsx` - The page wrapper that includes explanatory text and tips

### Environment Variables

The application uses TypeScript type declarations for environment variables (see `src/env.d.ts`). This ensures proper type checking for environment variables in development.

### Markdown Support

The feedback is formatted using Markdown and rendered with `react-markdown`. To support this:

1. The system prompt instructs the LLM to format its response using specific Markdown structure
2. `react-markdown` is used to render the Markdown content
3. Tailwind Typography plugin (`@tailwindcss/typography`) provides styling for the Markdown content

If you need to modify the Markdown styling, you can:

- Adjust the Tailwind classes in the feedback container in `PromptFeedbackActivity.tsx`
- Update the system prompt to change the Markdown structure of the response

### Example Prompts

The activity provides example prompts to help users get started. These can be modified in the `EXAMPLE_PROMPTS` array in `PromptFeedbackActivity.tsx`.

## Security Considerations

- The API key is stored in an environment variable and is never exposed to client-side code
- The `.env` file is included in `.gitignore` to prevent accidental commits of API keys
- For production deployments, ensure the environment variable is properly set in your hosting environment

## Troubleshooting

If the activity shows an error about the API key not being configured:

1. Check that the `.env` file exists and contains the correct environment variable
2. Verify that the API key is valid and has the necessary permissions
3. Restart the development server to ensure the environment variables are loaded

If the feedback generation is slow or fails:

1. Check your internet connection
2. Verify that the HuggingFace API is operational
3. Consider using a different model if the current one is experiencing high traffic

If the Markdown formatting doesn't appear correctly:

1. Check that the Tailwind Typography plugin is properly configured in `tailwind.config.js`
2. Verify that the system prompt is correctly instructing the model to use Markdown
3. Inspect the raw response to ensure the model is returning properly formatted Markdown
