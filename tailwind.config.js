/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#f48800",
        black: "#232323"
      },
      screens: {
        md: "600px",
        lg: "1024px",
        xl: "1240px",
      },
    },
  },
  plugins: [],
}

