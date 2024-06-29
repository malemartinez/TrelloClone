/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        success: colors.green
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

