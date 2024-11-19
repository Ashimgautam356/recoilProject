/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:["'League Spartan'", "sans-serif"]
      },
      colors:{
        primaryColor: 'rgb(300,20,10)'
      }
    },
  },
  plugins: [],
}

