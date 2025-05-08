// src/pages/index.tsx
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
import { useTheme } from "@/components/ThemeProvider";

// Pattern Test Component (Inline for simplicity)
const PatternTest = () => {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className={theme.headingStyles.h2 + " mb-6"}>
        Pattern Background Tests
      </h2>

      {/* Test 1: Direct pattern background */}
      <div className="mb-10">
        <h3 className={theme.headingStyles.h3 + " mb-3"}>
          Direct Pattern Background
        </h3>
        <div className="bg-pattern h-40 w-full rounded-lg flex items-center justify-center">
          <p className="font-bold text-white bg-cerulean-500 px-4 py-2 rounded">
            Pattern as direct background
          </p>
        </div>
      </div>

      {/* Test 2: Pattern with color overlay */}
      <div className="mb-10">
        <h3 className={theme.headingStyles.h3 + " mb-3"}>
          Pattern with Color Background
        </h3>
        <div className="bg-pattern bg-cerulean-700 h-40 w-full rounded-lg flex items-center justify-center">
          <p className="font-bold text-white px-4 py-2 rounded">
            Pattern with cerulean background
          </p>
        </div>
      </div>

      {/* Test 3: Pattern as overlay */}
      <div className="mb-10">
        <h3 className={theme.headingStyles.h3 + " mb-3"}>Pattern as Overlay</h3>
        <div className="bg-pattern-overlay bg-gradient-to-r from-cerulean-600 to-verdigris-600 h-40 w-full rounded-lg flex items-center justify-center">
          <p className="font-bold text-white px-4 py-2 rounded">
            Pattern as overlay on gradient
          </p>
        </div>
      </div>

      {/* Test 4: Pattern with Card */}
      <div className="mb-10">
        <h3 className={theme.headingStyles.h3 + " mb-3"}>
          Pattern with Card Component
        </h3>
        <div className="bg-pattern-overlay h-64 w-full rounded-lg p-6">
          <div className="bg-white dark:bg-rich-black-400 rounded-lg shadow-md h-full p-6">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h4 className={theme.headingStyles.h4}>
                Card with Pattern Background
              </h4>
              <p className="my-4">
                This card sits on top of a patterned background
              </p>
              <Button className="bg-cerulean text-white">Action Button</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Test 5: Now show full page pattern */}
      <div>
        <h3 className={theme.headingStyles.h3 + " mb-3"}>Full Page Pattern</h3>
        <p className="mb-4">
          Notice the subtle pattern in the background of the entire page. This
          is applied through the <code>bg-page-pattern</code> class on the
          layout wrapper.
        </p>
      </div>
    </div>
  );
};

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

      {/* Add Pattern Test Section */}
      <PatternTest />

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

      {/* Call to Action Section - now with pattern overlay */}
      <section className="py-16 bg-pattern-overlay bg-gradient-to-r from-cerulean to-verdigris text-white">
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
