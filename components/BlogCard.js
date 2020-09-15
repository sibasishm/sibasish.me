import tinytime from 'tinytime';
import Link from 'next/link';

const dateFormat = tinytime('{MMMM} {DD}, {YYYY}');

const BlogCard = ({ link, date, title, children }) => {
  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-text-offset">
          {dateFormat.render(new Date(date))}
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <h2 className="text-2xl leading-8 font-bold tracking-tight">
          <Link href="/blog/[link]" as={`/blog/${link}`}>
            <a className="hover:text-primary">{title}</a>
          </Link>
        </h2>
        <div className="text-text-offset prose max-w-none">{children}</div>
        <div className="text-base leading-6 font-medium">
          <Link href="/blog/[link]" as={`/blog/${link}`}>
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
