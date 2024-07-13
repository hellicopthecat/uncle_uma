/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        main_1: "url('/img/main/main_1.jpg')",
        horse_4: "url('/img/main/horse_4.jpeg')",
        horse: "url('/img/main/horse_5.jpeg')",
      },
    },
  },
  plugins: [],
};
