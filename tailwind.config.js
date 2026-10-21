module.exports = {
  content: ['./index.html', './pages/**/*.html', './components/**/*.js', './script.js'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f291e',
        'brand-green': '#1b4d3e',
        'brand-earth': '#8c6b4a',
        'brand-light': '#f4f1ea',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
