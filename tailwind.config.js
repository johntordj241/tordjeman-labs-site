/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1a365d', // Custom blue for primary brand color
        },
      },
    },
  },
  plugins: [],
};