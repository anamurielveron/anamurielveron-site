'use client';

import { useTheme } from 'next-themes';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  
  if (!resolvedTheme) {
    return <div className='w-6 h-6' />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="text-accent hover:text-accent-muted transition-colors"
    >
      {resolvedTheme === 'dark'
        ? <RiSunFill size={22} />
        : <RiMoonFill size={22} />
      }
    </button>
  );
}