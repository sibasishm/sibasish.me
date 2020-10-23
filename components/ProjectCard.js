const ProjectCard = ({ title, link, description }) => (
  <article>
    <div className="relative pb-2/3">
      <img
        src="/static/images/dummy.jpg"
        alt="space and stars"
        className="absolute h-full w-full object-cover rounded-lg shadow-md"
      />
    </div>
    <div className="relative px-4 md:px-8 -mt-20">
      <div className="bg-background-offset p-4 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold truncate">
          <a href={link} className="hover:text-primary">
            {title}
          </a>
        </h2>
        <p className="text-text-offset mt-1">{description}</p>
        <ul className="mt-4 text-sm flex justify-star sm:justify-center lg:justify-start space-x-4">
          <li className="capitalize my-1">
            <span className="font-semibold border border-border p-1 px-2 rounded-full">React</span>
          </li>
          <li className="capitalize my-1">
            <span className="font-semibold border border-border p-1 px-2 rounded-full">
              Node.js
            </span>
          </li>
          <li className="capitalize my-1">
            <span className="font-semibold border border-border p-1 px-2 rounded-full">
              MongoDB
            </span>
          </li>
        </ul>
      </div>
    </div>
  </article>
);

export default ProjectCard;
