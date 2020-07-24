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
      <div className={`${theme} min-h-screen antialiased font-sans text-quaternary bg-primary`}>
        <header className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <Navbar theme={theme} handleThemeChange={handleThemeChange} />
        </header>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</main>
      </div>
    </>
  );
};

export default Layout;
