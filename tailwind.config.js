/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"]
      },
      colors: {
        primary: "#1C1C57",
        green:"#078D84",
        blue:"#255BF9",
        purple:"AB29A1",
        secondary:"#3E3E70",
      },
    },
  },
  plugins: []
};

