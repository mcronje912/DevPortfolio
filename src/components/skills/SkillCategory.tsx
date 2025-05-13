import { Card, CardBody, CardHeader } from "@heroui/card";

import { SkillBadge } from "./SkillBadge";

import { SkillCategory as SkillCategoryType } from "@/data/skills";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <Card className="bg-default-50 dark:bg-rich-black-500 shadow-md">
      <CardHeader className="flex-col items-start pt-5 pb-3 px-5 bg-gradient-to-r from-cerulean to-verdigris dark:from-cerulean dark:to-verdigris-700">
        <h3 className="font-heading font-bold text-xl text-white">
          {category.name}
        </h3>
      </CardHeader>
      <CardBody className="overflow-visible py-4 px-5">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </CardBody>
    </Card>
  );
};
