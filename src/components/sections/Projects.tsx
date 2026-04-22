import ProjectCard from "../ui/ProjectCardVertical";
import data from '@/content/data.json';
import type { Project } from '@/types';

export default function Projects() {
    const featured = (data.projects as Project[]).filter((p) => p.featured);

    return (
        <section id="projects" className="px-8 md:px-60 py-24">
            <h2 className="font-heading text-3xl font-bold uppercase text-accent mb-16">
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featured.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}