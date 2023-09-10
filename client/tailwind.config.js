/** @type {import('tailwindcss').Config} */
const withMt = require ("@material-tailwind/react/utils/withMT")

module.exports = withMt ({
  content: [
    "./src/**/*.{tsx,jsx,js,html}",
    "./public/**/*.{tsx,jsx,js,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});