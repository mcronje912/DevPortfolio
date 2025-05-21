// src/components/skills/ProjectBadge.tsx
interface ProjectBadgeProps {
  project: string;
}

export const ProjectBadge: React.FC<ProjectBadgeProps> = ({ project }) => {
  return (
    <span className="text-xs px-3 py-1.5 rounded-full bg-white/90 text-default-800 dark:text-default-200 border border-default-200/50">
      {project}
    </span>
  );
};