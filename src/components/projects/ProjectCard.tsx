// src/components/projects/ProjectCard.tsx
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
  projectUrl: string;
  deviceType?: "desktop" | "mobile" | "dual";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnailUrl,
  tags,
  projectUrl,
  deviceType = "desktop",
}) => {
  return (
    <Card className="max-w-md overflow-hidden border border-transparent hover:border-cerulean-500/30 transition-all duration-300">
      <CardBody className="overflow-visible p-0">
        {/* Custom image container with better handling for different device types */}
        <div className={`relative w-full ${deviceType === "mobile" ? "bg-rich-black-50 dark:bg-rich-black-800 py-6 flex justify-center" : ""}`}>
          <img
            src={thumbnailUrl}
            alt={title}
            className={`
              ${deviceType === "mobile" 
                ? "h-[180px] w-auto max-w-[60%] object-contain" /* Reduced height and width */
                : "w-full h-[240px] object-cover"}
            `}
          />
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start p-5 bg-ash-gray-100/90 dark:bg-rich-black-900">
        <h4 className="font-heading font-bold text-xl text-rich-black-800 dark:text-white">{title}</h4>
        <p className="text-sm text-rich-black-600 dark:text-ash-gray-300 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 rounded-full bg-cerulean-100 dark:bg-cerulean-900/30 text-cerulean-800 dark:text-cerulean-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button 
          as={Link}
          color="primary" 
          href={projectUrl} 
          className="mt-4 bg-cerulean text-white"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};