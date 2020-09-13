const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/u
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});
