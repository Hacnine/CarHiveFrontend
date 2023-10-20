/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
      },
      
      fontFamily: {
        neon: ["Tilt Neon", "sans-serif"],
        young: ["Young Serif", "serif"],
      },
      colors: {
        "primary-black": "#222",
        "primary-green": "#1fc916",
        "light-green": "#1ecb15",
        "slate-blue":"#031b4e",
        "white-green": "#eafae8ff",
        "secondary-green": "#EDF3E0",
        "accent-green": "#fdc4a7ff",
        "light-gray": "#686868",
        "dark-gray": "#414141",
        "subtitle-gray": "#686868",
        "lightest-gray": "#F9F9F9",
        "accent-gray": "#E1E1E1",
        "secondary-gray": "#E4E4E4",
      },
      screens: {
        sm: "740px",
        md:"968px",
        lg: "1100px",
        rental_md: "968px",
        // xl: "1100px",
        "wide": "1440px",


      },
      
    },
  },
  variants:{
    extend: {
      display:['group-focus']
    },
  },
  plugins: [],
});

// /** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         kalam: ["Kalam", "cursive"],
//         raleway: ["Raleway", "sans-serif"],
//       },
//       colors: {
//         "primary-black": "#222",
//         "primary-green": "#94CA21",
//         "secondary-green": "#EDF3E0",
//         "accent-green": "#D3EB9F",
//         "light-gray": "#686868",
//         "dark-gray": "#414141",
//         "subtitle-gray": "#686868",
//         "lightest-gray": "#F9F9F9",
//         "accent-gray": "#E1E1E1",
//         "secondary-gray": "#E4E4E4",
//       },
//       screens: {
//         sm: "640px",
//         xl: "1140px",
//         lg: "900px",
//       },
//     },
//   },
//   plugins: [require("flowbite/plugin")],
// });
