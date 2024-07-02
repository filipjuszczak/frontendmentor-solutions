/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
        offWhite: "hsl(0, 0%, 97%)"
      },
      fontFamily: {
        sans: ["Rubik", "system-ui", "sans-serif"]
      },
      fontSize: {
        primaryHeading: "clamp(1.875rem, 1.4789rem + 1.6901vi, 3rem)",
        secondaryHeading: "clamp(1.5rem, 1.3239rem + 0.7512vi, 2rem)",
        body: "clamp(0.9375rem, 0.8715rem + 0.2817vi, 1.125rem)"
      },
      lineHeight: {
        body: "1.67"
      },
      boxShadow: {
        button: "0 8px 8px -4px hsla(231,58%,55%,0.2)",
        extensionCard: "0 10px 20px -5px hsla(231,58%,55%,0.2)"
      },
      backgroundImage: {
        extensionCard: "url('/images/bg-dots.svg')"
      },
      maxWidth: {
        container: "min(calc(100% - 4rem), 68.75rem)",
        card: "17.5rem"
      }
    }
  },
  plugins: []
};
