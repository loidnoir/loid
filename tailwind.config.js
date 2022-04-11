module.exports = {
  theme: {
    fontFamily: {
      'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']
    },
    colors: {
      primary: '#1a2030',
      white: {
        100: '#f1f3fd',
        200: '#edf0fc',
        300: '#bec0ca',
      },
      intro: {
        1: '#b0413e',
        2: '#ffffc7',
        3: '#548687',
      }
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
}