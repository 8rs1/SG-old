/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","js/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        forbtn: 'widthhl 800ms ease 1  normal'
      },
      keyframes: {
        widthhl: {
          '0%': {width: '0'},
          '25%': {width: '75%'},
          '50%': {width: '100%'},
          '75%': {width: '85%'},
          '100%': {width: '100%'},
        }
      }
    },
  },
  plugins: [],
}

