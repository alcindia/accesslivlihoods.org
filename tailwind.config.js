/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"
];
export const theme = {
  extend: {
    zIndex: {
      '200': '200',
    },
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif'],
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
  darkMode: "class"
};



// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require("tw-elements/dist/plugin.cjs")
//   ],

//   darkMode: "class"
// }),