'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface Position {
  top: string;
  left: string;
}

function randomPosition(): Position {
  const top = `${Math.floor(Math.random() * 65) + 10}%`;
  const left = `${Math.floor(Math.random() * 65) + 10}%`;
  return { top, left };
}

export default function LightModeFlash() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [position, setPosition] = useState<Position>({ top: '30%', left: '40%' });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Trigger flash
    setPosition(randomPosition());
    setVisible(true);

    timeoutRef.current = setTimeout(() => {
    setVisible(false);
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        zIndex: 9990,
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
      }}
    >
      <Image
        src="/light_flash.gif"
        alt=""
        width={180}
        height={180}
        priority
      />
    </div>
  );
}