/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'regal-white': '#F4F4F4',
      },
    },
  },
  plugins: [require("daisyui")],
}