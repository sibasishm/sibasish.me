const Section = ({ title, subtitle, children }) => (
  <section className="container sm:text-center lg:text-left">
    <h4 className="text-md sm:text-xl md:text-2xl font-light capitalize tracking-widest text-text-offset">
      {subtitle}
    </h4>
    <h1 className="mt-3 sm:mt-5 text-3xl tracking-tight leading-10 font-extrabold text-text sm:text-5xl sm:leading-none md:text-6xl whitespace-pre-line">
      {title}
    </h1>
    {children}
  </section>
);

export default Section;
