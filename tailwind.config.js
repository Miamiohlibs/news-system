/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily:{
      //   'proxima-nova': ['Inter', 'sans-serif'],
      //   'freight-text-pro': ['Satoshi', 'sans-serif'],
      //   'freight-display-pro': ['Satoshi', 'sans-serif'],
      // },
      colors: {
        'miami-red-primary': '#C41230',
        'miami-red-secondary': '#AD102A',
        'miami-tan-dark': '#CCCAB8',
        'miami-tan-light': '#EDECE2',
        'miami-gold': '#EFDB72',
        'miami-warm-white': '#FAF9F7',
      }
    },
  },
  plugins: [],
}
