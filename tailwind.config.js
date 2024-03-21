/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.php"
  ],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : 'Poppins, sans-serif',
        'rubik' : 'Rubik',
        'montserrat' : 'Montserrat, sans-serif',
        'futura' : 'Futura, sans-serif'

      },
      colors : {
        'dark-white' : '#F3F8FF',
        'pink' : '#E26EE5',
        'purple' : '#7E30E1',
        'dark-purple' : '#49108B'
      }
    },
  },
  plugins: [],
}

