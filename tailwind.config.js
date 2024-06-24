/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-gray-start": "#383838",
        "card-gray-end": "#9E9E9E",
      },
      backgroundImage: {
        "page-gradient": "linear-gradient(to bottom right, #383838, #9E9E9E)",
      },
    },
  },
  plugins: [],
};
