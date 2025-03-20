/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2C5F9D',
        'accent-color': '#E6B980',
        'gradient-start': '#0A1128',
        'gradient-end': '#1C2541',
      }
    },
  },
  plugins: [],
} 