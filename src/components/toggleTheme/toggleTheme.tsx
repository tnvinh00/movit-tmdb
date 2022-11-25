import React, { useState, useEffect } from 'react';

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') !== 'light'
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      type='button'
      className='border border-gray-300 hover:text-white font-medium rounded-full p-3.5 text-center inline-flex items-center dark:hover:text-white text-xl'
      onClick={toggle}
    >
      {darkMode ? (
        <i className='bx bxs-sun text-gray-100 dark:text-gray-300'></i>
      ) : (
        <i className='bx bxs-moon text-gray-700 dark:text-gray-300'></i>
      )}
    </button>
  );
};

export default ToggleTheme;