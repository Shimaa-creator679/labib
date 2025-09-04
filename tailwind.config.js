/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        boxShadow: {
    custom: '0px 5px 0 0 rgba(167, 72, 28, 1)',
  }
    },
  },
  plugins: [  require('flowbite/plugin')],
}
