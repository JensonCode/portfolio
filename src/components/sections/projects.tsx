import React from 'react';

type NotableProject = {
  title: string;
  description: string;
  link: string;
  tech: string[];
};

export const notableProjects: Array<NotableProject> = [
  {
    title: 'Booga',
    description:
      'Booga is a platform developed for a Hong Kong-based startup that secured funding from the CCMF Cyberport program. The platform provides users with an in-depth comparison of various telecommunication services in Hong Kong.',
    link: 'https://booga.com.hk',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Next.js', 'Vercel'],
  },
  {
    title: 'i-Momentum Search',
    description:
      'i-Momentum Search is a full-stack job posting application built using Next.js 14, server actions, and Drizzle ORM. Developed for a job agency client, it serves as a small-scale, experimental platform for job listings and applications.',
    link: 'https:///i-momentumsearch.com/',
    tech: ['SQLite', 'Next.js', 'Vercel'],
  },
];

export default function Projects() {
  return (
    <section id='projects'>
      <h3>Projects I have built</h3>
      {notableProjects.map((notableProject) => (
        <ProjectCard key={notableProject.title} />
      ))}
    </section>
  );
}

const ProjectCard = () => {
  return <></>;
};
