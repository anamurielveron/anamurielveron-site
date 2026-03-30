'use client';

import { useTheme } from 'next-themes';
import { RiSunLine, RiSunFill, RiMoonLine, RiMoonFill } from 'react-icons/ri';
import { useState } from 'react';
import LightModeFlash from './LightModeFlash';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [flashKey, setFlashKey] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  
  const handleToggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);

    if (next === 'light') {
      setFlashKey((prev) => prev + 1); // Trigger new flash
      setShowFlash(true);
    } else {
      setShowFlash(false);
    }
  };

  return (
    <>
      <button
        onClick={handleToggle}
        aria-label="Toggle theme"
        className="group relative w-6 h-6 text-accent transition-all"
      >
        {/* Sun */}
        {theme === 'dark' && (
          <>
            <RiSunLine className="absolute inset-0 group-hover:opacity-0 transition-opacity" size={22} />
            <RiSunFill className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all" size={22} />
          </>
        )}

        {/* Moon */}
        {theme === 'light' && (
          <>
            <RiMoonLine className="absolute inset-0 group-hover:opacity-0 transition-opacity" size={22} />
            <RiMoonFill className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all" size={22} />
          </>
        )}
      </button>

      {showFlash && <LightModeFlash key={flashKey} />}
    </>
  );
}