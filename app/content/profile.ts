import type { Profile } from "@/types/content";
import { title } from "process";

export const profile: Profile = {
    name: "Ana Muriel Veron",
    title: "Computer Science Student | Programmer",
    greeting: "Hello, friend.",
    photo: "/public/images/profile.jpg",
    resume: "/public/resume.pdf",
    contactStatus: "open-to-chat",
    currently: [
        {  type: "studying", title: "Advanced Integral Calculus"  },
        {  type: "watching", title: "A Knight of the Seven Kingdoms"  },
        {  type: "reading", title: "The Hobbit by J.R.R. Tolkien"  },
    ],
    socials: {
        email: "anamurielveron@gmail.com",
        linkedin: "https://www.linkedin.com/in/anamurielveron/",
        github: "https://github.com/anamurielveron",
        instagram: "https://www.instagram.com/anamurielveron/",
    },
};
