const Section = ({ title, subtitle, children }) => (
  <section className="container py-10 lg:py-32 sm:text-center lg:text-left lg:-mt-16">
    <h3 className="text-base sm:text-xl md:text-2xl font-light capitalize tracking-widest text-text-offset">
      {subtitle}
    </h3>
    <h1 className="mt-3 sm:mt-5 text-3xl tracking-tight leading-10 font-extrabold text-text sm:text-5xl sm:leading-none md:text-6xl whitespace-pre-line">
      {title}
    </h1>
    {children}
  </section>
);

export default Section;
