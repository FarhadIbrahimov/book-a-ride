/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0b0a09",
          charcoal: "#171412",
          gold: "#caa14b",
          goldLight: "#e0bd6f",
          cream: "#f4ead9",
          red: "#8c1f1f",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Oswald'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
