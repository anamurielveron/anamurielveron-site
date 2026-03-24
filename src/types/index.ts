export interface ExperienceEntry {
    start: string;
    end: string;
    role: string;
    organization: string;
    description?: string;
}

export interface EducationEntry {
    start: string;
    end: string;
    degree: string;
    institution: string;
    description?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string | null;
    techStack: string[];
    githubUrl?: string | null;
    liveUrl?: string | null;
    featured: boolean;
}

export interface CurrentlyEntry {
    type: string;
    item: string;
}

export interface SiteData {
    meta: {
        name: string;
        title: string;
        greeting: string;
        photo: string;
        cv: string;
    };
    currently: CurrentlyEntry[];
    experience: ExperienceEntry[];
    education: EducationEntry[];
    techStack: string[];
    interests: string[];
    projects: Project[];
    contact: {
        status: string;
        email: string;
        linkedin: string;
        github: string;
        instagram: string;
    };
}