module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      DEFAULT: "1rem",
      xs: "460px",
      sm: "640px",
      md: "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      transitionProperty:{
        "right":"right",
        "left": "left"
      },
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
