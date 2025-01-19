/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bleeding: ['Bleeding Cowboys', 'sans-serif'],
        devanagari: ['Tiro', 'Times New Roman'],
      },
    },
  },
  plugins: [],
}

