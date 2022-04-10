module.exports = {
  theme: {
    fontFamily: {
      'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']
    },
    colors: {
      gray: {
        400: '#494c58',
        500: '#1b1f2e',
        600: '#161925',
      },
      white: {
        400: '#f1f3fd',
        500: '#edf0fc',
        600: '#bec0ca',
      }
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
}