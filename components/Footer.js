const Footer = () => {
  return (
    <footer className="bg-primary px-2 py-12 mt-24 text-center">
      <div className="container text-background">
        <ul className="flex space-x-3 md:space-x-6 justify-center items-center text-sm md:text-base font-semibold">
          <a
            href="https://github.com/sibasishm"
            className="hover:underline focus:outline-none focus:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://stackoverflow.com/users/9128145/sibasishm"
            className="hover:underline focus:outline-none focus:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack Overflow
          </a>
          <a
            href="https://www.behance.net/Sibasish19"
            className="hover:underline focus:outline-none focus:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          <a
            href="https://twitter.com/smsibasish"
            className="hover:underline focus:outline-none focus:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </ul>
        <p className="text-base md:text-lg mt-6">Handcrafted by me &copy; 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
