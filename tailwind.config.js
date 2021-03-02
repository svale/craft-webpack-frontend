// tailwind.config.js
// See more information about this file at https://tailwindcss.com/docs/installation#create-your-configuration-file

module.exports = {
  purge: {
    // enabled: true, // Turn on to purge also in dev
    content: [
      './src/**/*.js',
      './templates/**/*.twig',
      './templates/**/*.html'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
