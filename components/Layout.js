import React from 'react';
import Head from 'next/head';

import useTheme from '../hooks/useTheme';

import Navbar from './Navbar';

const DEFAULT_THEME = 'theme-light';

const Layout = ({ children, title }) => {
  if (typeof window === 'undefined') return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [theme, setTheme] = useTheme(DEFAULT_THEME, 'theme');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <Head>
        <title>{title || 'Home'}</title>
      </Head>
      <div className={`${theme} min-h-screen antialiased font-sans text-text bg-background`}>
        <header className="bg-background-offset border-b-2 border-border">
          <Navbar theme={theme} handleThemeChange={handleThemeChange} />
        </header>
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl">
          {children}
        </main>
        <footer className="bg-primary text-background-offset p-12 px-16 mt-12 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl">
            <ul className="flex space-x-6 justify-center items-center">
              <li className="text-md font-semibold">Github</li>
              <li className="text-md font-semibold">Behance</li>
              <li className="text-md font-semibold">Stack Overflow</li>
              <li className="text-md font-semibold">Twitter</li>
              <li className="text-md font-semibold">RSS</li>
            </ul>
            <p className="text-xl mt-4">Handcrafted by me &copy; 2020</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
