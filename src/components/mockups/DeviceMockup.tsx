// src/components/mockups/DeviceMockup.tsx
import React from "react";

type DeviceType = "phone" | "tablet" | "laptop" | "desktop";

interface DeviceMockupProps {
  type: DeviceType;
  image: string;
  alt: string;
  className?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  type,
  image,
  alt,
  className = "",
}) => {
  // Generate WebP path if image is not already WebP
  const isAlreadyWebP = image.toLowerCase().endsWith('.webp');
  const webpSrc = isAlreadyWebP ? image : image.replace(/\.(jpe?g|png)$/i, '.webp');
  const fallbackSrc = image;

  // Common image properties for the picture element
  const pictureContent = (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={fallbackSrc}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </picture>
  );

  switch (type) {
    case "phone":
      return (
        <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] ${className}`}>
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden h-[572px] w-[272px] bg-transparent dark:bg-transparent">
            {pictureContent}
          </div>
        </div>
      );

    case "tablet":
      return (
        <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[800px] w-[560px] ${className}`}>
          <div className="h-[38px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[148px] rounded-r-lg"></div>
          <div className="h-[38px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[208px] rounded-r-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[208px] rounded-l-lg"></div>
          <div className="rounded-[2rem] overflow-hidden h-[772px] w-[532px] bg-transparent dark:bg-transparent">
            {pictureContent}
          </div>
        </div>
      );

    case "laptop":
      return (
        <div className={`relative mx-auto ${className}`}>
          {/* Screen */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-transparent dark:bg-transparent">
              {pictureContent}
            </div>
          </div>
          {/* Keyboard */}
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
      );

    case "desktop":
      return (
        <div className={`relative mx-auto ${className}`}>
          {/* Monitor */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-t-xl rounded-b-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[152px] md:h-[274px] bg-transparent dark:bg-transparent">
              {pictureContent}
            </div>
          </div>
          {/* Stand */}
          <div className="relative mx-auto bg-gray-800 dark:bg-gray-800 w-[80px] md:w-[120px] h-[20px] md:h-[30px] -mt-1"></div>
          <div className="relative mx-auto bg-gray-800 dark:bg-gray-800 w-[100px] md:w-[180px] h-[8px] md:h-[12px] rounded-b-xl"></div>
        </div>
      );

    default:
      return null;
  }
};