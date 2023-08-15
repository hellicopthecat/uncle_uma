/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        main_1: "url('/public/img/main/main_1.jpg')",
        horse_4: "url('/public/img/main/horse_4.jpeg')",
        horse: "url('/public/img/main/horse_5.jpeg')",
      },
    },
  },
  plugins: [],
};
