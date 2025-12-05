
/** @type {import('tailwindcss').Config} */
const config = {
  
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { // Contact Page Orange
          DEFAULT: '#ff5722', 
          dark: '#e64a19',
        },
      },
    },
  },
  plugins: [],
};

export default config;