'use client';

import { useEffect, useState } from 'react';

export default function HitCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hits', { method: 'POST' })
      .then((r) => r.json())
      .then((data) => {
        setCount(data.count);
        setLoading(false);
      })
      .catch(() => {
        console.error('Failed to fetch hit count');
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <span className="font-body text-xs text-accent bg-base-100 border border-accent p-1">
      hits: ...
    </span>
  );

  return (
    <span className="font-body text-xs text-accent bg-base-100 border border-accent p-1">
      hits: {count?.toLocaleString() ?? 0}
    </span>
  );
}