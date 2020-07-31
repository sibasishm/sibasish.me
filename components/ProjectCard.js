const ProjectCard = () => (
  <article className="border border-border hover:border-primary shadow-md rounded-lg overflow-hidden">
    <div className="relative bg-border pb-3/5">
      <img
        src="/static/images/dummy.jpg"
        alt="space and stars"
        className="absolute h-full w-full object-cover"
      />
    </div>
    <div className="bg-background-offset p-4 tracking-wide">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-text-offset">26-11-2021</dd>
      </dl>
      <h2 className="mt-2 text-2xl font-bold truncate">Dummy Project</h2>
      <ul className="mt-2 text-sm">
        <li className="capitalize my-1">
          <span className="font-semibold">Something: </span>
          <span>Test</span>
        </li>
        <li className="capitalize my-1">
          <span className="font-semibold">Something: </span>
          <span>Test</span>
        </li>
        <li className="capitalize my-1">
          <span className="font-semibold">Something: </span>
          <span>Test</span>
        </li>
      </ul>
    </div>
  </article>
);

export default ProjectCard;
