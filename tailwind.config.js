/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(227, 92%, 58%)",
        gunMetal: "hsl(215, 31%, 21%)",
        darkElectricBlue: "hsl(215, 17%, 45%)",
        white: "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      fontSize: {
        "6xl": "clamp(3rem, 2.6479rem + 1.5023vi, 4rem)",
        "5xl": "clamp(2rem, 1.7143rem + 1.4286vi, 3rem)"
      }
    }
  },
  plugins: []
};
