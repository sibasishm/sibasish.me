const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    mode: 'all',
    content: ['./**/*.{js,mdx}', './next.config.js']
    /*
     * options: {
     *   extractors: [
     *     {
     *       extensions: ['mdx'],
     *       extractor: (content) => {
     *         content = mdx.sync(content);
     */

    /*
     *         // Capture as liberally as possible, including things like `h-(screen-1.5)`
     *         const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
     */

    /*
     *         // Capture classes within other delimiters like .block(class="w-1/2") in Pug
     *         const innerMatches =
     *           content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || [];
     */

    /*
     *         return broadMatches.concat(innerMatches);
     *       }
     *     }
     *   ]
     * }
     */
  },
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
  ]
};
