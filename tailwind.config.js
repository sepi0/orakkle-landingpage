module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo Black", "sans-serif"],
      },
      height: {
        '390px': '390px'
      },
      width: {
        '300px': '300px'
      },
      colors: {
        myBlue: '#4D3EFF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
