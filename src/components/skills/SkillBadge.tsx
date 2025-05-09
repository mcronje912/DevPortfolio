import { Progress } from "@heroui/progress";

import { Skill } from "@/data/skills";

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-default-700">{skill.name}</span>
        <span className="text-sm text-default-500">{skill.level}/10</span>
      </div>
      <Progress
        classNames={{
          base: "bg-default-200",
          value:
            skill.level >= 8
              ? "bg-cerulean"
              : skill.level >= 6
                ? "bg-verdigris"
                : "bg-default-400",
        }}
        color={
          skill.level >= 8
            ? "primary"
            : skill.level >= 6
              ? "secondary"
              : "default"
        }
        radius="sm"
        size="sm"
        value={skill.level * 10}
      />
    </div>
  );
};
