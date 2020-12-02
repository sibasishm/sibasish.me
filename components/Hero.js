import Link from 'next/link';

const Hero = () => (
  <div className="relative">
    <div className="hidden absolute inset-y-0 right-0 lg:block w-1/3 bg-primary">
      <svg
        className="absolute transform bottom-0 -translate-x-1/2 -translate-y-1/2"
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
    <section className="relative container mx-auto pt-20 md:pt-24 lg:pt-40 lg:min-h-screen lg:flex lg:space-x-40">
      <div className="sm:text-center lg:text-left">
        <h3 className="text-base sm:text-xl md:text-2xl font-light capitalize tracking-widest text-text-offset">
          Designer, developer, blogger
        </h3>
        <h1 className="mt-3 sm:mt-6 text-3xl tracking-tight leading-10 font-extrabold text-text sm:text-5xl sm:leading-none md:text-6xl whitespace-pre-line">
          I transform good ideas{`\n`} into <span className="text-primary">great products.</span>
        </h1>
        <div className="mt-6 lg:hidden">
          <img
            className="h-72 w-full object-cover sm:h-96"
            src="/static/images/sibasishm.jpg"
            alt="Sibasish Mohanty Smiling"
          />
        </div>
        <p className="mt-6 text-base text-text-offset sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deserunt illo in eius
          obcaecati pariatur nisi ipsa non exercitationem! Molestiae id dignissimos eligendi
          repellendus sed deleniti consequatur sequi itaque reprehenderit?
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
      <div className="hidden lg:block">
        <img
          className="h-96 w-84 object-cover"
          src="/static/images/sibasishm.jpg"
          alt="Sibasish Mohanty Smiling"
        />
      </div>
    </section>
  </div>
);

export default Hero;
