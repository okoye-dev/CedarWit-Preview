/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "300px", max: "799px" },
      ipad: "700px",
      md: { min: "800px", max: "1220px" },
      tab: { min: "1025px", max: "1220px" },
      lg: "1220px",
    },
    extend: {
      colors: {
        darkGreen: "#5E6737",
        darkerGreen: "#3F4525",
        lightGreen: "#AEB39B",
      },
      boxShadow: {
        custom: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
        custom2: "rgba(25, 25, 25, 0.1) 10px 7px 15px 0px",
        custom3: "rgba(25, 25, 25, 0.1) 0px 2px 25px 3px",
        customClose: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
      },
    },
  },
  plugins: [],
};
