import ItemBadge from "@/components/ui/ItemBadge";
import data from "@/content/data.json";

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
                <div className="flex flex-wrap gap-2 py-5">
                    {techStack.map((tech) => (
                        <ItemBadge key={tech} label={tech} />
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
                        <ItemBadge key={item} label={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}