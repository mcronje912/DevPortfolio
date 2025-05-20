// src/components/projects/ProjectCard.tsx
import { Card, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useAnalytics } from '@/hooks/useAnalytics';

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
  const { trackEvent } = useAnalytics();

  const handleProjectClick = () => {
    trackEvent('project_view', { 
      projectTitle: title,
      projectUrl,
      deviceType
    });
  };

  return (
    <Card className="w-full h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col dark:bg-rich-black-900">
      {/* Image section with improved gradient background */}
      <div 
        className="relative w-full h-[240px] overflow-hidden flex-shrink-0"
        aria-hidden="true" // Image is decorative, the title will describe the project
      >
        {/* Background gradient - improved for light mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-cerulean-200/80 to-cerulean-600/50 dark:from-cerulean-600/50 dark:to-rich-black-400/50" />

        {/* Image container with proper sizing based on device type */}
        <div className="relative h-full w-full flex items-center justify-center p-4">
          {deviceType === "mobile" ? (
            // Mobile device thumbnails
            <img
              alt={title}
              className="h-auto max-h-[95%] w-auto max-w-[85%] object-contain z-10"
              loading="lazy"
              src={thumbnailUrl}
            />
          ) : (
            // Desktop or dual thumbnails
            <img
              alt={title}
              className="h-auto max-h-[100%] w-auto max-w-[95%] object-contain z-10"
              loading="lazy"
              src={thumbnailUrl}
            />
          )}
        </div>
      </div>

      {/* Content section - with flex to ensure consistent height */}
      <CardFooter className="flex flex-col flex-grow items-start p-5 bg-white dark:bg-rich-black-900 border-t border-gray-100 dark:border-rich-black-900">
        {/* Heading with decorative divider beneath it */}
        <div className="w-full mb-3">
          <h3 className="font-heading font-extrabold text-2xl tracking-tight text-cerulean-700 dark:text-cerulean-300">
            {title}
          </h3>
          {/* Wider gradient divider */}
          <div className="mt-2 h-[2px] w-36 bg-gradient-to-r from-cerulean-500 to-cerulean-600/30 dark:from-cerulean-500 dark:to-cerulean-800/50 rounded-full" aria-hidden="true" />
        </div>

        <p className="text-sm text-rich-black-600 dark:text-ash-gray-200">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-3" aria-label="Project tags">
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
        <div className="flex-grow" />
        
        <Button
          as={Link}
          className="mt-4 bg-cerulean hover:bg-cerulean-400 text-white focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
          color="primary"
          href={projectUrl}
          aria-label={`View details of ${title} project`}
          onClick={handleProjectClick}
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};