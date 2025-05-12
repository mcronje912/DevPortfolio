// src/components/skills/SkillBadge.tsx
import { Skill } from "@/data/skills";

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  // Function to determine color based on skill level
  const getSkillColor = (level: number) => {
    if (level >= 9) return "bg-gradient-to-r from-cerulean to-cerulean-600";
    if (level >= 8) return "bg-gradient-to-r from-cerulean-600 to-cerulean-700";
    if (level >= 7) return "bg-gradient-to-r from-verdigris to-verdigris-600";
    if (level >= 6) return "bg-gradient-to-r from-verdigris-600 to-verdigris-700";
    if (level >= 5) return "bg-gradient-to-r from-cornsilk-300 to-cornsilk-400";
    if (level >= 4) return "bg-gradient-to-r from-ash-gray-300 to-ash-gray-400";
    if (level >= 3) return "bg-gradient-to-r from-ash-gray-400 to-ash-gray-500";
    return "bg-gradient-to-r from-default-400 to-default-500";
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-default-700">{skill.name}</span>
        <span className={`text-sm px-2 py-0.5 rounded-full ${skill.level >= 8 ? 'bg-cerulean text-white' : 'bg-default-200 text-default-700'}`}>
          {skill.level}/10
        </span>
      </div>
      <div className="h-2 w-full bg-default-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getSkillColor(skill.level)} rounded-full`} 
          style={{ width: `${skill.level * 10}%` }}
        ></div>
      </div>
    </div>
  );
};