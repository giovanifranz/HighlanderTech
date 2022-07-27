/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
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
        500: '#2EC5CE',
        400: '#D5FAFC',
        200: '#F3FEFF',
      },
      gray: colors.gray, // '#F9FEFF',
      black: '#18191F',
      transparent: 'transparent',
      green: '#00BFA5',
      red: '#FF6C6C',
    },
    fontFamily: {
      base: ['Inter', 'sans-serif'],
    },
  },
};
