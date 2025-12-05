/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme') 

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}", 
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'laila': ['Laila', ...defaultTheme.fontFamily.serif],      
      },
    },
  },
  
  plugins: [],
};