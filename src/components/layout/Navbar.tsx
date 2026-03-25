import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
    {label: 'About', href: '#about' },
    {label: 'Projects', href: '#projects' },
    {label: 'Contact', href: '#contact' },
];

// TODO: Turn logo into separate component and add animation on hover
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                       px-8 py-4">
            
            <Link href="#hero" aria-label="Home">
                <Logo className="w-18 h-18 text-accent transition-all" />
            </Link>

            <nav className='flex items-center bg-base-100 border border-accent'>
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
            
            <ThemeToggle />
        </header>
    );
}