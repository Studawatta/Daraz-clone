/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navbarBackground: '#ff5e00',
      },
      keyframes: {
        next1: {
          '0%': { left: '0%' },
          '100%': { left: '-100%' },
        },
        next2: {
          '0%': { left: '100%' },
          '100%': { left: '0%' },
        },
        // pulse: {
        //   "0%,100%": { opacity: "1" },
        //   "50%": { opacity: "0.2" },
        // },
      },
      animation: {
        moveRight1: 'next1 1s ease-in-out forwards',
        moveRight2: 'next2 1s ease-in-out forwards',
      },
    },
  },

  plugins: [],
};
