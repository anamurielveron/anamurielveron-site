import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className='min-h-screen flex flex-col items-center justify-center
                            gap-6 px-8 text-center'>
                {/* TODO: cute image here */}

                <h3 className='font-body font-bold text-accent text-xl uppercase'>
                    ERROR 404: page not found
                </h3>
                <p className='font-body text-xs text-accent'>
                    {/* TODO: funny statement here idk */}
                </p>

                <Link
                    href="/"
                    className='border border-accent px-5 py-3 font-body text-sm text-accent uppercase
                                hover:bg-accent hover:text-accent-content transition-colors mt-2'>
                    Go Home
                </Link>
            </main>
            <Footer />
        </>
    );
}