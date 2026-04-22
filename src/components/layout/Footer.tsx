import { RiGithubFill, RiLinkedinFill,  RiInstagramFill, RiMailFill} from "react-icons/ri";
import data from '@/content/data.json';
import HitCounter from './HitCounter';

export default function Footer() {
    const { contact } = data;

    const links = [
        { href: `mailto:${contact.email}`, icon: RiMailFill, label: 'Email' },
        { href: contact.github, icon: RiGithubFill, label: 'GitHub' },
        { href: contact.linkedin, icon: RiLinkedinFill, label: 'LinkedIn' }
    ];

    return (
        <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between p-6 z-40">
            <HitCounter />
            <div className="flex items-center gap-5">
                {links.map(({ href, icon: Icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith('mailto') ? undefined: '_blank'}
                        rel="noopener noreferrer"
                        arial-label={label}
                        className="text-accent hover:scale-110 transition-transform"
                    >
                        <Icon size={20} />
                    </a>
                ))}
            </div>
        </footer>
    );
}