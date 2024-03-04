/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Marker: ["Permanent Marker", "cursive"],
        Ojuju: ["ojuju", "sans-serif"]
      },
    },
  },
  plugins: [],
}