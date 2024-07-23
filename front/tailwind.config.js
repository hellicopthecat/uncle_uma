/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        main_1: "url('/img/main/main_1.jpg')",
        main_2: "url('/img/main/main_2.jpg')",
        main_3: "url('/img/main/main_3.jpg')",
        horse_4: "url('/img/main/horse_4.jpeg')",
        horse: "url('/img/main/horse_5.jpeg')",
      },
      colors: {
        seoul: "#255097",
        busan: "#BD1C13",
        jeju: "#509619",
      },
      fontFamily: {
        nanum: [
          "Nanum Gothic",
          "sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
        ],
      },
      animation: {
        showRight: "showRightText 0.7s ease-in-out",
        showLeft: "showLeftText 0.7s ease-in-out",
        chaksunSlide: "chaksunSlide infinite 30s linear forwards",
        chaksunSlideXl: "chaksunSlideXl infinite 30s linear forwards",
      },
      keyframes: {
        showRightText: {
          "0%": {transform: "translateX(-1000%)"},
          "100%": {transform: "translateX(0)"},
        },
        showLeftText: {
          "0%": {transform: "translateX(1000%)"},
          "100%": {transform: "translateX(0)"},
        },
        chaksunSlide: {
          "0%": {
            transform: "translateX(110%)",
            opacity: 0,
          },
          "5%": {
            opacity: 1,
          },
          "95%": {
            opacity: 1,
          },
          "100% ": {
            transform: "translateX(-110%)",
            opacity: 0,
          },
        },
        chaksunSlideXl: {
          "0%": {
            transform: "translateX(130%)",
            opacity: 0,
          },
          "5%": {
            opacity: 1,
          },
          "95%": {
            opacity: 1,
          },
          "100% ": {
            transform: "translateX(-110%)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
