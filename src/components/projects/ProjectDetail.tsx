import { title } from "@/components/primitives";
import { Project } from "@/data/projects";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="py-10">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <Link href="/projects" color="primary" className="mb-4 inline-block">
            ← Back to Projects
          </Link>
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

        <div className="bg-default-100 rounded-2xl overflow-hidden mb-10">
          <div className="bg-gradient-to-br from-cerulean to-verdigris h-96 w-full flex items-center justify-center">
            <p className="text-white text-xl font-medium">Project Image Placeholder</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-4">Project Overview</h2>
            <p className="text-default-700 mb-6">{project.longDescription}</p>
          </div>
          
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Chip key={tech} variant="flat" color="secondary">
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Completed</h3>
              <p>{project.completed}</p>
            </div>
            
            <Button
              as={Link}
              href="#" // You can update this to a demo link or GitHub repo
              color="primary"
              variant="shadow"
              className="mt-4"
            >
              View Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};