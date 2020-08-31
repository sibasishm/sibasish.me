import Link from 'next/link';

const Hero = () => (
  <div className="flex flex-col-reverse lg:flex-row lg:space-x-8">
    <div>
      <h4 className="text-md sm:text-xl md:text-2xl font-light capitalize tracking-widest text-text-offset">
        Designer, developer, blogger
      </h4>
      <h1 className="mt-3 sm:mt-5 text-3xl tracking-tight leading-10 font-extrabold text-text sm:text-5xl sm:leading-none md:text-6xl whitespace-pre-line">
        I transform good ideas{`\n`} into <span className="text-primary">great products.</span>
      </h1>
      <p className="mt-3 text-base text-text-offset sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:text-xl lg:mx-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque, porro est
        nostrum eum repudiandae, veniam incidunt soluta aut debitis, quis explicabo reiciendis ad
        velit iusto. Iste nam pariatur optio.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div>
          <Link href="/works">
            <a className="w-full flex items-center justify-center px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-background bg-primary hover:bg-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
              View projects
            </a>
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <Link href="/about">
            <a className="w-full flex items-center justify-center px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-primary border border-primary bg-background hover:border-primary-offset hover:text-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Read about me
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className="relative lg:w-2/5">
      <img
        className="h-72 w-full object-cover sm:h-84 md:h-96 lg:absolute lg:inset-y-0 lg:right-0"
        src="/static/images/sibasishm.jpg"
        alt="Sibasish Mohanty Smiling"
      />
    </div>
  </div>
);

export default Hero;
