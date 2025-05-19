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
  // Log the image path being used
  console.log(`Using image path: ${image}`);

  switch (type) {
    case "phone":
      return (
        <div 
          className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] ${className}`}
          role="img"
          aria-label={alt}
        >
          {/* Phone side buttons - purely decorative */}
          <div 
            className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"
            aria-hidden="true"
          ></div>
          <div 
            className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"
            aria-hidden="true"
          ></div>
          <div 
            className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"
            aria-hidden="true"
          ></div>
          <div 
            className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
            aria-hidden="true"
          ></div>
          
          {/* Actual screenshot display area */}
          <div className="rounded-[2rem] overflow-hidden h-[572px] w-[272px] bg-transparent dark:bg-transparent">
            <img
              src={image}
              alt={alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      );

    case "tablet":
      return (
        <div 
          className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[800px] w-[560px] ${className}`}
          role="img"
          aria-label={alt}
        >
          {/* Tablet buttons - purely decorative */}
          <div 
            className="h-[38px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[148px] rounded-r-lg"
            aria-hidden="true"
          ></div>
          <div 
            className="h-[38px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[208px] rounded-r-lg"
            aria-hidden="true"
          ></div>
          <div 
            className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[208px] rounded-l-lg"
            aria-hidden="true"
          ></div>
          
          {/* Actual screenshot display area */}
          <div className="rounded-[2rem] overflow-hidden h-[772px] w-[532px] bg-transparent dark:bg-transparent">
            <img
              src={image}
              alt={alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      );

    case "laptop":
      return (
        <div 
          className={`relative mx-auto ${className}`}
          role="img"
          aria-label={alt}
        >
          {/* Screen */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-transparent dark:bg-transparent">
              <img
                src={image}
                alt={alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Keyboard - purely decorative */}
          <div 
            className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]"
            aria-hidden="true"
          >
            <div 
              className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      );

    case "desktop":
      return (
        <div 
          className={`relative mx-auto ${className}`}
          role="img"
          aria-label={alt}
        >
          {/* Monitor */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-t-xl rounded-b-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[152px] md:h-[274px] bg-transparent dark:bg-transparent">
              <img
                src={image}
                alt={alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Stand - purely decorative */}
          <div 
            className="relative mx-auto bg-gray-800 dark:bg-gray-800 w-[80px] md:w-[120px] h-[20px] md:h-[30px] -mt-1"
            aria-hidden="true"
          ></div>
          <div 
            className="relative mx-auto bg-gray-800 dark:bg-gray-800 w-[100px] md:w-[180px] h-[8px] md:h-[12px] rounded-b-xl"
            aria-hidden="true"
          ></div>
        </div>
      );

    default:
      return null;
  }
};