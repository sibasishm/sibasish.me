import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="container min-h-screen">
        <section className="py-4 md:py-8 space-y-2 md:space-y-5 mt-4">
          <h1 className="font-extrabold tracking-tight text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Conatct me
          </h1>
          <p className="text-lg leading-7 text-text-offset">
            Need a hand in your upcoming awesome project? Let's make it more awesome together.
          </p>
        </section>
        <form>
          <label htmlFor="email">Enter your email</label>
          <input type="email" name="email" id="email" />
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
