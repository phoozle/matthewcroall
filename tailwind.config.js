const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "media",
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        serif: ["Verdana", "Bitstream Vera Sans", "sans-serif"]
      },
      colors: {
        gray: colors.blueGray
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
