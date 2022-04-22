const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
