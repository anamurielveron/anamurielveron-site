import Image from 'next/image';
import { RiDownloadLine } from 'react-icons/ri';
import data from '@/content/data.json';

export default function Hero() {
    const { meta } = data;

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-8 md:px-60">
            <div className="flex flex-col gap-6 max-w-lg">
                {/* Photo */}
                <div className="relative w-48 h-56 border border-accent">
                    <Image src={meta.photo} alt={meta.name} fill className="object-cover object-top grayscale" priority />
                    <div className="absolute inset-0 bg-accent opacity-60 mix-blend-multiply" aria-hidden="true" />
                </div>
                {/* Text */}
                <div>
                    <p className='font-body text-sm text- mb-1'>
                        {meta.greeting}
                    </p>
                    <h1 className='font-heading text-3xl md:text-4xl font-bold text-accent uppercase'>
                        {meta.name}
                    </h1>
                    <p className='font-body text-sm text-accent mt-2'>
                        {meta.title}
                    </p>
                </div>
                {/* Download Resume */}
                <a href={meta.resume} download className='inline-flex items-center gap-3 border border-accent
                                                            px-4 py-2 text-sm font-body text-accent uppercase
                                                            hover:bg-accent hover:text-accent-content transition-colors w-fit'>
                    Download Resume <RiDownloadLine size={16} />
                </a>
            </div>
        </section>
    );
}