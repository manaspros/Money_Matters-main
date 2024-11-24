/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All JS/TS/JSX/TSX files in the `src` directory
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
      },
      colors: {
        neutral: {
          800: "#2e2e2e",
          200: "#e0e0e0",
        },
      },
    },
  },
  plugins: [],
};

