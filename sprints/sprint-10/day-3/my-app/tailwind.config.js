/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/index.js", "./src/App.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}","./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}
