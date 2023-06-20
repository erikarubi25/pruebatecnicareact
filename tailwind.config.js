module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
},
colors: {
  'blue': '#1fb6ff',
  'pink': '#ff49db',
  'orange': '#ff7849',
  'green': '#13ce66',
  'gray-dark': '#273444',
  'gray': '#8492a6',
  'gray-light': '#d3dce6',
},
}
