/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f6efe6",
        sea: {
          50: "#eefbfb",
          100: "#d6f3f4",
          200: "#b0e6e8",
          300: "#7fd4da",
          400: "#44bac5",
          500: "#249eab",
          600: "#1d7f8d",
          700: "#1b6670",
          800: "#1a525a",
          900: "#19454b",
        },
        coral: "#f08c6c",
        ink: "#20303c",
      },
      boxShadow: {
        float: "0 20px 60px rgba(32, 48, 60, 0.12)",
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', "sans-serif"],
        display: ['"DM Serif Display"', "serif"],
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(36, 158, 171, 0.12) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
