/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      primary: "#8554fb",
      white: {
        DEFAULT: "#FFF",
        50: "#ffffff80",
        20: "#fff3",
      },
      gold : "#eddc5d",
      black: "#000000",
    }
  },
  plugins: [],
}