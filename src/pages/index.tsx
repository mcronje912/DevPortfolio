import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { SkillBadge } from "@/components/skills/SkillBadge";

export default function HomePage() {
  // Featured projects
  const featuredProjects = projects.filter((project) => project.featured);

  // Featured skills (just a sample from each category)
  const featuredSkills = skillsData
    .flatMap((category) => category.skills.slice(0, 1))
    .slice(0, 4);

  return (
    <DefaultLayout>
      <Hero />

      <Divider className="my-12" />

      {/* Featured Projects Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className={title({ size: "lg" })}>Featured Projects</h2>
            <Button as={Link} color="primary" href="/projects" variant="light">
              View All Projects →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={`/projects/${project.id}`}
                tags={project.tags}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </section>

      <Divider className="my-12" />

      {/* Skills Preview Section */}
      <section className="py-12 bg-default-50">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className={title({ size: "lg" })}>Skills Highlight</h2>
            <Button as={Link} color="primary" href="/skills" variant="light">
              View All Skills →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {featuredSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <Divider className="my-12" />

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-cerulean to-verdigris text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to work together?
          </h2>
          <p className="max-w-md mx-auto mb-8">
            I&apos;m currently available for freelance projects and full-time
            positions. Let&apos;s build something amazing together!
          </p>
          <Button
            as={Link}
            className="bg-white text-cerulean hover:bg-ash-gray-200"
            color="default"
            href="/contact"
            variant="shadow"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
