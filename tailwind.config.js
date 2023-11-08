/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prime: '#ffcc33',
        grey: '#A7A2A2',
        lgrey: 'rgba(244,244,244,0.07)',
        ablue: '#3d8dfc',
        apurple: '#B07EF6',
        dpurple: '#5B57F4'
      }
    }
  },
  plugins: []
}

