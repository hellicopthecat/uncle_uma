/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        horse: "url('/public/img/main/horse_5.jpeg')",
      },
    },
  },
  plugins: [],
};
