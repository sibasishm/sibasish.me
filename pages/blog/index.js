import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import Layout from '../../components/Layout';
import BlogCard from '../../components/BlogCard';

const root = process.cwd();

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div className="container">
        <section className="py-4 pt-20 space-y-2 md:space-y-5 mt-4">
          <h1 className="font-extrabold tracking-tight text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest articles
          </h1>
          <p className="text-lg leading-7 text-text-offset">
            All the tip and tricks related to web development and UI design along with latest
            updates and news about me.
          </p>
        </section>
        <ul className="divide-y divide-border">
          {posts.map(({ slug, frontMatter }) => (
            <li key={slug} className="py-12 md:px-6 xl:px-10">
              <BlogCard date={frontMatter.date} link={slug} title={frontMatter.title}>
                {frontMatter.summary}
              </BlogCard>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps = () => {
  const contentRoot = path.join(root, 'content', 'blogs');
  const posts = fs.readdirSync(contentRoot).map((fileName) => {
    const content = fs.readFileSync(path.join(contentRoot, fileName), 'utf-8');

    return {
      slug: fileName.replace(/\.mdx$/u, ''),
      frontMatter: matter(content).data
    };
  });

  return { props: { posts } };
};

export default Blog;
