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
        <div className="text-text-offset sm:px-6 md:px-10 lg:px-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ea, similique deleniti
          aperiam a officia facere corporis? Tempore enim sapiente modi esse autem temporibus
          aliquam assumenda, officia iusto repellat porro?
        </div>
        <div className="text-base leading-6 font-medium">
          <Link href="/">
            <a className="text-primary hover:underline" aria-label="Read title">
              Read more &rarr;
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
