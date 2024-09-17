export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  githubLink?: string;
  logo?: string;
  screenshot?: string;
}

export type NotableProject = Required<Omit<Project, "githubLink">>;

export const otherProjects: Project[] = [
  {
    title: "Portfolio",
    description:
      "This website is my third version of Portfolio. I tried Three.js and played around with this 3D model. Credit to <a href='https://sketchfab.com/3d-models/need-some-space-d6521362b37b48e3a82bce4911409303'>Loïc Norgeot</a>",
    link: "",
    githubLink: "",
    tech: ["Three.js", "Next.js", "Vercel"],
  },
];
