import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { createSpaFallbackMiddleware } from "./spa-history-fallback";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Set base path based on environment:
// '/' for development, './' for production build
const base = process.env.NODE_ENV === "production" ? "./" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Custom plugin to handle SPA routing
    {
      name: "spa-fallback",
      configureServer(server) {
        // Add middleware before internal middleware
        server.middlewares.use(createSpaFallbackMiddleware());
      },
    },
  ],
  base, // Dynamic base path
  build: {
    outDir: "dist",
    // Ensure clean output directory
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  server: {
    // Allow serving files from the project root
    fs: {
      allow: [".."],
    },
  },
  preview: {
    port: 8080,
  },
});
