/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        whiteScratches: ['White-Scratches', 'sans-serif'],
        gobold:['gobold','sans-serif'],
        bleeding: ['Bleeding Cowboys', 'sans-serif'],
        devanagari: ['Tiro', 'Times New Roman'],
      },
    },
  },
  plugins: [],
}

