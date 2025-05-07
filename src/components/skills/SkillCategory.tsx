import { SkillBadge } from "./SkillBadge";
import { SkillCategory as SkillCategoryType } from "@/data/skills";
import { Card, CardBody, CardHeader } from "@heroui/card";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <Card>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h3 className="font-heading font-bold text-xl">{category.name}</h3>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </CardBody>
    </Card>
  );
};