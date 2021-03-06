import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title="About">
      <div className="container min-h-screen">
        <section className="py-4 pt-20 space-y-2 md:space-y-5 mt-4">
          <h1 className="font-extrabold tracking-tight text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About me
          </h1>
          <p className="text-lg leading-7 text-text-offset">
            I am bit more than a senior software engineer at Goodera, Bangalore.
          </p>
        </section>
        <article className="prose prose-lg mx-auto text-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolore voluptatem laudantium
          dolores amet voluptatibus id, numquam natus mollitia placeat fugiat eveniet cupiditate nam
          eum accusamus? Sit ea inventore perferendis. Earum vel fugiat ratione deserunt qui!
          Voluptatibus ratione beatae commodi omnis minima? Ullam obcaecati, culpa voluptate cumque
          aliquid at quaerat, dolorum modi odit possimus perferendis labore debitis saepe dolore
          cupiditate. Suscipit nostrum et reprehenderit vel natus quia sequi! Nostrum vel ea quis!
          Non eveniet excepturi odio voluptatem optio expedita corporis, a tempora quam iste vero
          repellendus dolorum earum corrupti voluptatum! Iste dolorem saepe aperiam veritatis beatae
          ratione pariatur asperiores illum obcaecati iure. Ratione adipisci maiores, accusantium
          itaque, culpa quisquam saepe porro amet quia dolore corporis. Maxime eaque harum
          voluptates tempora. Voluptate, natus illum id dolor quasi harum ipsa! Architecto repellat
          cum aut et veritatis necessitatibus facilis rem quam ullam in alias ad corrupti nisi id
          magnam, iste asperiores eius iure.
        </article>
      </div>
    </Layout>
  );
};

export default About;
