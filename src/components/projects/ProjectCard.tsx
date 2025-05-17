// src/components/projects/ProjectCard.tsx (updated with divider)
import { Card, CardFooter } from "@heroui/card";
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
    <Card 
      className="w-full h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col dark:bg-rich-black-900"
    >
      {/* Image section with improved gradient background */}
      <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
        {/* Background gradient - improved for light mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-cerulean-200/80 to-cerulean-600/50 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />

        {/* Image container */}
        <div className="relative h-full w-full flex items-center justify-center">
          {deviceType === "mobile" ? (
            // Mobile device - centered, enlarged sizing
            <img
              src={thumbnailUrl}
              alt={title}
              className="h-[230px] w-auto max-w-[50%] object-contain z-10"
            />
          ) : (
            // Desktop/laptop - fill container
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Content section - with flex to ensure consistent height */}
      <CardFooter className="flex flex-col flex-grow items-start p-5 bg-white dark:bg-rich-black-900 border-t border-gray-100 dark:border-rich-black-900">
        {/* Heading with decorative divider beneath it */}
        <div className="w-full mb-3">
          <h4 className="font-heading font-bold text-xl text-cerulean-700 dark:text-cerulean-300">{title}</h4>
          {/* Stylish gradient divider */}
          <div className="mt-2 h-[2px] w-30 bg-gradient-to-r from-cerulean-400 to-cerulean-600/30 dark:from-cerulean-600 dark:to-cerulean-900/50 rounded-full"></div>
        </div>
        
        <p className="text-sm text-rich-black-600 dark:text-ash-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-3 py-1 rounded-full bg-cerulean-100 dark:bg-ash-gray-800 text-cerulean-800 dark:text-ash-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>
        <Button 
          as={Link}
          color="primary" 
          href={projectUrl} 
          className="mt-4 bg-cerulean hover:bg-cerulean-600 text-white"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};