import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import Link from 'next/link';

import Layout from '../components/Layout';
import Section from '../components/Section';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';

const root = process.cwd();

const Index = ({ blogs, works }) => {
  return (
    <Layout>
      <div className="relative flex lg:min-h-screen items-center">
        <div className="hidden absolute inset-y-0 right-0 lg:block w-1/3 bg-primary">
          <svg
            className="absolute transform bottom-0 -translate-x-1/2"
            width="350"
            height="400"
            fill="none"
            viewBox="0 0 350 400"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="3"
                  height="3"
                  className="text-text-offset"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="350" height="400" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
        <Section
          title={
            <>
              I transform good ideas{`\n`} into{' '}
              <span className="text-primary">great products.</span>
            </>
          }
          subtitle="Designer, developer, blogger"
        >
          <Hero />
        </Section>
      </div>
      <Section
        title={
          <>
            All creative works,{`\n`}
            <span className="text-primary">selected projects.</span>
          </>
        }
        subtitle="Portfolio"
      >
        <ul className="my-12 grid gap-12 grid-cols-1 md:grid-cols-2 md:px-6 xl:px-10">
          {works.map(({ slug, frontMatter }) => (
            <li key={slug}>
              <ProjectCard {...frontMatter} />
            </li>
          ))}
        </ul>
        <Link href="/works">
          <a className="lg:float-right px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-background bg-primary hover:bg-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Explore all &rarr;
          </a>
        </Link>
      </Section>
      <Section
        title={
          <>
            What's new?{`\n`} My <span className="text-primary">blog and news.</span>
          </>
        }
        subtitle="Articles"
      >
        <ul className="divide-y divide-border">
          {blogs.map(({ slug, frontMatter }) => (
            <li key={slug} className="py-12 md:px-6 xl:px-10">
              <BlogCard date={frontMatter.date} link={slug} title={frontMatter.title}>
                {frontMatter.summary}
              </BlogCard>
            </li>
          ))}
        </ul>
        <Link href="/blog">
          <a className="lg:float-right px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-background bg-primary hover:bg-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Read all &rarr;
          </a>
        </Link>
      </Section>
    </Layout>
  );
};

export const getStaticProps = () => {
  const blogsRoot = path.join(root, 'content', 'blogs');
  const worksRoot = path.join(root, 'content', 'works');

  const blogs = fs.readdirSync(blogsRoot).map((fileName) => {
    const content = fs.readFileSync(path.join(blogsRoot, fileName), 'utf-8');

    return {
      slug: fileName.replace(/\.mdx$/u, ''),
      frontMatter: matter(content).data
    };
  });

  const works = fs
    .readdirSync(worksRoot)
    .map((fileName) => {
      const content = fs.readFileSync(path.join(worksRoot, fileName), 'utf-8');

      return {
        slug: fileName.replace(/\.mdx$/u, ''),
        frontMatter: matter(content).data
      };
    })
    .filter(({ frontMatter }) => frontMatter.featured);

  return {
    props: {
      blogs,
      works
    }
  };
};

export default Index;
