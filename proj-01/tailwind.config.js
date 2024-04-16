/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          "0%": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(-8px)",
          },
          "75%": {
            transform: "translateY(2px)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        }
      },
      animation: {
        floatUp: "floatUp 400ms ease-in-out",
      },
      colors: {
        primary:"#222222",
        secondary:  "#000000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

