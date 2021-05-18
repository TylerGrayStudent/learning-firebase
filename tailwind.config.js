const mode = process.env.TAILWIND_MODE ? 'jit' : 'aot';

module.exports = {
  mode: mode,
  purge: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
