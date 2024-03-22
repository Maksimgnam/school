/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh',
        '10vh': '10vh',
        'line': '3px',
        '94': '94%',
        '1px': '3px',


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
      },
      minWidth: {
        'links': '90%',
        '70': '55%'

      },
      minHeight: {
        '72vh': '82vh',
        '89vh': '98vh',
        '87vh': '87vh',
        '62vh': '62vh',
        '120vh': '120vh',
        '292vh': '292vh'
      }




    },
  },
  plugins: [],
}

