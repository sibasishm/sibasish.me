import Link from 'next/link';

const BlogCard = () => {
  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-text-offset">26-11-2021</dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <h2 className="text-2xl leading-8 font-bold tracking-tight">
          <Link href={'/'}>
            <a className="hover:text-primary">A brief introduction of Modern CSS frameworks</a>
          </Link>
        </h2>
        <div className="text-text-offset">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ea, similique deleniti
          aperiam a officia facere corporis? Tempore enim sapiente modi esse autem temporibus
          aliquam assumenda, officia iusto repellat porro? Similique vero odit, nobis minus dolore
          tempora doloribus ullam consequatur delectus molestias corrupti perspiciatis, veritatis
          obcaecati libero ducimus reprehenderit, porro eum necessitatibus. Non est commodi hic eos
          vero veniam quisquam? Officia corporis atque voluptatibus numquam repellat id, fugiat,
          possimus rem libero at voluptate sunt enim blanditiis excepturi nam suscipit fuga error?
          Officiis numquam aut repellendus tempora aliquid quaerat, laborum corporis. Earum,
          similique? Error quae delectus aperiam quo! Eius distinctio ipsam vel libero quas
          praesentium, quidem eum sit labore enim sed nulla, voluptatem soluta cum perferendis
          itaque maxime in pariatur dignissimos? Ipsa aspernatur doloribus velit ut ad numquam.
          Dolorem aliquam, delectus voluptatem consectetur fuga minima ea in culpa ex corrupti,
          vero, dolore explicabo voluptates ut et velit veniam minus! Voluptates, dolore!
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
