'use client';

import { useTheme } from 'next-themes';
import { RiSunLine, RiSunFill, RiMoonLine, RiMoonFill } from 'react-icons/ri';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  
  if (!resolvedTheme) {
    return <div className='w-6 h-6' />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="group relative w-6 h-6 text-accent hover:scale-110 transition-all"
    >
      {/* Sun */}
      {isDark && (
        <>
          <RiSunLine className="absolute inset-0 group-hover:opacity-0 transition-opacity" size={22} />
          <RiSunFill className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
        </>
      )}

      {/* Moon */}
      {!isDark && (
        <>
          <RiMoonLine className="absolute inset-0 group-hover:opacity-0 transition-opacity" size={22} />
          <RiMoonFill className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
        </>
      )}
    </button>
  );
}