/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d9e2ee',
          200: '#b3c5dd',
          300: '#8aa6c6',
          400: '#5f82ab',
          500: '#3f6590',
          600: '#2d4f75',
          700: '#1f3a5c',
          800: '#162a44',
          900: '#0f1e33',
          950: '#0a1526',
        },
        electric: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcdfff',
          300: '#8ecdff',
          400: '#59b2ff',
          500: '#3391fb',
          600: '#1d72f0',
          700: '#165add',
          800: '#184ab2',
          900: '#1a418c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
