/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '15p':'15%',
        '75p':'75%',
        '84p':'84.666666%',
        '85p':'85%',
        
        '86p':'84.33333%',
        '90p': '90%',   // Example: 90% height
        '98p': '98%',   // Example: 90% height
      },
      width:{
        '78p':'78%',
        '82p':'80%',
      }
    },
  },
  plugins: [],
};

