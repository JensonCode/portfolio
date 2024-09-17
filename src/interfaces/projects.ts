export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  githubLink?: string;
  logo?: string;
  screenshot?: string;
}

type NotableProject = Required<Omit<Project, "githubLink">>;

export const notableProjects: NotableProject[] = [
  {
    title: "Booga",
    description:
      "Booga is a platform developed for a Hong Kong-based startup that secured funding from the CCMF Cyberport program. The platform provides users with an in-depth comparison of various telecommunication services in Hong Kong.",
    link: "https://booga.com.hk",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Next.js", "Vercel"],
    screenshot: "/projects/booga-screenshot.png",
    logo: "/projects/booga.svg",
  },
  {
    title: "i-Momentum Search",
    description:
      "i-Momentum Search is a full-stack job posting application built using Next.js 14, server actions, and Drizzle ORM. Developed for a job agency client, it serves as a small-scale, experimental platform for job listings and applications.",
    link: "https:///i-momentumsearch.com/",
    tech: ["SQLite", "Next.js", "Vercel"],
    screenshot: "/projects/ims-screenshot.png",
    logo: "/projects/i-momentum-search.svg",
  },
];

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
