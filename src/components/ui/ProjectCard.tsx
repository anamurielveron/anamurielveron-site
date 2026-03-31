import Logo from '@/components/icons/Logo'
import Image from 'next/image';
import { RiGithubLine, RiGithubFill, RiExternalLinkLine, RiExternalLinkFill } from 'react-icons/ri';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className='grid grid-cols-[160px_1fr] border border-accent
                        hover:border-r-6 transition-all group/card'>
            
            {/* Thumbnail */}
            <div className='relative border-r border-accent overflow-hidden'>
                {project.thumbnail ? (
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover/card:grayscale-0 transition-all"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <Logo className="w-24 h-24 text-accent opacity-30
                                        group-hover/card:opacity-100 transition-opacity duration-300" />
                    </div>
                )}
            </div>

            {/* Details */}
            <div className="p-6">
                <h3 className='font-heading font-semibold text-accent text-sm mb-1'>
                    {project.title}
                </h3>
                <p className='font-body text-xs text-accent mb-3'>
                    {project.description}
                </p>
                {/* Tech Tags */}
                <div className='flex flex-wrap gap-1 mb-4'>
                    {project.techStack.map((tech) => (
                        <span key={tech}
                                className='border border-accent px-2 py-0.5
                                            font-body text-[10px] text-accent'>
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Links */}
                <div className='flex items-center gap-4'>
                    {project.githubUrl && (
                        <a href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group/icon relative w-4.5 h-4.5 text-accent'
                            aria-label="GitHub repository"
                        >
                            <RiGithubLine className="absolute inset-0 group-hover/icon:opacity-0 transition-opacity" size={18} />
                            <RiGithubFill className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 transition-opacity scale-110" size={18} />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group/icon relative w-4.5 h-4.5 text-accent'
                            aria-label="Live site"
                        >
                            <RiExternalLinkLine className="absolute inset-0 group-hover/icon:opacity-0 transition-opacity" size={18} />
                            <RiExternalLinkFill className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 transition-opacity scale-110" size={18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}