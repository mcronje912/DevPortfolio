// src/pages/index.tsx
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  // Filter for just Etamax and Logistics Management System projects
  const featuredProjects = projects.filter(
    (project) =>
      project.id === "etamax" || project.id === "logistics-management-system",
  );

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
               <Card className="bg-default-50"> →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="flex justify-center">
                <ProjectCard
                  description={project.description}
                  deviceType={project.deviceType}
                  projectUrl={`/projects/${project.id}`}
                  tags={project.tags}
                  thumbnailUrl={project.thumbnailUrl}
                  title={project.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
