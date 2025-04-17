import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Set base path based on environment:
// '/' for development, './' for production build
const base = process.env.NODE_ENV === "production" ? "./" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base, // Dynamic base path
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "404.html"),
      },
    },
  },
});
