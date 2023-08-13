/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#00B26A',
          200: '#009F5E',
        },
        secondary: {
          100: '#A9A9A9',
          200: '#7E7E7E',
          300: '#515151',
        },
        light: {
          100: '#F5F5F5',
        }
      }
    },
  },
  plugins: [],
}

