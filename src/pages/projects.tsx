import { useState } from "react";
import { Tabs, Tab } from "@heroui/tabs";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase()),
          ),
        );

  return (
    <DefaultLayout>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10">
            <h1 className={title({ size: "lg" })}>My Projects</h1>
            <p className="text-default-600 mt-4 max-w-2xl mx-auto">
              A collection of my work spanning web applications, mobile apps,
              and IoT integrations. Each project represents a unique challenge
              and solution.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-10">
            <Tabs
              aria-label="Project filters"
              color="primary"
              selectedKey={filter}
              variant="light"
              onSelectionChange={(key) => setFilter(key as string)}
            >
              <Tab key="all" title="All Projects" />
              <Tab key="mobile" title="Mobile Apps" />
              <Tab key="web" title="Web Projects" />
              <Tab key="iot" title="IoT" />
            </Tabs>
          </div>

          {/* Project Grid */}
          <ProjectGrid projects={filteredProjects} />
        </div>
      </section>
    </DefaultLayout>
  );
}
