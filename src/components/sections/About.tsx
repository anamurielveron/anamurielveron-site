'use client';

import { useState } from 'react';
import D20Roll from '@/components/ui/D20Roll';
import ItemBadge from "@/components/ui/ItemBadge";
import data from "@/content/data.json";
import type { TechStack } from '@/types';


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
    const { experience, education, techStack, interests } = data;

    const [showD20, setShowD20] = useState(false);
    const [d20Key, setD20Key] = useState(0);

    const handleD20Click = () => {
        setD20Key((prev) => prev + 1);
        setShowD20(true);
        console.log('Rolling a d20!');
    };

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
                    {interests.map((item) => (
                        item == 'Dungeons & Dragons' ? (
                            <button
                                key={item}
                                onClick={handleD20Click}
                                className='border border-accent px-2 py-1
                                            font-body text-xs text-accent
                                            hover:bg-accent hover:text-accent-content
                                            transition-colors cursor-pointer'
                                aria-label="Roll a d20"
                            >
                                {item}
                            </button>
                        ) : (
                            <ItemBadge key={item} label={item} />
                        )
                    ))}
                </div>

                {showD20 && (
                    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
                        <D20Roll key={d20Key} onRoll={() => setShowD20(false)} />
                    </div>
                )}
            </div>
        </section>
    );
}