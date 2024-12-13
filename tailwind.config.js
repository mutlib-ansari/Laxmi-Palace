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
        fraunces: ['Fraunces', 'sans-serif'], // Add custom font family
      },
      colors: {
        customBeige: '#FBF6E8',
        customBrown: '#A35E4E',
    },
    },
  },
  plugins: [],
}
