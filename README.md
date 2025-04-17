# BYU-Idaho AI Training for Administrators

This project is an interactive training site designed to equip BYU-Idaho administrators and staff with practical AI knowledge and skills to enhance their effectiveness and productivity while upholding the university's values and standards.

## Project Overview

The training site covers:

- **AI Fundamentals**: History, capabilities, and how generative AI works
- **Practical Applications**: Real-world administrative tasks ideal for AI assistance
- **Effective Use Skills**: Crafting effective prompts with context levels (minimal, moderate, comprehensive)
- **BYU-Idaho AI Guidelines**: Official guidance on approved tools and data usage

Built with React, TypeScript, Vite, and Tailwind CSS, with full support for both light and dark modes.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone [repository-url]
   cd Training-BYUI-Administrators
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

## Available Scripts

### `npm run dev`

Runs the app in development mode with hot-reloading enabled.

### `npm run build`

Builds the app for production to the `dist` folder, optimized for performance.

### `npm run preview`

Serves the production build locally for testing before deployment.

## Project Structure

- **Lesson One**: Covers AI fundamentals, history, capabilities, and how generative AI works
- **Prompt Exercises**: Interactive examples of minimal, moderate, and comprehensive prompting techniques
- **Prerequisites**: Setup guide for necessary accounts (ChatGPT)
- **About**: Information about the training initiative and BYU-Idaho AI guidelines

## Deployment

The site is configured to be deployed as a GitHub Pages site with proper routing.

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy using GitHub Actions:**
   The repository includes a GitHub Actions workflow that automatically builds and deploys the site when changes are pushed to the main branch.

## Additional Resources

For more information about BYU-Idaho's AI guidelines, please visit the [official BYU-Idaho GenAI website](https://www.byui.edu/genai/).
