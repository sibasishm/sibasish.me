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
      <div className={`${theme} min-h-screen antialiased font-sans text-text bg-secondary`}>
        <header className="bg-primary border-b-2 border-hover">
          <Navbar theme={theme} handleThemeChange={handleThemeChange} />
        </header>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-6xl">{children}</main>
      </div>
    </>
  );
};

export default Layout;
