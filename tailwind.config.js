/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        CustomGrayH: '#1F2024', // Used in writing Heading of Hero page and Intro page ka bold line
        CustomGrayP: '#494A50' , //used to write p of hero and heading of intro
        CustomGrayD: '#71727A',//for wrting description of intro
        CustomBlue:  '#006FFD'


      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },
  
  plugins: [],
}