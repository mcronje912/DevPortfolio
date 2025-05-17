// src/components/projects/ProjectGrid.tsx
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      {projects.map((project) => (
        <div key={project.id} className="flex justify-center">
          <ProjectCard
            description={project.description}
            thumbnailUrl={project.thumbnailUrl}
            projectUrl={`/projects/${project.id}`}
            tags={project.tags}
            title={project.title}
            deviceType={project.deviceType}
          />
        </div>
      ))}
    </div>
  );
};