/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nutmeg: "hsl(14, 45%, 36%)",
        darkRaspberry: "hsl(332, 51%, 32%)",
        white: "hsl(0, 0%, 100%)",
        roseWhite: "hsl(330, 100%, 98%)",
        eggShell: "hsl(30, 54%, 90%)",
        lightGrey: "hsl(30, 18%, 87%)",
        wengeBrown: "hsl(30, 10%, 34%)",
        darkCharcoal: "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        serif: ["Young Serif", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        semiBold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
