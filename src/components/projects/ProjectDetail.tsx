import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import { Project } from "@/data/projects";
import { title } from "@/components/primitives";

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="py-10">
      <div className="container px-4 mx-auto">
        {/* Improved header section with better positioning */}
        <div className="flex flex-col mb-8">
          <div className="flex items-center mb-4">
            <Link
              className="flex items-center hover:opacity-80 transition-opacity mr-4"
              color="primary"
              href="/projects"
            >
              <span className="text-lg">←</span>
              <span className="ml-1">Projects</span>
            </Link>
          </div>

          <h1 className={title({ size: "lg", class: "mb-4" })}>
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Chip key={tag} color="primary" variant="flat">
                {tag}
              </Chip>
            ))}
          </div>
        </div>

        {/* Improved image container */}
        <Card className="mb-10 shadow-md overflow-hidden">
          <CardBody className="p-0">
            <div className="bg-gradient-to-br from-cerulean to-verdigris h-80 w-full flex items-center justify-center">
              {project.imageUrl.includes("placeholder") ? (
                <div className="text-center px-6">
                  <p className="text-white text-xl font-medium mb-2">
                    Project Image
                  </p>
                  <p className="text-white-800 text-sm opacity-80">
                    Screenshots coming soon
                  </p>
                </div>
              ) : (
                <img
                  alt={project.title}
                  className="w-full h-full object-cover"
                  src={project.imageUrl}
                />
              )}
            </div>
          </CardBody>
        </Card>

        {/* Content grid with improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Project Overview
            </h2>
            <div className="prose max-w-none text-default-700">
              <p className="mb-6">{project.longDescription}</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-default-50">
              <CardBody>
                <h3 className="text-xl font-heading font-bold mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Chip key={tech} color="secondary" variant="flat">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className="bg-default-50">
              <CardBody>
                <h3 className="text-xl font-heading font-bold mb-2">
                  Completed
                </h3>
                <p>{project.completed}</p>
              </CardBody>
            </Card>

            <Button
              as={Link}
              className="w-full mt-4"
              color="primary"
              href="#" // You can update this to a demo link or GitHub repo
              variant="shadow"
            >
              View Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
