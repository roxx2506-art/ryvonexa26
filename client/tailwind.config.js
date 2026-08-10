/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': {
          300: '#FFD700',
          400: '#D4AF37',
          500: '#8B6B00',
          950: '#0f0c05',
        },
        'purple': {
          400: '#FF2D2D',
          500: '#8B0000',
          600: '#5f0000',
        }
      },
      fontFamily: {
        'heading': ['Outfit', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
