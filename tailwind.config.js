module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile': '268px'
      },
      colors: {
        'gry': '#2F3844',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
