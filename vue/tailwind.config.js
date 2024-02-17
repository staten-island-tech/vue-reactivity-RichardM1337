/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  media: true,
  theme: {
    extend: {}, // extends default theme
    fontFamily: {
      display: ['"Kode Mono"', "sans-serif"], //fonts with spaces have commas suirrounding it
    },
  },
  plugins: [],
};
