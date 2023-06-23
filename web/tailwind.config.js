/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#ededed',
        primary: '#c41919',
        secundary: '#202828',
      }
    },
  },
  plugins: [],
})

