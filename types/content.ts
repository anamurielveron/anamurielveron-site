export type ContactStatus =
    | "open-to-chat"
    | "open-to-opportunities"
    | "busy-at-the-moment"
;

export type CurrentlyType =
    | "reading"
    | "watching"
    | "listening-to"
    | "learning"
    | "studying"
    | "working-on"
    | "playing"
;

export interface CurrentlyItem {
    type: CurrentlyType;
    title: string;
    link?: string;
}

export interface Profile {
    name: string;
    title: string;
    greeting: string;
    photo: string; //path
    resume: string; //path
    contactStatus: ContactStatus;
    currently: CurrentlyItem[];
    socials: {
        email: string;
        linkedin: string;
        github: string;
        instagram: string;
    };
}

export interface ExperienceItem {
    startDate: string; //format: YYYY-MM
    endDate: string; //format: YYYY-MM or "Present"
    role: string;
    organization: string;
    description?: string;
}

export interface EducationItem {
    startDate: string; //format: YYYY-MM
    endDate: string; //format: YYYY-MM or "Present"
    degree: string;
    institution: string;
    description?: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    thumbnail: string; //path
    technologies: string[]; //tech stack
    repoUrl?: string;
    liveUrl?: string;
    featured: boolean; //show on homepage
}