import getBlogPreviews from '../hooks/getBlogPreviews';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';

const posts = getBlogPreviews();

const Blog = () => {
  return (
    <Layout>
      <div className="container">
        <section className="py-4 md:py-8 space-y-2 md:space-y-5">
          <h1 className="font-extrabold tracking-tight text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest articles
          </h1>
          <p className="text-lg leading-7 text-text-offset">
            All the tip and tricks related to web development and UI design along with latest
            updates and news about me.
          </p>
        </section>
        <ul className="divide-y divide-border">
          {posts.map(({ link, module: { default: Component, meta } }) => (
            <li key={link} className="py-12">
              <BlogCard />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Blog;
