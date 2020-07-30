import Layout from '../components/Layout';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

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
        <Projects />
      </Section>
      <Section title="Articles" subtitle="Latest">
        <Projects />
      </Section>
    </Layout>
  );
};

export default Index;
