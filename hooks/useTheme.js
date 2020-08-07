import { useState, useEffect } from 'react';

const useTheme = (defaultTheme, key) => {
  const [theme, setTheme] = useState(() => window.localStorage.getItem(key) || defaultTheme);

  useEffect(() => {
    window.localStorage.setItem(key, theme);
  }, [theme, key]);

  return [theme, setTheme];
};

export default useTheme;
