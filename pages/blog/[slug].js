import fs from 'fs';
import path from 'path';

import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import tinytime from 'tinytime';

import Layout from '../../components/Layout';
import Title from '../../components/Title';

const root = process.cwd();
const dateFormat = tinytime('{dddd}, {MMMM} {DD}, {YYYY}');

const BlogPost = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource);

  return (
    <>
      <Layout>
        <article className="divide-y divide-border">
          <header className="p-6 pb-8">
            <div className="space-y-2 text-center">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base md:text-lg leading-6 font-medium text-text-offset">
                  <time dateTime={frontMatter.date}>
                    {dateFormat.render(new Date(frontMatter.date))}
                  </time>
                </dd>
              </dl>
              <Title>{frontMatter.title}</Title>
            </div>
          </header>
          <section className="container">
            <div className="prose lg:prose-lg xl:prose-xl mx-auto py-8">{content}</div>
          </section>
        </article>
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
