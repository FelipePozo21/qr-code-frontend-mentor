/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './index.html',
    './src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      md: '1440px'
    },
    fontFamily: {
      'outfit' : ['Outfit', 'sans-serif']
    },
    colors: {
      'White': 'hsl(0, 0%, 100%)',
      'Light-gray': 'hsl(212, 45%, 89%)',
      'Grayish-blue': 'hsl(220, 15%, 55%)',
      'Dark-blue': 'hsl(218, 44%, 22%)'
    },
    extend: {},
  },
  plugins: [],
}