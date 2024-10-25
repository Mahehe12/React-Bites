// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alex-brush': ['"Alex Brush"', 'cursive'], // Define your custom font here
      },
      colors: {
        birthdayBg: '#efb3b5', // Custom background color
      },
    },
  },
  plugins: [],
}



