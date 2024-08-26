/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(-10px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
      screens: {
        'sm-max': { 'max': '765px' },
        // => @media (max-width: 639px) 

        'md-max': { 'max': '767px' },
        // => @media (max-width: 767px) 

        'lg-max': { 'max': '1023px' },
        // => @media (max-width: 1023px) 

        'xl-max': { 'max': '1279px' },
        // => @media (max-width: 1279px) 

        '2xl-max': { 'max': '1535px' },
        // => @media (max-width: 1535px) 

        'sm-min': { 'min': '640px' },
        // => @media (min-width: 640px) 

        'md-min': { 'min': '768px' },
        // => @media (min-width: 768px) 
        'lg-min': { 'min': '1024px' },
        // => @media (min-width: 1024px) 

        'xl-min': { 'min': '1280px' },
        // => @media (min-width: 1280px) 

        '2xl-min': { 'min': '1536px' },
        // => @media (min-width: 1536px) 
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "primary": "#17588E",
        "secondary": "#7ECAFD",
        "black": "#000000"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem'
        },
      }

    },

  },
  plugins: [],
}

