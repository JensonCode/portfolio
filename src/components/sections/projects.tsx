import { ProjectCard } from "../project-card";
import { notableProjects, otherProjects } from "@/interfaces/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="py-8">
        <h3>Notable Projects</h3>

        <div className="my-4 grid gap-8 md:grid-cols-2">
          {notableProjects.map((notableProject) => (
            <ProjectCard key={notableProject.title} project={notableProject} />
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
  );
}
