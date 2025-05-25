import React, { useEffect, useState } from 'react';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import './style.scss'

const THEME_KEY = 'theme'; // ключ для localStorage

function ThemeToggle() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className='toggleBtn'>
      {theme == 'dark' ? <img src={sunIcon} alt="" /> : <img src={moonIcon} alt="" />}
    </button>
  );
}

export default ThemeToggle;
