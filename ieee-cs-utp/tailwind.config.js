/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieeeBlue: "#00629B",
        ieeeYellow: "#FFB400",
        ieeeGray: "#f3f4f6",
        dark: "#1a1a1a",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
