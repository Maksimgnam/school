/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "news-header": '69%',
        "popup": "400px",
        "congrats-popup": "310px",
        "newsId-image": '700px',
        "news-card": '70%',
      },
      height: {
        'cnnline':"5vh",
        '88vh': '88vh',
        '10vh': '10vh',
        'line': '3px',
        '94': '94%',
        '1px': '3px',
        "popup": "76%",
        "search-list":"88%",
        'news-pdf':"100vh"


      },
      boxShadow: {
        'header': '0 0 4px #ccc',
        'popup': '0 0 4px #ccc'
      },
      backgroundColor: {
        'header': '#e0cd56',
        'prepage': '#e0cd56',
        'button': '#e0cd56',
        "dark":"rgba(0, 0 ,0 , 0.7)"
      },
      textColor: {
        'button': '#e0cd56'
      },
      minWidth: {
        "news-card": '65%',
        'links': '90%',
        '70': '55%'

      },
      maxWidth: {
        "news-card": '70%',
        "news-card-text": '65%',
        "prepage-contact": "300px"

      },
      minHeight: {
        'news': '60vh',
        'contacts': '55vh',
        '72vh': '82vh',
        '89vh': '98vh',
        '87vh': '87vh',
        '62vh': '62vh',
        '100vh': '100vh',
        '120vh': '120vh',
        '292vh': '292vh',
        "image": '440px',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },




    },
  },
  plugins: [],
}

