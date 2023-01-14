const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--inter-font)', ...fontFamily.sans],
      },
    },
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
}
