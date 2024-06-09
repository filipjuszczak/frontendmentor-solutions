/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      fontSize: {
        base: "16px",
      },
      fontFamily: {
        body: "Figtree",
      },
      fontWeight: {
        semibold: "600",
        bold: "800",
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
