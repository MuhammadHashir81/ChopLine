/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'], // Replace 'Roboto' with your font name
        inter: ['Inter', 'sans-serif'], // Replace 'Roboto' with your font name
      },
    },
    
  },
  
  plugins: [],
}