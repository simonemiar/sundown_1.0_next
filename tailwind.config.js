/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { sans: ["Helvetica Neue"] },
    extend: { colors: { primary: "#BA2329", secondary: "#007ddb" } },
  },
  plugins: [],
};
