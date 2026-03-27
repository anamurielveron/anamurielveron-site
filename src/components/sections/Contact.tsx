import CopyEmail from '@/components/ui/CopyEmail';
import data from '@/content/data.json';

const statusGlow: Record<string, boolean> = {
    'Open to chat': true,
    'Open to opportunities': true
};

export default function Contact() {
    const { email, status } = data.contact;

    return (
        <section id="contact" className="px-8 md:px-60 py-24">
            <h2 className="font-heading text-3xl font-bold uppercase text-accent mb-16">
                Contact
            </h2>

            {/* Status Indicator */}
            <div className='flex items-center gap-3 mb-8'>
                {statusGlow[status] ? (
                    <>
                        <span className="status-dot w-2 h-2 bg-accent inline-block" />
                        <span className="font-body text-xs text-accent tracking-wider uppercase">
                            {status}
                        </span>
                    </>
                ) : (
                    <>
                        <span className="w-2 h-2 bg-gray inline-block" />
                        <span className="font-body text-xs text-gray tracking-wider uppercase">
                            {status}
                        </span>
                    </>
                )}
                
            </div>

            <CopyEmail email={email} />
        </section>
    );
}