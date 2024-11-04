/** @type {import('tailwindcss').Config} */
export default {
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
