/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        monoton:['Monoton', 'cursive'],
        poppins:['Poppins', 'sans-serif'],
        raleway:['Raleway','sans-serif']
      }
    }
  },
  plugins: [],
}
