/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(192, 37%, 48%)",
        lightBlue: "hsl(192, 90%, 77%)",
        purple: "hsl(268, 34%, 53%)",
        lightPurple: "hsl(268, 100%, 86%)",
        slate: "hsl(240, 10%, 57%)",
        darkSlate: "hsl(240, 21%, 20%)",
        white: "hsl(0, 0%, 98%)"
      },
      fontFamily: {
        sans: ['"Red Hat Display"', "system-ui", "sans-serif"]
      },
      fontWeight: {
        bold: 900
      },
      backgroundImage: {
        "footer-mobile": "url('/mobile/image-footer.jpg')",
        "footer-tablet": "url('/tablet/image-footer.jpg')",
        "footer-desktop": "url('/desktop/image-footer.jpg')"
      },
      backgroundPosition: {
        "top-center": "top center"
      }
    }
  },
  plugins: []
};
