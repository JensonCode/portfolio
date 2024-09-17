import Image from "next/image";
import React, { Fragment, HTMLAttributes, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Project } from "@/interfaces/projects";

import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="relative flex flex-col bg-card/100">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex items-center gap-2">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`Logo of ${project.title}`}
              width={50}
              height={50}
              className="rounded-full"
            />
          )}

          <CardTitle>{project.title}</CardTitle>
        </div>

        <div className="flex gap-2">
          {project.link && (
            <Fragment>
              <Button
                variant="outline"
                size="sm"
                asChild
                className={cn(`peer/link z-[2]`)}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${project.title}`}
                >
                  <ExternalLinkIcon className="size-4" />
                </Link>
              </Button>

              <AnchorButtonOverlay className="opacity-[5%] transition-opacity duration-300 peer-hover/link:opacity-90">
                {project.screenshot && (
                  <Image
                    src={project.screenshot}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                )}
                <span>Go to {project.title} Github Repo</span>
              </AnchorButtonOverlay>
            </Fragment>
          )}

          {project.githubLink && (
            <Fragment>
              <Button
                variant="outline"
                size="sm"
                asChild
                className={cn(`peer/githubLink z-[2]`)}
              >
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={"GitHub Repo"}
                >
                  <GithubIcon className="size-4" />
                </Link>
              </Button>

              <AnchorButtonOverlay className="bg-[#6e5494]/90 opacity-0 transition-opacity duration-300 peer-hover/githubLink:opacity-100">
                <span>Go to {project.title} Github Repo</span>
              </AnchorButtonOverlay>
            </Fragment>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription className="mb-4 text-base font-medium">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex flex-wrap justify-end gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

interface AnchorButtonOverlayProps extends HTMLAttributes<HTMLDivElement> {}
const AnchorButtonOverlay = ({
  className,
  ...props
}: AnchorButtonOverlayProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none z-[1] rounded-lg border shadow-sm",
        "flex items-center justify-center",
        "text-lg font-semibold",
        `absolute inset-0`,
        className,
      )}
      {...props}
    />
  );
};
