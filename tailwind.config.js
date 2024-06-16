/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        lightPurple: "hsl(281, 83%, 54%)",
        darkPurple: "hsl(292, 42%, 14%)"
      },
      fontFamily: {
        sans: ["'Work Sans'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
