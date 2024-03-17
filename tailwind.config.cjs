/** @type {import('tailwindcss').Config}*/

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
    container: { center: true },
    fontFamily: {
      sans: ["Concourse_4", "Concourse_3", "ui-sans-serif", "system-ui"],
      serif: ["Equity", "ui-serif"],
    },
    extend: {
      colors: {
        neutral: {
          100: "#ffffff",
          200: "#dfe1df",
          300: "#cbd0cc",
          400: "#d4d8d6",
          500: "#303030",
          600: "#262626",
          700: "#242423",
          800: "#1c1c1a",
        },
        main: {
          100: "#bfc0bf",
          200: "#98aaa2",
          300: "#82a094",
          400: "#6c9987",
          500: "#598c78",
          600: "#497e69",
          700: "#3a6e59",
          800: "#204b3a",
          900: "#0c2219",
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};

module.exports = config;
