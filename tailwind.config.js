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
        byui: {
          // Light mode colors - kept from your original config
          light: {
            background: "#FFFFFF", // Page background
            navbar: "#006EB6", // Light navbar - BYU-Idaho blue
            card: "#F1F5F9", // Light cards and surfaces
            border: "#D1D5DB", // Light borders
            text: {
              primary: "#1F2937", // Dark text
              secondary: "#6B7280", // Muted text
            },
          },

          // Dark mode colors - updated with official BYU-Idaho colors
          dark: {
            // Primary colors
            blue: "#006EB6", // Official BYU-Idaho Blue
            background: "#0D1B2A", // Updated: Main page background (Accent-5)
            navbar: "#152238", // Updated: Navbar background (Accent-6)
            card: "#1E293B", // Updated: Cards and UI components
            border: "#214491", // Updated: Border and divider lines (Brand-1)

            // Text colors
            text: {
              primary: "#EBEBEB", // Updated: Main body text (Brand-20)
              secondary: "#D2D2D2", // Updated: Muted text (Brand-19)
              highlight: "#4F9ACF", // Added: Highlighted text (Brand-2)
            },

            // Accent colors
            accent: {
              purple: "#7C3AED", // Added: Purple accent (Accent-1)
              cyan: "#06B6D4", // Added: Cyan accent (Accent-2)
              red: "#DC2626", // Added: Red accent (Accent-3)
              green: "#22C55E", // Added: Green accent (Accent-4)
              yellow: "#F6CD45", // Added: Yellow accent (Brand-18)
            },
          },

          // Added: Complete BYU-Idaho brand colors from CSS files
          brand: {
            // Blues from secondary.css
            blue: {
              1: "#214491", // BYUI-Brand-1-hex
              2: "#4F9ACF", // BYUI-Brand-2-hex
              3: "#A0D4ED", // BYUI-Brand-3-hex
            },
            // Greens from secondary.css
            green: {
              1: "#78974D", // BYUI-Brand-4-hex
              2: "#8CBA54", // BYUI-Brand-5-hex
              3: "#BBD592", // BYUI-Brand-6-hex
              4: "#D0E2B3", // BYUI-Brand-7-hex
            },
            // Purples from secondary.css
            purple: {
              1: "#561E4C", // BYUI-Brand-8-hex
              2: "#942F6E", // BYUI-Brand-9-hex
            },
            // Reds from secondary.css
            red: {
              1: "#9C2427", // BYUI-Brand-10-hex
              2: "#CE3A34", // BYUI-Brand-11-hex
              3: "#D45C5B", // BYUI-Brand-12-hex
              4: "#DA8181", // BYUI-Brand-13-hex
            },
            // Oranges from secondary.css
            orange: {
              1: "#BB6637", // BYUI-Brand-14-hex
              2: "#DF863C", // BYUI-Brand-15-hex
              3: "#E69F54", // BYUI-Brand-16-hex
              4: "#EAB677", // BYUI-Brand-17-hex
            },
            yellow: "#F6CD45", // BYUI-Brand-18-hex
            gray: {
              1: "#D2D2D2", // BYUI-Brand-19-hex
              2: "#EBEBEB", // BYUI-Brand-20-hex
            },
          },

          // Added: Official primary colors from primary.css
          official: {
            blue: "#006EB6", // BYUI-Official-Primary-1-hex
            black: "#000000", // BYUI-Official-Primary-2-hex
            white: "#FFFFFF", // BYUI-Official-Primary-3-hex
            gray: "#949598", // BYUI-Official-Primary-4-hex
          },

          // Added: Accent colors from accents.css
          accent: {
            purple: "#7C3AED", // BYUI-Accent-1-hex
            cyan: "#06B6D4", // BYUI-Accent-2-hex
            red: "#DC2626", // BYUI-Accent-3-hex
            green: "#22C55E", // BYUI-Accent-4-hex
            navy: {
              dark: "#0D1B2A", // BYUI-Accent-5-hex
              darker: "#152238", // BYUI-Accent-6-hex
            },
          },
        },
      },
      // Updated global colors
      backgroundColor: {
        dark: "#0D1B2A", // Updated to match dark theme background
        light: "#ffffff",
      },
      textColor: {
        dark: {
          primary: "#EBEBEB", // Updated to match dark theme text
          secondary: "#D2D2D2", // Updated to match dark theme secondary text
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
