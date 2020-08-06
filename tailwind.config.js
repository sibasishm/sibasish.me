const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        '2/3': '67%'
      }
    },
    fontFamily: {
      sans: ['Jost var', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      background: 'var(--color-background)',
      'background-offset': 'var(--color-background-offset)',
      text: 'var(--color-text)',
      'text-offset': 'var(--color-text-offset)',
      border: 'var(--color-border)',
      primary: 'var(--color-primary)',
      'primary-offset': 'var(--color-primary-offset)'
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
