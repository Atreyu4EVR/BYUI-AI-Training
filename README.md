# React Context Activities

This project displays two interactive React components demonstrating AI prompt context levels.

Built with React, TypeScript, Vite, and Tailwind CSS.

## Project Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run preview`

Serves the production build locally from the `dist` folder. Useful for checking the build before deploying.

## Deployment to GitHub Pages

1.  **Update `vite.config.ts`:** Change the `base` property from `'/your-repo-name/'` to match your GitHub repository name (e.g., `'/my-context-app/'`).
2.  **Build the project:**
    ```bash
    npm run build
    ```
3.  **Commit and push:** Add the `dist` directory to your commit (remove `dist` from `.gitignore` if you want to commit the build output directly) or set up a GitHub Action to build and deploy.
4.  **Configure GitHub Pages:** In your repository settings under "Pages", select the branch and folder (usually `gh-pages` branch or `/docs` or `/ (root)` on the main branch if you committed the `dist` folder contents) to deploy from.

    - **Using GitHub Actions (Recommended):** Search for a Vite GitHub Pages deployment action in the GitHub Marketplace for an automated workflow.
    - **Manual Deployment:** You can use tools like `gh-pages` (`npm install --save-dev gh-pages`) and add a deploy script to `package.json`:
      ```json
      "scripts": {
        // ... other scripts
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
      }
      ```
      Then run `npm run deploy`.
