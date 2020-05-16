import { useEffect, useState } from 'react';

export const useStrawTheme = () => {
  const [theme, setTheme] = useState('baseTheme');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === 'baseTheme') {
      setMode('strawTheme');
    } else {
      setMode('baseTheme');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('baseTheme');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};
