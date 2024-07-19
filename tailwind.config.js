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
        yellow: colors.yellow,
        textColor: '#B6C2CF',
        todoCardColor: '#22272B',
        textSubtle: '#9FADBC'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

