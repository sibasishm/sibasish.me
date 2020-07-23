import Link from 'next/link';

import SVGProvider from './SVGProvider';

const Navbar = ({ theme, handleThemeChange }) => {
  return (
    <nav className="flex items-center justify-between p-4 md:px-8 lg:px-16 border-b-2 border-ternary bg-secondary">
      <Link href="/" passHref>
        <a className="font-bold tracking-wide md:text-2xl">Sibasish</a>
      </Link>
      <button
        className="flex items-center p-2 hover:shadow focus:outline-none focus:shadow-outline rounded"
        onClick={() =>
          handleThemeChange(
            theme === 'theme-light' ? 'theme-dark' : 'theme-light'
          )
        }
        type="button"
      >
        <SVGProvider />
        <span className="hidden md:inline ml-2">Dark Mode</span>
      </button>
    </nav>
  );
};

export default Navbar;
