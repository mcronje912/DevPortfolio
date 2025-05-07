// src/components/projects/ProjectCard.tsx
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  projectUrl,
}) => {
  return (
    <Card className="max-w-md">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-[200px]"
          src={imageUrl}
        />
      </CardBody>
      <CardFooter className="flex flex-col items-start">
        <h4 className="font-heading font-bold text-xl">{title}</h4>
        <p className="text-sm text-default-500 mt-2">{description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-ash-gray-200 text-rich-black">
              {tag}
            </span>
          ))}
        </div>
        <Button 
          as={Link}
          color="primary" 
          href={projectUrl} 
          className="mt-4"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};