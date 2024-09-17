import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/three/scene"), { ssr: false });

import MarkdownContainer from "@/components/markdown-container";

import {
  getSectionById,
  getAllNotableProjects,
  getAllOtherProjects,
} from "@/lib/content";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  const landingContent = getSectionById("landing");
  const aboutContent = getSectionById("about");

  const notableProjects = getAllNotableProjects();
  const otherProjects = getAllOtherProjects();
  return (
    <Scene>
      <main className="mx-auto w-full max-w-[1200px]">
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
      </main>
    </Scene>
  );
}
