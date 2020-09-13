const importAll = (ctx) =>
  ctx.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\.mdx$/u, ''),
    module: ctx(fileName)
  }));

const sortDateDesc = (a, b) => {
  if (a > b) return -1;

  if (a < b) return 1;

  return 0;
};

// https://stackoverflow.com/questions/54059179/what-is-require-context
const getBlogPreviews = () =>
  importAll(require.context('../pages/blog', true, /\.mdx$/u)).sort((a, b) =>
    sortDateDesc(a.module.meta.date, b.module.meta.date)
  );

export default getBlogPreviews;
