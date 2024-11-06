/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], //content is any file like index.html current dir so we can apply tailwind
  theme: {
    //src any directory apply tailwind
    extend: {},
  },
  plugins: [],
}
