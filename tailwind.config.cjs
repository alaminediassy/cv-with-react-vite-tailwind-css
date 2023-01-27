/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'orangeColor' : '#ea580c',
        'orangeLeger': '#F79F7C',
        'formColor' : '#013747'
      }
    },
  },
  plugins: [],
}
