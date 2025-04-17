/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./minimal.html",
    "./moderate.html",
    "./comprehensive.html",
    "./prerequisites.html",
    "./history.html",
    "./capabilities.html",
    "./how-it-works.html",
    "./about.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0ea5e9",
          dark: "#38bdf8",
        },
        secondary: {
          light: "#10b981",
          dark: "#34d399",
        },
      },
      backgroundColor: {
        dark: "#1e293b",
        light: "#ffffff",
      },
      textColor: {
        dark: {
          primary: "#f8fafc",
          secondary: "#cbd5e1",
        },
        light: {
          primary: "#1e293b",
          secondary: "#64748b",
        },
      },
    },
  },
  plugins: [],
};
