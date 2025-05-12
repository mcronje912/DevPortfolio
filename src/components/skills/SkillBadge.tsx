import { Progress } from "@heroui/progress";
import { Skill } from "@/data/skills";

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-default-700 dark:text-default-300">{skill.name}</span>
        <span className="text-sm text-default-500 dark:text-default-400 bg-default-100 dark:bg-rich-black-400 rounded-full px-2 py-0.5">{skill.level}/10</span>
      </div>
      <Progress
        classNames={{
          base: "bg-default-200 dark:bg-rich-black-300",
          value:
            skill.level >= 8
              ? "bg-cerulean-600 dark:bg-cerulean-500"
              : skill.level >= 6
                ? "bg-verdigris-600 dark:bg-verdigris-500"
                : "bg-ash-gray-500 dark:bg-ash-gray-600",
        }}
        color={
          skill.level >= 8
            ? "primary"
            : skill.level >= 6
              ? "secondary"
              : "default"
        }
        radius="sm"
        size="md"
        value={skill.level * 10}
      />
    </div>
  );
};