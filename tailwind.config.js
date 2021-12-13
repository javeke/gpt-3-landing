module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'manrope':['Manrope', 'san-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
