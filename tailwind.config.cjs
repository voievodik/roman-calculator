/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        box: "#264653",
        button: "#c2c5aa",
        main: "#2a9d8f",
        black_op: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      sm: "769px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    letterSpacing: {
      tight: '-0.01em',
      tighter: '-0.02em',
      tightest: '-0.03em',
    }
  },
  plugins: [],
};