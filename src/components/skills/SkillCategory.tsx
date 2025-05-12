import { SkillBadge } from "./SkillBadge";
import { SkillCategory as SkillCategoryType } from "@/data/skills";
import { Card, CardBody, CardHeader } from "@heroui/card";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <Card className="bg-default-50 dark:bg-rich-black-500 shadow-md">
      <CardHeader className="pb-0 pt-4 px-5 flex-col items-start bg-cerulean-700 dark:bg-cerulean-900">
        <h3 className="font-heading font-bold text-xl text-white">{category.name}</h3>
      </CardHeader>
      <CardBody className="overflow-visible py-4 px-5">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </CardBody>
    </Card>
  );
};