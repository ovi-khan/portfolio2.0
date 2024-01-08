/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}

