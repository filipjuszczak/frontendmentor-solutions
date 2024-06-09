const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      ...defaultTheme.screens
    },
    colors: {
      softOrange: 'hsl(35, 77%, 62%)',
      softRed: 'hsl(5, 85%, 63%)',
      offWhite: 'hsl(36, 100%, 99%)',
      grayishBlue: 'hsl(233, 8%, 79%)',
      darkGrayishBlue: 'hsl(236, 13%, 42%)',
      veryDarkBlue: 'hsl(240, 100%, 5%)',
      white: colors.white
    }
  },
  plugins: []
};
