const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Jost', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      ternary: 'var(--color-ternary)',
      quaternary: 'var(--color-quaternary)'
    }
  },
  variants: {},
  plugins: [
    ({ addBase }) => {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Jost',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/static/fonts/Jost-roman.var-latin.woff") format("woff")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Jost',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/static/fonts/Jost-italic.var-latin.woff") format("woff")'
          }
        }
      ]);
    }
  ]
};
