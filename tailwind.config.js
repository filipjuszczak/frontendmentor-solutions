/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrayishBlue: "hsl(217, 19%, 35%)",
        darkBlue: "hsl(214, 17%, 51%)",
        grayishBlue: "hsl(212, 23%, 69%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)"
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
