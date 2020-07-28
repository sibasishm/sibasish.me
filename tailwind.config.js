const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Jost var', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      ternary: 'var(--color-ternary)',
      text: 'var(--color-text)',
      hover: 'var(--color-hover)',
      'accent-primary': 'var(--color-accent-primary)',
      'accent-secondary': 'var(--color-accent-secondary)'
    }
  },
  variants: {},
  plugins: [
    ({ addBase }) => {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Jost var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/static/fonts/Jost-roman.var-latin.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Jost var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/static/fonts/Jost-italic.var-latin.woff2") format("woff2")'
          }
        }
      ]);
    }
  ]
};
