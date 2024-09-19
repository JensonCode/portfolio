import fs from "fs";
import { join } from "path";
import { NotableProject, Project } from "@/interfaces/projects";
import matter from "gray-matter";

const contentDirectory = join(process.cwd(), "content");

export const getSectionById = (id: string) => {
  const filePath = join(contentDirectory, `${id}.md`);
  const file = fs.readFileSync(filePath, "utf8");
  return file;
};

const projectDirectory = join(contentDirectory, "projects");

export const getAllNotableProjects = (): NotableProject[] => {
  const dir = join(projectDirectory, "notable-projects");
  const slugs = fs.readdirSync(dir);

  const projects = slugs.map((slug) => {
    const projectPath = join(dir, slug);
    const file = fs.readFileSync(projectPath, "utf8");
    const { data, content, excerpt } = matter(file);
    return { ...data, content, excerpt } as NotableProject;
  });

  return projects;
};

export const getAllOtherProjects = (): Project[] => {
  const dir = join(projectDirectory, "other-projects");
  const slugs = fs.readdirSync(dir);

  const projects = slugs.map((slug) => {
    const projectPath = join(dir, slug);
    const file = fs.readFileSync(projectPath, "utf8");
    const { data, content, excerpt } = matter(file);
    return { ...data, content, excerpt } as Project;
  });

  return projects;
};
