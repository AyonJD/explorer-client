/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f79f1f",
          secondary: "#130f40",
          accent: "#f7f7f7",
          neutral: "#F3F4F6",
          "base-100": "#ffff",
          info: "#98A8DD",
          success: "#27ae60",
          warning: "#130f40",
          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#F59E0B",
          secondary:"#ffff",
          accent: "#090A27",
          neutral: "#dfdfef",
          "base-100": "#090A27",
          info: "#98A8DD",
          success: "#27ae60",
          warning: "#130f40",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
