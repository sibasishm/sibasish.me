import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';

const root = process.cwd();

const Works = ({ projects }) => {
  return (
    <Layout>
      <div className="container">
        <section className="py-4 md:py-8 space-y-2 md:space-y-5 mt-4">
          <h1 className="font-extrabold tracking-tight text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Projects
          </h1>
          <p className="text-lg leading-7 text-text-offset">
            A collection of my projects that helped me learn and grow as a developer.
          </p>
        </section>
        <ul className="my-12 grid gap-12 grid-cols-1 md:grid-cols-2 md:px-6 xl:px-10">
          {projects.map(({ slug, frontMatter }) => (
            <li key={slug}>
              <ProjectCard {...frontMatter} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps = () => {
  const contentRoot = path.join(root, 'content', 'works');
  const projects = fs.readdirSync(contentRoot).map((fileName) => {
    const content = fs.readFileSync(path.join(contentRoot, fileName), 'utf-8');

    return {
      slug: fileName.replace(/\.mdx$/u, ''),
      frontMatter: matter(content).data
    };
  });

  return { props: { projects } };
};

export default Works;
