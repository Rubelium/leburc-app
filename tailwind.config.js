/* eslint-disable import/no-anonymous-default-export */
const nextui = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        default: "#d4d4d8",
        success: "#00ff89",
        warning: "#f5a524",
        danger: "#f31260"
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [nextui],
}