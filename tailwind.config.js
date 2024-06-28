/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        sans: ["'League Spartan'", "system-ui", "sans-serif"]
      },
      fontSize: {
        mainHeading: "clamp(2.5rem, 2.3239rem + 0.7512vi, 3rem)",
        subHeading: "clamp(0.875rem, 0.831rem + 0.1878vi, 1rem)"
      }
    }
  },
  plugins: []
};
