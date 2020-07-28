import Link from 'next/link';

import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="mt-10 sm:mt-12 lg:mt-20 xl:mt-32 sm:text-center lg:text-left">
        <h4 className="text-md sm:text-xl md:text-2xl font-light capitalize tracking-widest">
          Designer, developer, blogger
        </h4>
        <h2 className="mt-3 sm:mt-5 text-3xl tracking-tight leading-10 font-extrabold text-text sm:text-5xl sm:leading-none md:text-6xl whitespace-pre-line">
          I transform good ideas{`\n`} into
          <span className="text-accent-primary"> great products.</span>
        </h2>
        <p className="mt-3 text-base text-ternary sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque, porro est
          nostrum eum repudiandae, veniam incidunt soluta aut debitis, quis explicabo reiciendis ad
          velit iusto. Iste nam pariatur optio.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div>
            <Link href="/works">
              <a className="w-full flex items-center justify-center px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-primary bg-accent-primary hover:bg-accent-secondary focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
                View projects
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4">
            <Link href="/about">
              <a className=" w-full flex items-center justify-center px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize bg-hover hover:bg-accent-secondary focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Read about me
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
