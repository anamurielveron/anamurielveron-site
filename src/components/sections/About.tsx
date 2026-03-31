'use client';

import { useState } from 'react';
import ItemBadge from "@/components/ui/ItemBadge";
import data from "@/content/data.json";
import type { TechStack, Interest } from '@/types';
import { interactiveRegistry } from './interactiveRegistry';


function TimelineEntry({
    dates,
    primary,
    secondary,
    description,
}: {
    dates: string;
    primary: string;
    secondary: string;
    description: string;
}) {
    return (
        <div className="grid grid-cols-[120px_1fr] gap-6 py-5">
            <span className="font-body text-xs text-accent">{dates}</span>
            <div>
                <p className="font-heading font-semibold text-accent text-sm">{primary}</p>
                <p className="font-body text-xs text-accent mt-1">{secondary}</p>
                {description && (
                    <p className="font-body text-xs text-accent mt-1 italic">{description}</p>
                )}
            </div>
        </div>
    );
}

export default function About() {
    const { experience, education, techStack } = data;

    const [activeInteraction, setActiveInteraction] = useState<string | null>(null);
    const [interactionKey, setInteractionKey] = useState(0);

    return (
        <section id="about" className="px-8 md:px-60 py-24">
            <h2 className="font-heading text-3xl font-bold uppercase text-accent mb-16">
                About
            </h2>

            {/* Experience */}
            <div className="mb-14">
                <h3 className="font-heading text-sm font-bold uppercase text-accent mb-4">
                    Experience
                </h3>
                {experience.map((entry, i) => (
                    <TimelineEntry
                        key={i}
                        dates={`${entry.start} - ${entry.end}`}
                        primary={entry.role}
                        secondary={entry.organization}
                        description={entry.description || ""}
                    />
                ))}
            </div>

            {/* Education */}
            <div className="mb-14">
                <h3 className="font-heading text-sm font-bold uppercase text-accent mb-4">
                    Education
                </h3>
                {education.map((entry, i) => (
                    <TimelineEntry
                        key={i}
                        dates={`${entry.start} - ${entry.end}`}
                        primary={entry.degree}
                        secondary={entry.institution}
                        description={entry.description || ""}
                    />
                ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-14">
                <h3 className="font-heading text-sm font-bold uppercase text-accent mb-4">
                    Technologies
                </h3>
                <div className="flex flex-col gap-6">
                    {(techStack as TechStack[]).map(({ category, items }) => (
                        <div key={category}>
                            <p className="font-body text-xs text-accent uppercase mb-2 pb-1">
                                {category}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {items.map((tech) => (
                                    <ItemBadge key={tech} label={tech} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Interests */}
            <div className="mb-14">
                <h3 className="font-heading text-sm font-bold uppercase text-accent mb-4">
                    Interests
                </h3>
                <div className="flex flex-wrap gap-2 py-5">
                    {(data.interests as Interest[]).map((interest) => {
                        if (interest.type === 'link') {
                            return (
                                <a
                                    key={interest.label}
                                    href={interest.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='border border-accent px-2 py-1
                                                font-body text-xs text-accent
                                                hover:bg-accent hover:text-accent-content
                                                transition-colors'
                                    aria-label={`Visit ${interest.label}`}
                                >
                                    {interest.label}
                                </a>
                            );
                        }

                        const isInteractive = interest.type === 'interactive';
                        const InteractiveComponent = isInteractive ? interactiveRegistry[interest.interaction || ''] : null;

                        if (isInteractive && InteractiveComponent) {
                            return (
                                <button
                                    key={interest.label}
                                    onClick={() => {
                                        setInteractionKey((prev) => prev + 1);
                                        setActiveInteraction(interest.interaction || null);
                                    }}
                                    className='border border-accent px-2 py-1
                                                font-body text-xs text-accent
                                                hover:bg-accent hover:text-accent-content
                                                transition-colors cursor-pointer'
                                    aria-label={`Interact with ${interest.label}`}
                                >
                                    {interest.label}
                                </button>
                            );
                        }

                        return <ItemBadge key={interest.label} label={interest.label} />;
                    })}
                </div>

                {activeInteraction && interactiveRegistry[activeInteraction] && (
                    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
                        {(() => {
                            const InteractiveComponent = interactiveRegistry[activeInteraction];
                            return <InteractiveComponent key={interactionKey} onClose={() => setActiveInteraction(null)} />;
                        })()}
                    </div>
                )}
            </div>
        </section>
    );
}