/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'my-color-dark': '#bc2567',
        'my-color-medium': '#bf3973',
        'my-color-light': '#c7618d',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

