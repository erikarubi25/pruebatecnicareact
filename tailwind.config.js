module.exports = {
  content: [
    './components/**/*.{html,jsx}',
    './pages/**/*.{html,jsx}',
    './index.html',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
    },
  },
  variants: {},
  plugins: [],
}
}
