const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      purple: {
        500: '#753BBD',
        200: '#B79CDE',
        100: '#E6D9FA',
      },
      cyan: {
        500: '#307a7f',
        400: '#D5FAFC',
        200: '#F3FEFF',
      },
      gray: colors.gray,
      black: '#18191F',
      transparent: 'transparent',
    },
    fontFamily: {
      base: ['Inter', 'sans-serif'],
    },
  },
};
