import Link from 'next/link';

import Layout from '../components/Layout';
import Section from '../components/Section';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';

const Index = () => {
  return (
    <Layout>
      <Section
        title={
          <>
            I transform good ideas{`\n`} into <span className="text-primary">great products.</span>
          </>
        }
        subtitle="Designer, developer, blogger"
      >
        <Hero />
      </Section>
      <Section
        title={
          <>
            All creative works,{`\n`}
            <span className="text-primary">selected projects.</span>
          </>
        }
        subtitle="Portfolio"
      >
        <div className="my-12 grid gap-12 grid-cols-1 md:grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <Link href="/works">
          <a className="lg:float-right px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-background bg-primary hover:bg-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Explore more &rarr;
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
        <Link href="/works">
          <a className="lg:float-right px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-background bg-primary hover:bg-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
            Read more &rarr;
          </a>
        </Link>
      </Section>
    </Layout>
  );
};

export default Index;
