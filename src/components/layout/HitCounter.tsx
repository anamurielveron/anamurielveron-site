'use client';

import { useEffect, useState } from 'react';

export default function HitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
        fetch('/api/hits', { method: 'POST' })
        .then((r) => r.json())
        .then((data) => setCount(data.count));
    }
  }, []);

// FOR TESTINGGGGG
  if (count === null) return (
    <span className="font-body text-xs text-accent bg-base-100 border border-accent p-1">
      hits: 0
    </span>
  );

  return (
    <span className="font-body text-xs text-accent bg-base-100 border border-accent p-1">
      hits: {count.toLocaleString()}
    </span>
  );
}