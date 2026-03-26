import CopyEmail from '@/components/ui/CopyEmail';
import data from '@/content/data.json';

const statusColors: Record<string, string> = {
    'Open to chat': 'bg-accent',
    'Open to opportunities': 'bg-accent',
    'Busy at the moment': 'bg-accent-muted'
};

export default function Contact() {
    const { email, status } = data.contact;
    const dotColor = statusColors[status] ?? 'bg-accent-muted';

    return (
        <section id="contact" className="px-8 md:px-60 py-24">
            <h2 className="font-heading text-3xl font-bold uppercase text-accent mb-16">
                Contact
            </h2>

            {/* Status Indicator */}
            <div className='flex items-center gap-3 mb-8'>
                <span className={`w-2 h-2 ${dotColor} animate-pulse`} />
                <span className='font-body text-sm text-accent uppercase'>
                    {status}
                </span>
            </div>

            <CopyEmail email={email} />
        </section>
    );
}