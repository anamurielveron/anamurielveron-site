'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const navLinks = [
    {label: 'About', href: '/#about' },
    {label: 'Projects', href: '/#projects' },
    {label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-colors
                md:bg-transparent md:border-b-0 p-4
                ${menuOpen
                ? 'bg-base-100 border-b border-accent'
                : 'bg-transparent border-b-0'
                }
            `}
        >
            <div className='flex items-center justify-center px-6 py-4'>
                <Link 
                    href={typeof window !== 'undefined' && window.location.pathname === '/' ? '/#hero' : '/'}
                    className='absolute left-6' aria-label="Home"
                >
                {/* LOGO */}
                    <Logo className="w-18 h-18 text-accent hover:scale-110 transition-transform p-1" />
                </Link>

                {/* Desktop Nav */}
                <nav className='hidden md:flex items-center bg-base-100 border border-accent'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-6 py-3 text-sm font-body uppercase
                                    text-accent border-base-300
                                    hover:bg-accent hover:text-accent-content transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                
                {/* Right Corner */}
                <div className='absolute right-6 flex items-center gap-4'>
                    {/* Theme Toggle */}
                    <ThemeToggle />
                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-accent"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Nav */}
            <nav
                className={`mobile-nav md:hidden border-t border-accent ${menuOpen ? 'open' : ''}`}
                aria-hidden={!menuOpen}
            >
                {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-4 text-sm font-body tracking-widest uppercase
                            text-accent
                            hover:bg-accent hover:text-accent-content transition-colors"
                    tabIndex={menuOpen ? 0 : -1}
                >
                    {link.label}
                </Link>
                ))}
            </nav>
        </header>
    );
}