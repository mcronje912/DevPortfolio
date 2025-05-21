// src/components/skills/SkillCategory.tsx
import { GlassCard } from "@/components/GlassCard";
import { ProjectBadge } from "./ProjectBadge";

interface Skill {
  name: string;
  projects: string[];
}

interface SkillDomain {
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
}

interface SkillCategoryProps {
  domain: SkillDomain;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ domain }) => {
  return (
    <div className="h-full">
      {/* Single integrated card with header styling */}
      <GlassCard intensity="heavy">
        {/* Header section styled to match your design */}
        <div className="flex items-center gap-3 bg-default-300/70 dark:bg-rich-black-500/70 p-5 rounded-t-lg">
          <span className="text-2xl" aria-hidden="true">{domain.icon}</span>
          <h2 className="text-xl font-heading font-bold">{domain.name}</h2>
        </div>
        
        {/* Content section */}
        <div className="p-5">
          <p className="text-default-600 dark:text-default-600 mb-6">
            {domain.description}
          </p>
          
          <div className="space-y-5">
            {domain.skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

// Skill items with better contrast
const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-cerulean-600 dark:text-cerulean-600 text-lg">
          {skill.name}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-1">
        {skill.projects.map((project, idx) => (
          <ProjectBadge key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};