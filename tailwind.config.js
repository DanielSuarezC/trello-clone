/** @type {import('tailwindcss').Config} */

const color =  require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        success: color.green,
        primary: color.blue,
        danger: color.red,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

