import React from 'react';
import Head from 'next/head';

import useTheme from '../hooks/useTheme';

import Navbar from './Navbar';

const DEFAULT_THEME = 'theme-light';

const Layout = ({ children, title, noFooter }) => {
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
        <header className="bg-background-offset border-b-2 border-border sticky top-0 z-10">
          <Navbar theme={theme} handleThemeChange={handleThemeChange} />
        </header>
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl">
          {children}
        </main>
        {noFooter ? null : (
          <footer className="bg-primary text-background-offset p-12 px-16 mt-24 text-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl">
              <ul className="flex space-x-4 justify-center items-center">
                <li className="text-sm font-semibold">Github</li>
                <li className="text-sm font-semibold">Behance</li>
                <li className="text-sm font-semibold">Stack Overflow</li>
                <li className="text-sm font-semibold">Twitter</li>
                <li className="text-sm font-semibold">RSS</li>
              </ul>
              <p className="text-lg mt-4">Handcrafted by me &copy; 2020</p>
            </div>
          </footer>
        )}
      </div>
    </>
  );
};

export default Layout;
