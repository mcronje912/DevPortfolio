// src/pages/skills.tsx
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { skillsData } from "@/data/skills";
import { SkillCategory } from "@/components/skills/SkillCategory";

export default function SkillsPage() {
  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10">
            <h1 className={title({ size: "lg" })}>My Skills</h1>
            <p className="text-default-600 mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiencies
              across multiple platforms and technologies, gained through
              developing real-world business solutions and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((category) => (
              <SkillCategory key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
