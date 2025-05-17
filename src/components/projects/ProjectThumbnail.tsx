// src/components/projects/ProjectThumbnail.tsx
import React from "react";

interface ProjectThumbnailProps {
  imageUrl: string;
  title: string;
  deviceType?: "laptop" | "phone" | "dual";
  className?: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  imageUrl,
  title,
  deviceType = "laptop",
  className = "",
}) => {
  return (
    <div 
      className={`relative overflow-hidden w-full aspect-video rounded-lg ${className}`}
      aria-label={`Thumbnail for ${title}`}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60 dark:from-cerulean-800/50 dark:to-rich-black-800/70" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-15 dark:opacity-10"
        style={{
          backgroundImage: "url('/images/global/background-pattern.svg')",
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />
      
      {/* Device mockup container */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {deviceType === "laptop" && (
          <div className="relative w-[85%] shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
            {/* Laptop frame */}
            <div className="relative">
              <div className="relative bg-rich-black-900 rounded-t-lg pt-4 pb-1 px-2">
                <div className="mx-auto h-1 w-10 bg-gray-500 rounded-full mb-1" />
                <div className="relative rounded overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="h-3 bg-rich-black-800 rounded-b-lg" />
            </div>
          </div>
        )}
        
        {deviceType === "phone" && (
          <div className="relative w-[40%] shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
            {/* Phone frame */}
            <div className="relative bg-rich-black-900 rounded-3xl p-2">
              <div className="mx-auto h-2 w-12 bg-gray-500 rounded-full mb-1" />
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full object-cover"
                />
              </div>
              <div className="mx-auto h-4 w-4 mt-2 rounded-full border-2 border-gray-500" />
            </div>
          </div>
        )}
        
        {deviceType === "dual" && (
          <div className="relative w-full flex items-center justify-center">
            {/* Laptop */}
            <div className="relative w-[70%] shadow-xl z-10 transform transition-transform hover:scale-[1.02] duration-500">
              <div className="relative bg-rich-black-900 rounded-t-lg pt-4 pb-1 px-2">
                <div className="mx-auto h-1 w-10 bg-gray-500 rounded-full mb-1" />
                <div className="relative rounded overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={`${title} desktop view`} 
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="h-3 bg-rich-black-800 rounded-b-lg" />
            </div>
            
            {/* Phone - position this with your secondary image */}
            <div className="absolute right-8 bottom-0 w-[25%] shadow-xl z-20 transform translate-y-4 rotate-6 transition-transform hover:scale-[1.05] duration-500">
              <div className="relative bg-rich-black-900 rounded-3xl p-1">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cerulean-900/30 to-rich-black-500/60" />
                  <div className="p-3 text-xs text-white text-center font-medium">
                    Mobile View
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Optional subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 pointer-events-none" />
    </div>
  );
};