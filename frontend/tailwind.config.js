/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eac: {
          emerald: '#1B4332',
          gold: '#D4A017',
          sunset: '#E76F51',
        }
      }
    },
  },
  plugins: [],
}
