/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '92vh': '92vh',
        '8vh': '8vh',
        'line': '3px',
        '94': '94%'
      },
      boxShadow: {
        'header': '0 0 4px #ccc'
      },
      backgroundColor: {
        'header': '#e0cd56',
        'prepage': '#e0cd56',
        'button': '#e0cd56'
      },
      textColor: {
        'button': '#e0cd56'
      }

    },
  },
  plugins: [],
}

