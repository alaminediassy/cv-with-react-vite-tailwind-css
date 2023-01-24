/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'greyIsh' : '#f1f4f8',
        'cardShadow' : '#f7f8f9',
        'textColor' : '#252b36',
        'textColor1': '#252525',
        'orangeColor' : '#ea580c'
      }
    },
  },
  plugins: [],
}
