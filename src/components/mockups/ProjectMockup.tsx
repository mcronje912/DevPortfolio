// src/components/mockups/ProjectMockup.tsx
import React from "react";

import { DeviceMockup } from "./DeviceMockup";

interface ProjectMockupProps {
  mobileImage: string;
  desktopImage: string;
  alt: string;
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  mobileImage,
  desktopImage,
  alt,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 ${className}`}
    >
      <div className="md:order-2">
        <DeviceMockup
          alt={`${alt} - Mobile View`}
          image={mobileImage}
          type="phone"
        />
      </div>
      <div className="md:order-1 mt-8 md:mt-0">
        <DeviceMockup
          alt={`${alt} - Desktop View`}
          image={desktopImage}
          type="laptop"
        />
      </div>
    </div>
  );
};
