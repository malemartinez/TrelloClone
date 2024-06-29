/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        primary: colors.blue,
        danger: colors.red,
        yellow: colors.yellow
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

