export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
/* nested css is impossible as vue detects tailwind.config.js and automates it before the postcss, which shouldn't happen */
