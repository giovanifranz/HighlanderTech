const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
    backgroundImage: {
      entremalhas: "url('/portfolio/entremalhas.webp')",
      kyra: "url('/portfolio/kyra.webp')",
      oriental: "url('/portfolio/oriental.webp')",
    },
  },
}
