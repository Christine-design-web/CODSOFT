/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#141414",
        "blue": "#35752E",
        "purple": "#8A3FFC", // Example of adding a new color
       
      }
    },
  },
  plugins: [],
}

