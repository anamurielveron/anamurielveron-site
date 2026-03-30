'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
    const { theme }  = useTheme();
    const isDark = theme === 'dark';

    return (
        <>
            <Navbar />
            <main className='min-h-screen flex flex-col items-center justify-center
                            gap-6 px-8 text-center'>
                {/* JIJI HUH */}
                <div className="relative w-60 h-60 border border-accent">
                    <Image src="/jiji_huh.png" alt="Confused Jiji" width={350} height={350}
                        className='border border-accent' />
                    <div className={`absolute inset-0 bg-accent opacity-60 
                                    ${isDark ? 'mix-blend-multiply' : 'mix-blend-screen'}`}
                        aria-hidden="true"
                    />
                </div>

                <p className='font-body text-xs text-accent'>
                    Jiji is confused too...
                </p>
                <h3 className='font-body font-bold text-accent text-xl uppercase'>
                    ERROR 404: page not found
                </h3>

                <Link
                    href="/"
                    className='border border-accent px-5 py-3 font-body text-sm text-accent uppercase
                                hover:bg-accent hover:text-accent-content transition-colors mt-2 pointer-events-auto'>
                    Go Home
                </Link>
            </main>
            <Footer />
        </>
    );
}