const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    mode: 'all',
    content: ['./**/*.{js,mdx}', './next.config.js'],
    options: {
      whitelist: ['h1', 'h2', 'h3', 'p', 'blockquote', 'strong']
    }
  },
  theme: {
    extend: {
      spacing: {
        '2/3': '67%',
        '72': '18rem',
        '84': '26rem',
        '96': '30rem'
      },
      lineHeight: {
        '14': '3.5rem'
      },
      maxWidth: {
        'screen-2xl': '88rem'
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
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.text-offset'),
          'h1, h2, h3, blockquote, code, thead': {
            color: theme('colors.text')
          },
          'strong, a': {
            color: theme('colors.primary-offset')
          }
        }
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
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
  ],
  future: {
    removeDeprecatedGapUtilities: true
  }
};
