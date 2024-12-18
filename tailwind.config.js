// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        forum: ['Forum', 'sans-serif'],
      },
      colors: {
        customBeige: '#FBF6E8',
        customBrown: '#A35E4E',
      },
      animation: {
        bounceSmooth: 'bounce 5s infinite',
        bounceHigh: 'bounceHigh 2s infinite', // New custom bounce
        rotateRight: 'rotateRight 6s linear infinite',
      },
      keyframes: {
        bounceHigh: {
          '0%, 100%': {
            transform: 'translateY(10px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-10px)', // Higher bounce height
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        rotateRight: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },


    },
  },
  plugins: [],
}
