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
      <Hero />
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
