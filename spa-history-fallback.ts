import type { Connect } from "vite";

// Simple middleware for SPA history API fallback
export function createSpaFallbackMiddleware(): Connect.NextHandleFunction {
  return (req, res, next) => {
    // Skip API requests, WebSocket upgrades, and static files
    if (
      req.url?.includes(".") &&
      !req.url.endsWith(".html") &&
      !req.url.includes("/__vite_ping") &&
      !req.url.includes("/node_modules/")
    ) {
      return next();
    }

    // If it's a navigation request (HTML request), return index.html
    if (req.headers.accept?.includes("text/html")) {
      console.log(`[SPA] Redirecting ${req.url} to index.html`);
      req.url = "/index.html";
    }

    next();
  };
}
