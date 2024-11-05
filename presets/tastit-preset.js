// This is the tailwind preset for Tastit applications.

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        AvenirNext: ['Avenir Next', 'sans-serif'],
        Noto: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        brand: '#FA7268',
      },
    },
  },
  plugins: [],
};
