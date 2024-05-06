/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100vh)' }, // Start below the screen
          '100%': { transform: 'translateY(0)' },   // End at its normal position
        },
        fadeInout:{
          '100%': { opacity: 0 },
          '0%':{opacity:0},
  '50% ':{ opacity: 1 }
        }
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out forwards', // Define the animation speed and timing
        fadeInout:'fadeInout 3s infinite'
      },

    },
  },
  plugins: [],
}

