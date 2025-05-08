// src/pages/index.tsx
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { projects } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { SkillBadge } from "@/components/skills/SkillBadge";
import { useTheme } from "@/components/ThemeProvider";

export default function HomePage() {
  // Featured projects
  const featuredProjects = projects.filter(project => project.featured);
  
  // Featured skills (just a sample from each category)
  const featuredSkills = skillsData.flatMap(category => 
    category.skills.slice(0, 1)
  ).slice(0, 4);

  return (
    <DefaultLayout>
      <Hero />
      
      <Divider className="my-12" />
      
      {/* Featured Projects Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className={title({ size: "lg" })}>Featured Projects</h2>
            <Button 
              as={Link} 
              href="/projects" 
              variant="light" 
              color="primary"
            >
              View All Projects →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                projectUrl={`/projects/${project.id}`}
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
            <Button 
              as={Link} 
              href="/skills" 
              variant="light" 
              color="primary"
            >
              View All Skills →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {featuredSkills.map(skill => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>
      
      <Divider className="my-12" />
      
      {/* Call to Action Section */}
      <section className="py-16 bg-pattern-overlay bg-gradient-to-r from-cerulean to-verdigris text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to work together?</h2>
          <p className="max-w-md mx-auto mb-8">
            I&apos;m currently available for freelance projects and full-time
            positions. Let&apos;s build something amazing together!
          </p>
          <Button 
            as={Link}
            href="/contact"
            color="default"
            variant="shadow"
            className="bg-white text-cerulean hover:bg-ash-gray-200"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}