/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#31485e",
          "secondary": "#7eabe7",
          "accent": "#f05656",
          "neutral": "#030911",
          "base-100": "#f2f7fd", //Base color of page, used for blank backgrounds
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff6f6f",
        }
      }
    ],
  },
}

