/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Commissioner', 'sans-serif']
    },

    extend: {
      colors: {
        "moderate-cyan": ' hsl(176, 50%, 47%)',
        "dark-cyan": 'hsl(176, 72%, 28%)',
        "Dark-gray": 'hsl(0, 0%, 48%)'
      }
    }
  },
  plugins: [],
}
