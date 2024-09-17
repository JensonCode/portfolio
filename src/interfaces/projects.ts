export interface Project {
  //matter items
  content: "";
  excerpt: "";
  //data
  title: string;
  description: string;
  tech: string[];
  link?: string;
  githubLink?: string;
  logo?: string;
  screenshot?: string;
}

export type NotableProject = Required<Omit<Project, "githubLink">>;
