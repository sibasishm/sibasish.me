import fs from 'fs';
import path from 'path';

import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';

import Layout from '../../components/Layout';

const root = process.cwd();

const BlogPost = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource);

  return (
    <>
      <Layout>
        <h1>{frontMatter.title}</h1>
        {content}
      </Layout>
    </>
  );
};

export const getStaticPaths = () => ({
  fallback: false,
  paths: fs
    .readdirSync(path.join(root, 'content', 'blogs'))
    .map((fileName) => ({ params: { slug: fileName.replace(/\.mdx$/u, '') } }))
});

export const getStaticProps = async ({ params }) => {
  const source = fs.readFileSync(path.join(root, 'content', 'blogs', `${params.slug}.mdx`), 'utf8');
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content);

  return {
    props: {
      mdxSource,
      frontMatter: data
    }
  };
};

export default BlogPost;
