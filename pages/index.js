import Layout from '../components/Layout';
import Section from '../components/Section';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';

const Title = () => (
  <>
    I transform good ideas{`\n`} into <span className="text-primary">great products.</span>
  </>
);

const Index = () => {
  return (
    <Layout>
      <Section title={<Title />} subtitle="Designer, developer, blogger">
        <Hero />
      </Section>
      <Section title="Personal projects" subtitle="Most popular">
        <ul className="mt-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
          <li>
            <ProjectCard />
          </li>
        </ul>
      </Section>
      <Section title="Articles" subtitle="Latest">
        <ul className="divide-y divide-border">
          <li className="py-12">
            <BlogCard />
          </li>
          <li className="py-12">
            <BlogCard />
          </li>
          <li className="py-12">
            <BlogCard />
          </li>
          <li className="py-12">
            <BlogCard />
          </li>
          <li className="py-12">
            <BlogCard />
          </li>
        </ul>
      </Section>
    </Layout>
  );
};

export default Index;
