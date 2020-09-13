import Link from 'next/link';

const BlogCard = ({ date, title, children }) => {
  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-text-offset">{date}</dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <h2 className="text-2xl leading-8 font-bold tracking-tight">
          <Link href={'/'}>
            <a className="hover:text-primary">{title}</a>
          </Link>
        </h2>
        <div className="text-text-offset sm:px-6 md:px-10 lg:px-0">{children}</div>
        <div className="text-base leading-6 font-medium">
          <Link href="/">
            <a className="text-primary hover:underline" aria-label={`Read ${title}`}>
              Read more &rarr;
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
