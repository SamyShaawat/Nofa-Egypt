/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': "url('../images/footer-bg.png')",
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

