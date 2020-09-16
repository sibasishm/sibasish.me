import Link from 'next/link';

import Layout from '../components/Layout';
import Section from '../components/Section';

const Error = () => (
  <Layout title="Not Found">
    <Section
      title={
        <>
          Looks like{`\n`}you <span className="text-primary">got lost</span>.
        </>
      }
      subtitle="404 - page not found"
    >
      <p className="mt-4 text-base text-text-offset sm:mt-8 sm:text-lg sm:max-w-2xl sm:mx-auto md:text-xl lg:mx-0">
        It seems you have found something that used to exist, or you spelled something wrong. I am
        guessing it's the spelling. Can you double check that URL?
      </p>
      <Link href="/">
        <a className="mt-6 text-sm inline-block sm:mt-12 px-8 py-3 rounded-md shadow sm:text-base font-medium tracking-wide capitalize text-background bg-primary hover:bg-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
          &larr; Return home
        </a>
      </Link>
    </Section>
  </Layout>
);

export default Error;
