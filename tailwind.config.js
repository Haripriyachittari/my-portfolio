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
      },
      keyframes:{
        wave: {
          "0%, 100%": {
              transform:"translateX(0%)",
          },
          "50%": {
            transform:"translateX(2px) rotate(30deg)",
          },

        },
      },
      animation:{
        wave:"wave 3s infinite both",
      },
    },
  },
  plugins: [],
}
