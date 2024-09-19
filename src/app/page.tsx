import MarkdownContainer from "@/components/markdown-container";

import {
  getSectionById,
  getAllNotableProjects,
  getAllOtherProjects,
} from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const landingContent = getSectionById("landing");
  const aboutContent = getSectionById("about");

  const notableProjects = getAllNotableProjects();
  const otherProjects = getAllOtherProjects();
  return (
    <main
      id="main-content"
      className="mx-auto grid w-full max-w-[1200px] gap-20"
    >
      <section id="landing">
        <MarkdownContainer>{landingContent}</MarkdownContainer>
      </section>

      <section id="about">
        <MarkdownContainer>{aboutContent}</MarkdownContainer>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="py-4">
          <h3>Notable Projects</h3>

          <div className="my-4 grid gap-8 md:grid-cols-2">
            {notableProjects.map((notableProject) => (
              <ProjectCard
                key={notableProject.title}
                project={notableProject}
              />
            ))}
          </div>
        </div>

        <div className="py-4">
          <h3>Other Projects</h3>

          <div className="my-4 grid gap-8 md:grid-flow-col">
            {otherProjects.map((otherProject) => (
              <ProjectCard key={otherProject.title} project={otherProject} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="gap-10">
        <h2>Contact Me</h2>

        <p className="my-0 bg-black/60 text-xl md:text-2xl">
          I would love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, feel free to get in touch.
        </p>

        <Button size="lg" className="mx-auto" asChild>
          <a href="mailto:lclcodingjj@gmail.com">lclcodingjj@gmail.com</a>
        </Button>
      </section>
    </main>
  );
}
