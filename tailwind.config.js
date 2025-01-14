/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#8c756a",
        secondary: "#dfd8c9",
        tertiary: "#d1a15f",
        "black-100": "#4e3b2f", 
        "black-200": "#3c2a1a", 
        "white-100": "#f1e3d3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #4e3b2f",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg-transparent.png')",
      },
    },
  },
  plugins: [],
};