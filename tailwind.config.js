/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ['Lexend', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        anise: {
          600: '#C8E671',
        },
      },
    },
  },
  plugins: [],
}
