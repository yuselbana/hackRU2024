/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPink:'#FDE6EF',
        importantRed:'#EF4444',
        offwhite:'#F4F4F4',
        darkGrey:'#222222'
      }
    },
  },
  plugins: [],
};
