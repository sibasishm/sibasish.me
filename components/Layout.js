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
        <Navbar theme={theme} handleThemeChange={handleThemeChange} />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
