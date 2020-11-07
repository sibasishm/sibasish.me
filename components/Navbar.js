import React from 'react';
import Link from 'next/link';

import links from '../lib/links';

import SVGProvider from './SVGProvider';
import Logo from './Logo';

const Navbar = ({ theme, handleThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="container">
      <div className="relative flex justify-between items-center h-16">
        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
          <button
            className="inline-flex items-center p-2 rounded-md hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <SVGProvider name={isMenuOpen ? 'menu-open' : 'menu-closed'} />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <div className="flex-shrink-0">
            <Link href="/">
              <a
                aria-label="Sibasish Mohanty"
                className="inline-flex items-center p-2 space-x-2 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                <Logo className="h-8 w-8" theme={theme} />
                <span className="hidden md:block text-lg font-semibold">Sibasish Mohanty</span>
              </a>
            </Link>
          </div>
          <div className="hidden md:flex md:ml-4">
            {links.map(({ name, href }) => (
              <Link key={name} href={href}>
                <a className="ml-4 px-3 py-2 rounded-md font-medium leading-5 text-text-offset hover:text-text hover:bg-background focus:outline-none focus:text-text focus:bg-background transition duration-150 ease-in-out">
                  {name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <button
          className="inline-flex items-center p-2 rounded-md hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          onClick={() => handleThemeChange(theme === 'theme-light' ? 'theme-dark' : 'theme-light')}
          type="button"
          aria-label="Theme Toggle"
        >
          <SVGProvider name={theme === 'theme-light' ? 'sun' : 'moon'} />
          <span className="hidden lg:inline ml-2">{`${
            theme === 'theme-light' ? 'Light' : 'Dark'
          } Mode`}</span>
        </button>
      </div>
      <div className={`p-2 pb-3 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a className="block mt-1 px-3 py-2 rounded-md font-medium leading-5 text-text-offset hover:text-text hover:bg-background focus:outline-none focus:text-text focus:bg-background transition duration-150 ease-in-out">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
