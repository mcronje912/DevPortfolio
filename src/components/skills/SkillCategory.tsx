// src/components/skills/SkillCategory.tsx
import { SkillBadge } from "./SkillBadge";
import { SkillCategory as SkillCategoryType } from "@/data/skills";
import { Card, CardBody, CardHeader } from "@heroui/card";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-default-200 dark:border-default-800">
      <CardHeader className="pb-0 pt-4 px-4 bg-gradient-to-r from-cerulean-800 to-cerulean-700 text-white">
        <div className="flex flex-col items-start">
          <h3 className="font-heading font-bold text-xl mb-2">{category.name}</h3>
          <div className="w-16 h-1 bg-white rounded mb-3 opacity-70"></div>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-4 px-5">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </CardBody>
    </Card>
  );
};