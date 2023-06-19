module.exports = {
  content: [
    './components/**/*.{html,js, css, jsx}',
    './pages/**/*.{html,js, css, jsx}',
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
