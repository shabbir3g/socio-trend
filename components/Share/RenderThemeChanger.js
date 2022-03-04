import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';

const RenderThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <button
        onClick={() => setTheme('light')}
        className="whitespace-nowrap text-lg md:text-xl p-3 flex gap-1.5 items-center justify-between rounded-lg dark:bg-zinc-700 dark:bg-opacity-50 dark:hover:bg-opacity-90 bg-gray-200 dark:text-white bg-opacity-30 hover:bg-opacity-90 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-teal-400"
      >
        <BsSun />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => setTheme('dark')}
        className="whitespace-nowrap text-lg md:text-xl p-3 flex gap-1.5 items-center justify-between rounded-lg dark:bg-zinc-700 dark:bg-opacity-50 dark:hover:bg-opacity-90 bg-gray-200 dark:text-white bg-opacity-30 hover:bg-opacity-90 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-teal-400"
      >
        <BsMoon />
      </button>
    );
  }
};
export default RenderThemeChanger;
