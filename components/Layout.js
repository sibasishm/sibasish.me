import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import useTheme from '../hooks/useTheme';

import Navbar from './Navbar';
import Footer from './Footer';

const Wrapper = dynamic(() => import('./Wrapper'));

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
        <title>{title || 'Home'} | Sibasish Mohanty</title>
      </Head>
      <Wrapper theme={theme}>
        <header className="bg-background-offset border-b-2 border-border sticky top-0 z-10">
          <Navbar theme={theme} handleThemeChange={handleThemeChange} />
        </header>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
