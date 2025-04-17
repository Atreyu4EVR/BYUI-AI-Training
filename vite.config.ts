import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/", // <-- IMPORTANT: Replace 'your-repo-name' with your actual GitHub repository name
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        minimal: resolve(__dirname, "minimal.html"),
        moderate: resolve(__dirname, "moderate.html"),
        comprehensive: resolve(__dirname, "comprehensive.html"),
        prerequisites: resolve(__dirname, "prerequisites.html"),
        history: resolve(__dirname, "history.html"),
        capabilities: resolve(__dirname, "capabilities.html"),
        howItWorks: resolve(__dirname, "how-it-works.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});
