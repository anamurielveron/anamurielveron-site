'use client';

import { useState } from 'react';
import { RiFileCopyLine, RiCheckLine } from 'react-icons/ri';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-3 border border-accent px-5 py-3
                 font-body text-sm text-accent tracking-wider
                 hover:bg-accent hover:text-accent-content
                 transition-colors group w-fit"
      aria-label="Copy email address"
    >
      <span>
        {copied ? 'Copied!' : email}
      </span>
      {copied
        ? <RiCheckLine size={16} />
        : <RiFileCopyLine size={16} className="group-hover:scale-110 transition-transform" />
      }
    </button>
  );
}