/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'enable-teal': '#09f781',
        'enable-blue': '#01628F',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'montserrat-condensed': ['"Montserrat Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
