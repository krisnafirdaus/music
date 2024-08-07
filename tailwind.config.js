// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: 'rgba(28, 28, 45, 0.9)',
      },
    },
  },
  plugins: [],
}