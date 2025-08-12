/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#283723",
        "secondary-color": "#C2976B",
        "tertiary-color": "#C9C3B1",
        "neblina-color": "#cdc4b2",
        "info-background-color": "#f4f7f3"
      }
    },
  },
  plugins: [],
}
